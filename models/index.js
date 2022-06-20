const User = require("./user");
const Book = require('./Book');
const Review = require('./Review')
//a review belongs to one book

Review.belongsTo(Book, {
    foreignKey: 'bookId',
    onDelete: 'CASCADE'
});

//user has many reviews
User.hasMany(Review, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

//a review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete:'CASCADE'
})
module.exports = {
    User,
    Book,
    Review
};
