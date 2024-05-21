const redis = require('redis');
const config = require('./config');

exports.cacheConnection = async () => {
  try {
    await redis.createClient({
        host: config.redisHost,
        port: config.redisPort,
        // password: config.redisPassword, // Optional, if authentication is enabled
    });
    console.log('Redis Cache connected successfully.');
  } catch (error) {
    console.error('Redis connection error:', error);
  }
};

// Generate a function to stop redis
