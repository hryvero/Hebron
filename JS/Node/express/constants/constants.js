module.exports = {
  CURRENT_YEAR: new Date().getFullYear(),

  EMAIL_REGEXP: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  PASSWORD_REGEXP: new RegExp("^(?=.*).{8,}$"),

  IMAGE_MIMETYPES: ["image/jpeg", "image/png", "image/gif"],

  IMAGE_MAX_SIZE: 5 * 1024 * 1024,
};
