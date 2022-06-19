const router = require("express").Router();
const { Review } = require("../models/Review");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.render("all-booklogs", {
      layout: "booklog-main",
      reviews,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/booklog/new-review", withAuth, (req, res) => {
  res.render("new-booklog", {
    layout: "booklog-main",
  });
});

module.exports = router;
