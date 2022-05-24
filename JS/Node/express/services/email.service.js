const nodemailer = require("nodemailer");
const EmailTeplate = require("email-templates");
const path = require("path");

const {
  USER_EMAIL,
  USER_PASSWORD,
  FRONTEND_URL,
} = require("../configs/config");
const ApiError = require("../errors/ApiError");
const { userError, statusCode } = require("../constants/index");
const emailTemplates = require("../email-templates");

const sendMail = async (reciverMail, emailAction, locals = {}) => {
  const templateRender = new EmailTeplate({
    views: {
      root: path.join(process.cwd(), "email-templates"),
    },
  });

  const templateInfo = emailTemplates[emailAction];

  if (!templateInfo) {
    throw new ApiError(userError.wrongParams, statusCode.notValidStatus);
  }

  Object.assign(locals, { frontendURL: FRONTEND_URL });

  const html = await templateRender.render(templateInfo.templateName, locals);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_EMAIL,
      pass: USER_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: USER_EMAIL,
    to: reciverMail,
    subject: templateInfo.subject,
    html,
  });
};

module.exports = {
  sendMail,
};
