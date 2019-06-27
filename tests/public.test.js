const request = require('supertest');
const app = require('../public-directory/public.js');

describe('application routes', () => {
  it('returns a file from public directory', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('YOU ARE A BADASS AT CODE'));
      });
  });
  it('returns 404 if we hit a bad path', () => {
    return request(app)
      .get('/badPath')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.test).toEqual(expect.stringContaining('Sorry! Borked!'));
      });
  });
});
