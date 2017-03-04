/* eslin global-require: 0 */
// get spawn
const spawn = require('child_process').spawn;
// require babel require hook
require('babel-core/register');

// reqlite instance
const reqlite = spawn('reqlite');
// wait for start
reqlite.stderr.on('data', () => {
  // require main tests
  const startTests = require('./main').default;
  startTests(reqlite);
});


// npm packages
import test from 'tape';
import request from 'supertest';

// our packages
import app from '../src/app';

test('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello World!';
      const actualBody = res.text;

      t.error(err, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});

test('POST /login', (t) => {
  request(app)
    .post('/login')
    .send({username: 'test', password: '123'})
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) =>  {
        const expectedBody = {
          username: 'test',
          id: 1
        };
        const actualBody = res.body;

        t.error(err, 'No error');
        t.deepEqual(actualBody, expectedBody, 'Retrieve user');
        t.end();
    });
});
