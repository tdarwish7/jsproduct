// our packages
import app from './app';
import {logger} from './util';
import {thinky} from './db';


// use thinky to initialize the database then start the server.
thinky.dbReady().then(() => {
  logger.info('Database ready, starting server...');
// start server
  app.listen(8080, function() {
    const host = this.address().address;
    const port = this.address().port;
    logger.info(`Listening at http://${host}:${port}`);
  });
});


// output all uncaught exceptions and rejections
process.on('uncaughtException', err => logger.error('uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('unhandled rejection:', error));
