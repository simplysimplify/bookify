const User = require("./user");
const Review = require('./Review')
//a review belongs to one book


//a review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete:'CASCADE'
})

User.hasMany(Review, {
  foreignKey: "reviewId",
  onDelete: "CASCADE",
});
module.exports = {
    User,
    Review
};
