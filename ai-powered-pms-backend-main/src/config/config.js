// In actual implementation use .env and n
require('dotenv').config();
module.exports = {
    databaseUrl: process.env.DATABASE_URL || 'mongodb+srv://innovrd:innovrd@cluster0.a8ppwfr.mongodb.net/example?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    // redisHost: process.env.REDIS_HOST,
    // redisPort: process.env.REDIS_PORT,
    // redisPassword: process.env.REDIS_PASSWORD
};

