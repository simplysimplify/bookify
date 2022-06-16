const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepg", { loggedIn: req.session.loggedIn });
});

router.get("/discover", withAuth, async (req, res) => {
  res.render("discoverpg", { loggedIn: req.session.loggedIn });
});

router.get("/quiz", withAuth, async (req, res) => {
  res.render("quiz", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signUp", async (req, res) => {
  res.render("signUp", { loggedIn: req.session.loggedIn });
});

module.exports = router;
