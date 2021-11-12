const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_content: "Thanks for the heads up"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_content: "Wonderful, you were close."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_content: "This was eye-opening."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;