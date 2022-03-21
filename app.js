const express = require('express');
const { createLogger, transports } = require('winston');

const app = express();
const port = 3000;

const logger = createLogger({
  transports: [new transports.Console()],
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
