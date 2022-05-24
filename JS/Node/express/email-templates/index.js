const { emailActionsEnum } = require("../constants");

module.exports = {
  [emailActionsEnum.WELCOME]: {
    subject: "Welcome to our site",
    templateName: "welcome",
  },
  [emailActionsEnum.INVITE]: {
    subject: "Invite for you",
    templateName: "invite",
  },
};
