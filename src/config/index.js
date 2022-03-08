require("dotenv").config();

const config = {
  BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
  BASIC_AUTH_PASS: process.env.BASIC_AUTH_PASS,
  HTTP_PORT: process.env.HTTP_PORT,
};

module.exports = config;
