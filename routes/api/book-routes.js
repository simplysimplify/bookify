const router = require("express").Router();
const { Book } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newReview = await Book.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
