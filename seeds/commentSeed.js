const { Comment } = require('../models');

const commentData = [
    {
     content: 'content 1',
     user_id: 2,
     post_id: 1
    },
    {
      content: 'content 2',
      user_id: 1,
      post_id: 2
    }
  ]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;