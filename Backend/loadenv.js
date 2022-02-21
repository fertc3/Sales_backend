const path = require("path");
const dotenv = require("dotenv");

try {
  let env = process.env.NODE_ENV;
  let result = {};

  result = dotenv.config({ path: path.resolve(".env.example") });
} catch (e) {
  dotenv.config({ path: path.resolve(".env.dev") });
}
