const auth = require("basic-auth");
const { BASIC_AUTH_USER, BASIC_AUTH_PASS } = require("../config");

const basicAuth = async (req, res, next) => {
  console.log("middleware: basic auth.");
  const user = await auth(req);
  if (
    user &&
    user.name.toLocaleLowerCase() === BASIC_AUTH_USER.toLocaleLowerCase() &&
    user.pass === BASIC_AUTH_PASS
  ) {
    console.log("Basic Auth: [Success].");
    next();
  } else {
    res.statusCode = 401;
    res.end("Access Denied.");
  }
};

module.exports = basicAuth;
