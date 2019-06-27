const request = require('supertest');
const app = require('../public-directory/public.js');

describe('application routes', () => {
  it('returns a file from public directory', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(rest.text).toEqual(expect.stringContaining('YOU ARE A BADASS AT CODE'));
      });
  });

});
