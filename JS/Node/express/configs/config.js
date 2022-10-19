module.exports = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/initial_db",
  PORT1: process.env.PORT || 5000,

  ACCESS_TOKEN_SECRET: "TOKEN_SEVRET",
  REFRESH_TOKEN_SECRET: "REFRESH_SEVRET",
  ACTION_TOKEN_SECRET: "ACTION_TOKEN",

  USER_EMAIL: process.env.USER_EMAIL || "",
  USER_PASSWORD: process.env.USER_PASSWORD || "",
  RECIEVER_EMAIL: "griforivveronika@gmail.com",

  FRONTEND_URL: "https://google.com",

  S3_BUCKET: process.env.S3_BUCKET,
  S3_REGION: process.env.S3_REGION,

  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_KEY: process.env.S3_SECRET_KEY,
};
