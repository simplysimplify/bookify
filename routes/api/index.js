const router = require("express").Router();

const userRoutes = require('./user-routes');
const BookGenre = require('./BookGenre')
const BookID = require('./BookID')
const BookLog =require('./booklog-routes')

router.use("/users", userRoutes);
router.use("/books", BookGenre);
router.use("/id", BookID)
router.use("/booklog", BookLog)

module.exports = router;
