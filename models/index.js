const User = require("./User");
const Review = require('./Review')

//a review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete:'CASCADE'
})
module.exports = {
    User,
    Review
};
