const router = require("express").Router();
const { Review, User } = require("../models/");
const withAuth = require("../utils/auth");

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.findAll({
//       where: {
//         user_id: req.session.user_id,
//       },
//     });

//     const reviews = reviewData.map((review) => review.get({ plain: true }));

//     res.render("all-booklogs", {
//       // layout: "booklog-main",
//       reviews,
//     });
//   } catch (err) {
//     res.redirect("login");
//   }
// });

router.post("/all-booklogs", withAuth, async (req, res) => {
  try {

    const currentReview = await Review.create(
      req.body
    );
    const currentUser = await User.findOne({
      where: {
        id: req.session.user_id
      }
    })
    await currentUser.addReview(currentReview)
    // res.status(200).json(reviewData);
    res.redirect("/booklog")
  } catch (err) {
    res.redirect("login");
  }
});


module.exports = router;
