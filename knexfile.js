module.exports = {
  
        development: {
          client: 'pg',
          connection: 'postgres://localhost/newYearsResolutions_api'
      },
  
        production: {
            client: 'pg',
            connection: process.env.DATABASE_URL
        }
  
  };
