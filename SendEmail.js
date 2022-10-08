import nodemailer from 'nodemailer';

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: 'gmail', //i use outlook
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({ name, email, message }) => {
  const options = {
    from: `<From ${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: 'Message My Portfolio Website',
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #ff0000; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ></a> 
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              From Kevin
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>FullName: <b>${name}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Message: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };

  Email(options)
};

export default EmailSender