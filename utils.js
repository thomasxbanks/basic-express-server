const fetch = require('isomorphic-fetch');

const api = async (endpoint, options = {}) => {
  console.log('>>>>>> api()', endpoint, options);
  const raw = await fetch(endpoint, options);
  console.log('--- $raw', raw);
  const response = await raw.json();
  console.log('--- $response', response);
  return response;
};

module.exports = { api };
