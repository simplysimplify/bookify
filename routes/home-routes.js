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

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

module.exports = router;
