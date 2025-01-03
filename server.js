import express from "express";
import {
  loggerPrint,
  makeCombinedFileEmptyController,
  makeErrorFileEmptyController,
  serveCombinedLogController,
  serveErrorLogController,
} from "./utils/customLogger.js";

const app = express();

app.get("/test-logger", (req, res) => {
  try {
    loggerPrint.info("🟢 Logger Created");
    loggerPrint.error("🔴 Error Logger Created");
    res.status(500).json({
      message: `🟢 Logger Created !`,
      error: false,
      data: {},
    });
  } catch (error) {
    console.log("🚫 SERVER ERROR :: ", error);
    res.status(500).json({
      message: `🚫 INTERNAL SERVER ERROR :: ${error}`,
      error: true,
      data: {},
    });
  }
});

app.get("/get-combined-logs", serveCombinedLogController);
app.get("/make-combined-logs-empty", makeCombinedFileEmptyController);
app.get("/get-error-logs", serveErrorLogController);
app.get("/make-error-logs-empty", makeErrorFileEmptyController);

app.listen(8000, () => {
  console.log("🌍 Logger app Listning on Port :: 8000 🌍");
});
