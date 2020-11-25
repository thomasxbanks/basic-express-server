const express = require('express');
const cors = require('cors');

const Config = require('./Config');
const { api } = require('./utils');

const app = express();

app.use(cors);

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/thom', async (req, res) => {
  console.log('>>>>>> /thom');
  const response = 'hello world';
  res.send(response);
});

app.get('/me', async (req, res) => {
  console.log('>>>>>> /me');
  const response = await api(`${Config.wordpress.base}/${Config.wordpress.user}/1?${Config.wordpress.params.me.join('&')}`);
  res.send(response);
});

app.get('/posts', async (req, res) => {
  console.log('>>>>>> /posts');
  const raw = await fetch('http://scrummable.com/wp-json/wp/v2/posts/?_embed&author=1');
  const response = await raw.json();
  res.send(response);
});

app.get('/latest', async (req, res) => {
  console.log('>>>>>> /latest');
  const raw = await fetch('http://scrummable.com/wp-json/wp/v2/posts/?_embed&author=1&per_page=1');
  const response = await raw.json();
  res.send(response);
});

// Final catch-all
// keep this last in line to act as 404
app.get('/*', (req, res) => {
  res.send('404');
});

app.listen(1338);
