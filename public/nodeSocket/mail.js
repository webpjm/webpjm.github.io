const nodemailer = require('nodemailer');
 
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
// const mailOptions = {
//     from: '13012264890@163.com', // 发件人
//     to: 'webyichen@163.com', // 收件人
//     subject: '游戏下载通知', // 邮件标题
//     // text: '手机ID: 总点击次数以达50次，需要转化了，请注意', // 文本内容
//     html: '手机ID: 总点击次数以达50次，需要转化了，请注意' // HTML内容
// };
 
// // 发送邮件
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
// });
