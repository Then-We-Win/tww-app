module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'platform'),
        username: env('DATABASE_USERNAME', 'platform'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
