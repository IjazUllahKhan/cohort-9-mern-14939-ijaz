const { Router } = require("express");
const logger = require("../config/logger");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: { status: "ok" } });
});

module.exports = router;
