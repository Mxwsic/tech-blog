const { User } = require('../models')

const userData = [
  {
    name: 'Daniel',
    password: 'DanDan123'
  },
  {
    name: 'Gage',
    password: 'GageGage123'
  }
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;