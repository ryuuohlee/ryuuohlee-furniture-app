//required files
const app = require('../server/index.js').app;
const request = require('supertest');

//test for response from database
describe('Test response from server', () => {
  test('Send a get request for product details', function(done){
    request(app)
      .get('/api/products')
      .query({"product_name": "Lucius"})
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        done();
      })
  })
})
