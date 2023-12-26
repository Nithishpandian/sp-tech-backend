const nodemailer = require("nodemailer");

// @desc    get products
// @route   GET /api/getproducts
// @access  private
const sendMail = async (req, res) => {

    const {firstName, lastName, emailId, message} = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: emailId,
    to: process.env.EMAIL_ID,
    subject: `From ${firstName + " " + lastName}`,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
