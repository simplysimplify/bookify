const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepg");
});

router.get("/discover", async (req, res) => {
  res.render("discoverpg");
});
module.exports = router;
