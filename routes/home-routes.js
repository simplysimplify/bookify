const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepg");
});

router.get("/discover", async (req, res) => {
  res.render("discoverpg");
});

router.get("/quiz", async (req, res) => {
  res.render("quiz");
});

module.exports = router;
