const User = require("./user");
const Review = require('./Review')
//a review belongs to one book


//a review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
})

User.hasMany(Review, {
  foreignKey: "review_id",
  onDelete: "CASCADE",
});
module.exports = {
    User,
    Review
};
