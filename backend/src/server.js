const app = require("./app");
require("dotenv").config();
const logger = require("./config/logger");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

server.on("error", (err) => {
  logger.error({ err }, "Failed to start server");
  process.exit(1);
});

let isShuttingDown = false;

function gracefulShutdown(signal) {
  if (isShuttingDown) {
    logger.info(`${signal} received: shutdown already in progress`);
    return;
  }
  isShuttingDown = true;

  logger.info(`${signal} received: closing HTTP server gracefully`);

  server.close((err) => {
    if (err) {
      logger.error({ err }, "Error during server close");
      process.exit(1);
    }

    logger.info("HTTP server closed. Exiting process.");
    process.exit(0);
  });

  setTimeout(() => {
    logger.error("Forcing shutdown after timeout");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
