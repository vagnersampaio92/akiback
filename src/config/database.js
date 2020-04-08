require('dotenv').config()



module.exports = {
  dialect: 'postgres',
  host:process.env.HOST_DATABASE,
  username:process.env.USERNAME_DATABASE,
  password:process.env.PASSWORD_DATABASE,
  database:process.env.DATABASE_POSTGRES,
  port: 5432,
  operatorsAliases: false,
  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true,

  },
   dialectOptions: {
    ssl: true
}
}

// HOST_DATABASE=ec2-52-203-98-126.compute-1.amazonaws.com
// PORT_DATABASE=5432
// USERNAME_DATABASE=znsvuapmtfarnt
// PASSWORD_DATABASE=8dc53c72a74b93424e9dfc3151fe59028f67c1708a699da84f6dfd1352d84f53
// DATABASE_POSTGRES=db70fjnj0i9t8k
// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
