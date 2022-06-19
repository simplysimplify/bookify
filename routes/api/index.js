const router = require("express").Router();

const userRoutes = require('./user-routes');
const BookGenre = require('./BookGenre')
const BookID = require('./BookID')
const BookReview =require('./booklog-routes')

router.use("/users", userRoutes);
router.use("/books", BookGenre);
router.use("/id", BookID)
router.use("/review", BookReview)

module.exports = router;
