module.exports = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/initial_db",
  PORT1: process.env.PORT || 5000,
  ACCESS_TOKEN_SECRET: "TOKEN_SEVRET",
  REFRESH_TOKEN_SECRET: "REFRESH_SEVRET",
};
