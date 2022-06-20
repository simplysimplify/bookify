const router = require("express").Router();

const userRoutes = require('./user-routes');
const BookGenre = require('./BookGenre')
const BookID = require('./BookID')
const BookRecs = require("./bookRecs");
// const BookLog =require('./booklog-routes')

router.use("/users", userRoutes);
router.use("/books", BookGenre);
router.use("/id", BookID)
router.use("/bookrecs", BookRecs);
// router.use("/booklog", BookLog)

module.exports = router;
