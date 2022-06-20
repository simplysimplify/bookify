const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const booklogRoutes = require("./booklog-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/booklog", booklogRoutes);

module.exports = router;
