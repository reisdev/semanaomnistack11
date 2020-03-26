// Update with your config settings.
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.SQLITE_DB || './src/database/db.sqlite3'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
