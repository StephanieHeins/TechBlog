const { Post } = require('../models');

const postData = [
    {
        title: "Test Post 1",
        content: "This is a test post 1234567890",
        user_id: 1
    },
    {
        title: "Test Post 2",
        content: "Testeststetstettseesttest",
        user_id: 2
    },
    {
        title: "Test Post 3",
        content: "rrrrrrrrrrrrrrrrrrrrrrrrrrr",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;