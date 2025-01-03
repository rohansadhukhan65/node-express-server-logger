/*
    * @Author :: Rohan Sadhukhan .
    * @Create Date :: 1-JAN-2025.
    * @Info :: Server Log Functionality.
    * @Package Name :: `winston`
    * @Package Link :: `https://www.npmjs.com/package/winston`
    * @Logs Path :: `rootDir/logs`
    
    //* Routes need to create First .
    * app.get('/get-combined-logs', serveCombinedLogController)
    * app.get('/make-combined-logs-empty', makeCombinedFileEmptyController)
    * app.get("/get-error-logs", serveErrorLogController)
    * app.get("/make-error-logs-empty", makeErrorFileEmptyController)

    //* Functions to use logger .
    * loggerPrint.info("INFO LOGGED !")
    * loggerPrint.error("LOGGED ERROR !")
    
    //* STEPS
    1. Create logs folder . 
    2. install winston .
    3. place customLogger.js file in your project .
    4. create log access and make logs empty routes .
    5. use loggerPrint function to test the functionality .
*/

// ComonJs-module-import .....
// const winston = require('winston');
// const path = require('path');
// const fs = require('fs');

// Es6-module-import .....
import winston from "winston";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ! Fetching current time for log ......
const now = new Date();
const formattedDateTime = now.toLocaleString("en-US", {
  dateStyle: "medium", // 'full', 'long', 'medium', 'short'
  timeStyle: "short", // 'full', 'long', 'medium', 'short'
});

// ! Initialize Logger ......
const loggerPrint = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { timestamp: formattedDateTime },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

// ! Controller to Serve Combined Log ......
const serveCombinedLogController = async (req, res) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const rootPath = path.dirname(__dirname);
    res.sendFile(path.join(rootPath, "logs", "combined.log"));
  } catch (error) {
    res.status(500).json({
      message: `🔴 Internal Server Error :: ${error}`,
      error: true,
    });
  }
};

// ! Controller to Serve Error Log ......
const serveErrorLogController = async (req, res) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const rootPath = path.dirname(__dirname);
    res.sendFile(path.join(rootPath, "logs", "error.log"));
  } catch (error) {
    res.status(500).json({
      message: `🔴 Internal Server Error :: ${error}`,
      error: true,
    });
  }
};

// ! make Combined log empty Controller ......
const makeCombinedFileEmptyController = async (req, res) => {
  try {
    const rootPath = path.dirname(require.main.filename);
    const combinedFilePath = path.join(rootPath, "logs", "combined.log");
    fs.truncate(combinedFilePath, 0, (err) => {
      if (err) {
        console.error("Error truncating file:", err);
        res.status(500).json({
          message: `Internal Server Error :: ${err}`,
          error: true,
        });
      } else {
        res.status(200).json({
          message: `File Truncate(Empty) Successful !`,
          error: false,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error :: ${error}`,
      error: true,
    });
  }
};

// ! make Combined log empty Controller ......
const makeErrorFileEmptyController = async (req, res) => {
  try {
    const rootPath = path.dirname(require.main.filename);
    const combinedFilePath = path.join(rootPath, "logs", "error.log");
    fs.truncate(combinedFilePath, 0, (err) => {
      if (err) {
        console.error("Error truncating file:", err);
        res.status(500).json({
          message: `Internal Server Error :: ${err}`,
          error: true,
        });
      } else {
        res.status(200).json({
          message: `File Truncate(Empty) Successful !`,
          error: false,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error :: ${error}`,
      error: true,
    });
  }
};

// comonJs module export ......
// module.exports = {
//     loggerPrint: logger,
//     serveCombinedLogController,
//     serveErrorLogController,
//     makeCombinedFileEmptyController,
//     makeErrorFileEmptyController
// }

// Es6 Module export ......
export {
  loggerPrint,
  serveCombinedLogController,
  serveErrorLogController,
  makeCombinedFileEmptyController,
  makeErrorFileEmptyController,
};
