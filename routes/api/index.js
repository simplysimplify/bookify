const router = require("express").Router();

const userRoutes = require('./user-routes');
const BookGenre = require('./BookGenre')
const BookID = require('./BookID')

router.use("/users", userRoutes);
router.use("/books", BookGenre);
router.use("/id", BookID)

module.exports = router;
