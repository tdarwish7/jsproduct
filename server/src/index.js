// our packages
import app from './app';

//start server
app.listen(8080, function () {
  const host = this.address().address;
  const port = this.address().port;
  console.log('Listening at http://${host}:${port}');
});


// output all uncaught exceptions
process.on('uncaughtException', err => console.error('uncaught exception:', err));
process.on('unhandledRejection', error => console.error('unhandled rejection:', error));
