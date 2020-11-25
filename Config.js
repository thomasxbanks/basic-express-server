module.exports = {
  wordpress: {
    base: 'http://scrummable.com/wp-json/wp/v2',
    user: 'users',
    posts: 'posts',
    params: {
      me: ['_embed'],
      posts: ['_embed', 'author=1'],
      latest: ['_embed', 'author=1', 'per_page=1'],
    },
  },
};
