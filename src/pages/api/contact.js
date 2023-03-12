require("dotenv").config();
const axios = require("axios");
const qs = require("querystring");
const NodeMailer = require("nodemailer");

// SMTP情報を格納（Gmailの場合）
const smtpData = {
    host: "smtp.gmail.com", // Gmailのサーバ
    port: "465", // Gmailの場合　SSL: 465 / TLS: 587
    secure: true, // true = SSL
    auth: {
        user: "contact.uguide@gmail.com", // メールアドレス（自身のアドレスを指定）
        pass: process.env.CONTACT_EMAIL_PASS, // パスワード（自身のパスワードを指定）
    },
};

export default function contactapi(req, res) {
    if (req.method === "POST") {
        // Process a POST request

        let msg = `
    お名前： ${req.body.name} （${req.body.furigana}） \n
    メールアドレス： ${req.body.email} \n
    内容： ${req.body.message} \n
    `;

        const mailData = {
            from: '"新規問い合わせ" <' + smtpData.auth.user + ">", // 送信元名
            to: smtpData.auth.user, // 送信先
            replyTo: req.body.email,
            subject: "Uguide.jpからのお問い合わせ", // 件名
            text: msg, // 通常のメール本文
        };

        // SMTPサーバの情報をまとめる
        const transporter = NodeMailer.createTransport(smtpData);

        // メール送信
        transporter.sendMail(mailData, function (error, info) {
            if (error) {
                // エラー処理
                console.log(error);
                res.status(401).json({ status: "error" });
            } else {
                // 送信時処理
                console.log("Email sent: " + info.response);
                res.status(200).json({ status: "OK" });
            }
        });

        const clientMailData = {
            from: '"Uguide.jp事務局" <' + smtpData.auth.user + ">",
            to: req.body.email,
            subject: "【自動返信】お問い合わせありがとうございました。",
            text: `
      お問い合わせいただきありがとうございました。
      スタッフが内容を確認し、返信を致しますのでしばらくお待ちください。

      （自動返信になります。こちらのメールに返信をしないようにお願いいたします。）
      `,
        };

        //確認メールの送信
        transporter.sendMail(clientMailData, function (error, info) {
            if (error) {
                // エラー処理
                console.log(error);
            } else {
                // 送信時処理
                console.log("Email sent: " + info.response);
            }
        });
    } else {
        // Handle any other HTTP method
    }
}
