module.exports = {
    client: 'postgresql',
    connection: 'postgres://postgres:legacy96@localhost:5432/nycda',
  //     connection: {
  //   host : '127.0.0.1',
  //   user : 'your_database_user',
  //   password : 'your_database_password',
  //   database : 'myapp_test'
  // },

    pool: {
      min: 2,
      max: 10
    }
 }