# Server Log Functionality

## Author
**Rohan Sadhukhan**

## Create Date
**1-JAN-2025**

## Description
This project provides a server logging functionality using the `winston` package. It includes:
- Logging informational messages.
- Logging errors.
- Retrieving and managing log files.

## Prerequisites

### Package Used
- **Name**: `winston`
- **Link**: [Winston on npm](https://www.npmjs.com/package/winston)

### Logs Path
Logs are stored in the directory: `rootDir/logs`.

---

## Routes
The following routes should be created for managing logs:

### 1. Retrieve Combined Logs
```http
GET /get-combined-logs
```
Controller: `serveCombinedLogController`

### 2. Clear Combined Logs
```http
GET /make-combined-logs-empty
```
Controller: `makeCombinedFileEmptyController`

### 3. Retrieve Error Logs
```http
GET /get-error-logs
```
Controller: `serveErrorLogController`

### 4. Clear Error Logs
```http
GET /make-error-logs-empty
```
Controller: `makeErrorFileEmptyController`

---

## Functions
Use the following functions for logging:

### Log an Information Message
```javascript
loggerPrint.info("INFO LOGGED!");
```

### Log an Error Message
```javascript
loggerPrint.error("LOGGED ERROR!");
```

---

## Steps to Implement

1. **Create Logs Folder**
   Ensure there is a `logs` folder in the root directory of your project (`rootDir/logs`).

2. **Install Winston**
   Use the following command to install the `winston` package:
   ```bash
   npm install winston
   ```

3. **Place Custom Logger File**
   Add the `customLogger.js` file to your project. This file should contain the configuration and setup for the `winston` logger.

4. **Create Routes**
   Define the following routes in your application:
   - `/get-combined-logs`
   - `/make-combined-logs-empty`
   - `/get-error-logs`
   - `/make-error-logs-empty`

5. **Test the Functionality**
   Use the `loggerPrint` functions (`loggerPrint.info` and `loggerPrint.error`) to log messages and verify the setup.

---

## Notes
- Ensure appropriate permissions are set for the `logs` folder.
- Test the routes to confirm the logs are accessible and can be cleared as expected.

---

## License
MIT

