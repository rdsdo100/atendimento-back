
module.exports = {
   type: "postgres" ,
   url: "postgres://postgres:root@localhost:5432/atendimentos",
   synchronize: true,
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
     "src/database/migration/**/*.ts"
         ],
   subscribers: [
      process.env.TYPEORM_SUBSCRIBERS
   ],
   cli: {
      entitiesDir: "src/entity" ,
      migrationsDir: "src/database/migration" ,
      subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR
   }
}