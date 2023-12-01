const nodeMailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "hiter_man@mail.ru",
        pass: "hP3zTmvyfLasw08ypLtv",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  async sendResponse(vacancy, resume) {
    await this.transporter.sendMail({
      from: `Новое уведомление <hiter_man@mail.ru>`,
      to: "web.dev@dozp.kz",
      subject: ``,
      text: "",
      html: `<div><h1>Новый отклик на сайте fintechPro</h1>
                <p>Отлик на выкансию ${vacancy} с резюме ${resume}</p></div>`,
    });
    console.log(`email : send`);
  }
}

module.exports = new MailService();
