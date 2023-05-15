const sequelize = require('../config/connection');
const seedUserData = require('./userSeed');
const seedPostData = require('./postSeed');
const seedCommentData = require('./commentSeed');

const seedDatabase = async () => {
     await sequelize.sync({ force: true });
    console.log('database seeded'); 

    await seedUserData();
    console.log('User data seeded');


     await seedPostData();
    console.log('Post data seeded'); 

     await seedCommentData();
    console.log('Comment seeded'); 
    process.exit(0);

};

seedDatabase();