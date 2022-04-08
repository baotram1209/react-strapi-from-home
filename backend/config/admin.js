module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c333f550d0e38d1021dcdaa92e53ea9f'),
  },
});
