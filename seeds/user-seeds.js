const { User } = require('../models');

const userData = [
    {
        username: "user_1",
        email: "user1@test.com",
        password: "test1"
    },
    {
        username: "user_2",
        email: "user2@test.com",
        password: "test2"
    },
    {
        username: "user_3",
        email: "user3@test.com",
        password: "test3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;