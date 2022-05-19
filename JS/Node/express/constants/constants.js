module.exports = {
  CURRENT_YEAR: new Date().getFullYear(),

  EMAIL_REGEXP: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  PASSWORD_REGEXP: new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"),
};
