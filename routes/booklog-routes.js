const router = require("express").Router();
const { Review } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/booklog/all-booklogs", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: {
        user_id: req.session.user_id,
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

router.post("/booklog/all-booklogs", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.create({
      where: {
        title: req.session.title,
        review_id: req.session.review_id,
      }
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.redirect("login");
  }
});


module.exports = router;
