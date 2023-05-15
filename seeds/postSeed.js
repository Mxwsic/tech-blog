const { Post } = require('../models')

const postData = [
  
  {
    title: 'firstpost',
    content: 'post 1',
    user_id: 1
  },
  {
    title: 'secondpost',
    content: 'post 2',
    user_id: 2

  }
]

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
