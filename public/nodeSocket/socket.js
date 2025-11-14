/* =========================================================
 * 高并发安全版 · 纯字符串协议 · 发送者不自收
 * 仅替换 broadcast 与心跳 ping，其余逻辑 100 % 保持原样
 * ======================================================== */

const { Server: WebSocketServer } = require("ws");
const nodemailer = require("nodemailer");
const axios = require("axios");

// ------------------- 邮件与钉钉配置 -------------------
const transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true,
  auth: {
    user: "13012264890@163.com",
    pass: "BGFJVPQOGQAZODPM"
  }
});

const mailOptions = {
  from: "13012264890@163.com",
  to: "webyichen@163.com",
  subject: "广告转化通知",
  html: ""
};

async function sendDingTalkMessage(message) {
  try {
    await axios.post(
      "https://oapi.dingtalk.com/robot/send?access_token=6168821bda5bf8a616657640886d1a2fededb326bc66510e3b63641f032dc141",
      { msgtype: "text", text: { content: message } },
      { timeout: 3000 }
    );
  } catch (error) {
    console.error("钉钉通知发送失败:", error.message);
  }
}

async function sendDingGiftMessage(message) {
  try {
    await axios.post(
      "https://oapi.dingtalk.com/robot/send?access_token=f6f3bb1d0773bff095aab29b032f310d857355bfe1cb56855801480f629c0535",
      { msgtype: "text", text: { content: message } },
      { timeout: 3000 }
    );
  } catch (error) {
    console.error("钉钉提醒发送失败:", error.message);
  }
}

function sendEmail(text) {
  setImmediate(() => {
    sendDingTalkMessage(text);
    if (text.includes("转化通知")) {
      mailOptions.html = text;
      transporter.sendMail(mailOptions, (error) => {
        if (error) console.error("邮件发送失败:", error.message);
      });
    }
  });
}

function sendGiftEmail(text) {
  setImmediate(() => sendDingGiftMessage(text));
}

// ------------------- WebSocket 部分 -------------------
const wss = new WebSocketServer({ port: 30001 });

let lastUserId = 0;
const users = new Map();

console.log("------------------------");
console.log("WebSocket 已启动 ✅");
console.log("地址: ws://127.0.0.1:30001");
console.log("------------------------");

wss.on("connection", (ws) => {
  const userId = lastUserId++;
  users.set(userId, ws);
  console.log(userId, "连接成功");

  ws.isAlive = true;

  ws.on("pong", () => {
    ws.isAlive = true;
  });

  ws.on("error", (err) => {
    console.log(userId, "连接错误:", err.message);
    users.delete(userId);
  });

  ws.on("close", () => {
    console.log(userId, "连接关闭");
    users.delete(userId);
  });

  ws.on("message", (data) => {
    const obj = data.toString();

    // 异步处理钉钉/邮件逻辑，防止阻塞
    if (obj.includes("通知")) {
      sendEmail(obj);
    } else if (obj.includes("提醒")) {
      sendGiftEmail(obj);
    }

    // 异步广播（高并发安全版）
    setImmediate(() => broadcast(userId, obj));
  });
});

// ------------------- 高并发安全广播 -------------------
function broadcast(senderId, message) {
  const toDelete = []; // 先收集，再批量删
  
  let messageArr = message.split('@')
  let timeNow = messageArr[messageArr.length-1]
  if(timeNow.indexOf('time')>-1){
      let time = timeNow.split('time')
      let currentNowTime = new Date().getTime()
      if(currentNowTime-time>2000) {
          // 2秒前的消息直接不广播
          return;
      }
  }
  users.forEach((ws, id) => {
    if (id === senderId) return; // 不发给自己
    if (ws.readyState !== 1) {
      toDelete.push(id);
      return;
    }

    // 异步发送，失败/异常统一清理
    ws.send(message, (err) => {
      if (err) toDelete.push(id);
    });
  });

  // 延迟删除，防止遍历期 Map 乱序
  if (toDelete.length) {
    setImmediate(() => toDelete.forEach((id) => users.delete(id)));
  }
}

// ------------------- 定期心跳检测 -------------------
setInterval(() => {
  users.forEach((ws, id) => {
    if (!ws.isAlive) {
      console.log("检测到超时连接，关闭:", id);
      ws.terminate();
      users.delete(id);
    } else {
      ws.isAlive = false;
      // 异步 ping，异常立即 terminate
      ws.ping((err) => {
        if (err) {
          users.delete(id);
          ws.terminate();
        }
      });
    }
  });
}, 30000);
