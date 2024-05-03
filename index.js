import dotenv from "dotenv";
import { connect } from "mongoose";
import mainApp from "./src/app.js";
import devDebug from "./src/utils/dev-debug.js";

dotenv.config();

const port = process.env.PORT || 5001;
const dbUrl = process.env.DB_CONNECT;

(async () => {
  try {
    console.log("connecting...");
    await connect(dbUrl);
    console.log("connected DB");
  } catch (err) {
    console.log("connection failed");
    devDebug(err);
  }
})();

const app = mainApp();

app.listen(port, () => {
  console.log("server is running on port:", port);
});
