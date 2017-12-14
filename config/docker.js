/**
 * Docker environment settings
 */

module.exports = {

  models: {
    connection: 'postgresql',
    migrate: 'alter'
  },

  port: 80,

  log: {
    level: process.env['LOG_LEVEL']
  },

  auth: {
    static: {
      username: process.env['APP_USERNAME'],
      password: process.env['APP_PASSWORD']
    }
  },
  appUrl: process.env['APP_URL'],
  connections: {
    postgresql: {
      adapter: process.env['TOLA_DB_ADAPTER'],
      host: process.env['TOLA_DB_HOST'],
      port: process.env['TOLA_DB_PORT'],
      user: process.env['TOLA_DB_USER'],
      password: process.env['TOLA_DB_PASS'],
      database: process.env['TOLA_DB_NAME']
    }
  },
  jwt: {
    // Recommended: 63 random alpha-numeric characters
    // Generate using: https://www.grc.com/passwords.htm
    token_secret: process.env['TOKEN_SECRET'],
  },
  session: {
    // Recommended: 63 random alpha-numeric characters
    // Generate using: https://www.grc.com/passwords.htm
    secret: process.env['TOKEN_SECRET'],
    database: process.env['TOLA_DB_NAME'],
    host: process.env['TOLA_DB_HOST'],
    user: process.env['TOLA_DB_USER'],
    password: process.env['TOLA_DB_PASS'],
    port: process.env['TOLA_DB_PORT']
  },

};
