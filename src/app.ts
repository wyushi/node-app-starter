// lib/app.ts
import * as express from "express";
import { Logger } from "./logger/Logger";
import { LoggerFactory } from "./logger/LoggerFactory";

// Create a new express application instance
const app: express.Application = express();
const logger: Logger = LoggerFactory.create();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  logger.log('Example app listening on port 3000!');
});