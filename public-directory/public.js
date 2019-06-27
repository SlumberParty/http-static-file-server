const { createServer } = require('http');
const { parse } = require('url');

const makePage = (greeting) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dogs</title>
    <style>
      body {
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <h1>${greeting}</h1>
  </body>
  </html>`;
};

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/') {
    res.end(makePage('YOU ARE A BADASS AT CODE'));
  }
});

module.exports = app;