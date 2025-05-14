var WebSocketServer = require("ws").Server;

const nodemailer = require('nodemailer');
 
 const axios = require('axios');
 
// 创建发送邮件的配置
const transporter = nodemailer.createTransport({
    host: 'smtp.163.com', // 例如 'gmail', 'hotmail'\\\
    port: 465,
    secure: true,
    auth: {
        user: '13012264890@163.com',
        pass: 'BGFJVPQOGQAZODPM'
    }
});
// 邮件配置
const mailOptions = {
    from: '13012264890@163.com', // 发件人
    to: 'webyichen@163.com', // 收件人
    subject: '广告转化通知', // 邮件标题
    // text: '手机ID: 总点击次数以达50次，需要转化了，请注意', // 文本内容
    html: '手机ID: 总点击次数以达50次，需要转化了，请注意' // HTML内容
};

async function sendDingTalkMessage(message) {
    try {
      // 备用地址，关键字是通知：https://oapi.dingtalk.com/robot/send?access_token=71739623bacbb4382eb40146626b4d1928604ab5d33ee9b26b9a78293738f1df
        const response = await axios.post('https://oapi.dingtalk.com/robot/send?access_token=6168821bda5bf8a616657640886d1a2fededb326bc66510e3b63641f032dc141', {
            msgtype: 'text', // 消息类型，text表示文本消息  markdown 消息类型为markdown
            text: {
                content: message // 消息内容
            },
            // markdown: {
            //   title: '通知标题', // 可选，消息的标题
            //   text: message // Markdown格式的消息内容
            // }
        });
    } catch (error) {
        console.error('Error sending DingTalk message:', error.message);
    }
}

async function sendDingGiftMessage(message) {
  try {
      const response = await axios.post('https://oapi.dingtalk.com/robot/send?access_token=f6f3bb1d0773bff095aab29b032f310d857355bfe1cb56855801480f629c0535', {
          msgtype: 'text', // 消息类型，text表示文本消息  markdown 消息类型为markdown
          text: {
              content: message // 消息内容
          },
          // markdown: {
          //   title: '通知标题', // 可选，消息的标题
          //   text: message // Markdown格式的消息内容
          // }
      });
  } catch (error) {
      console.error('Error sending DingTalk message:', error.message);
  }
}

function sendEmail(text){
    sendDingTalkMessage(text)
    if(text.indexOf('转化通知')>-1) {
        // 发送邮件通知
      mailOptions.html = text
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } 
      })
    }
}

function sendGiftEmail(text){
  // 发送钉钉通知
  sendDingGiftMessage(text)
}

const wss = new WebSocketServer({ port: 30001 });

let obj = null;
let lastUserId = 0;
const users = new Map();

wss.on("connection", function connection(ws) {

  const userId = lastUserId++;
  users.set(userId, ws);
  console.log(userId, "连接成功了");
  ws.on("error", ()=>{
    console.log(userId,'连接出错了')
    users.delete(userId);
  });
  ws.on("message", function message(data) {
    obj = data + "";
    console.log("received: %s", userId, obj);
    const client = users.get(userId);
    if(obj.indexOf('通知')>-1) {
      sendEmail(obj)
    }
    if(obj.indexOf('提醒')>-1) {
      sendGiftEmail(obj)
    }
    users.forEach((value, key) => {
      if (key != userId) {
        if (value) {
          value.send(obj);
        } else {
          console.log(`User with ID ${key} not found.`);
        }
      }
    });
    // wss.clients.forEach(function each(client) {
    //   //wss.clients存放着连接到我们服务器所有的客户端,通过遍历，将客户端的消息转发给其他客户端,从而实现群聊
    //   client.send(obj, { binary: false });
    // });
  });
  ws.on('close', () => {
    users.delete(userId);
    console.log(userId,'连接关闭了');
  });



});

console.log("--WebSocket-------------");
console.log("WebSocket address: ws://127.0.0.1:30001");
console.log("WebSocket has started.");
console.log("------------------------");

