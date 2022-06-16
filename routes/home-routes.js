const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepg");
});

router.get("/discover", withAuth, async (req, res) => {
  res.render("discoverpg");
});

router.get("/quiz", withAuth, async (req, res) => {
  res.render("quiz");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

module.exports = router;
