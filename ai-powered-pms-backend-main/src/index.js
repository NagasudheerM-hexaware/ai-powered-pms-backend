//THIS CODE IS FOR AZURE FUNCTION
const compression = require('compression')
const cors = require('cors')
const express = require('express');
const logger = require('./utils/logger');
//const { createAzureFunctionHandler } = require('azure-function-express');
//Load package level dependencies

const exampleRoutes = require('./routes/exampleRoutes');
const kraRoutes = require('./routes/kraRoutes');
const profileRoutes = require('./routes/profileRoutes');
const logicAppRoutes = require('./routes/logicAppRoutes');
const genAIAPIRoutes= require('./routes/genAIRoutes');
const { databaseConnection } = require('./config/database');
const config = require('./config/config');
const { errorHandler } = require('./middlewares/errorHandling')
//Load local dependencies

const app = express();
//Load express app

app.use(express.json())
app.use(compression())
app.use(cors());
app.use(errorHandler);

app.use('/api', exampleRoutes)
app.use('/api', kraRoutes)
app.use('/api', profileRoutes)
app.use('/api', logicAppRoutes)
app.use('/api', genAIAPIRoutes)

app.get('/health', (req, res) => {
  res.json({
    success: true
  });
});

const startServer = async () => {
  try {
    await databaseConnection();
   // await cacheConnection();
    app.listen(config.port, () => {
     // console.log(`Standard Server is running on port ${config.port}`);
      logger.info(`Standard Server is running on port ${config.port}`);
    });
  } catch (error) {
   // console.error("Failed to start server:", error);
    logger.error("Failed to start server:", error);
  }
};

startServer();