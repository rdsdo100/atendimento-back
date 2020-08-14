module.exports = {
   type: "postgres",
   url: process.env.DATABASE_URL,
   host: "localhost",
   port: 5432,
   username: "postgres",
   password: "root",
   database: "atendimentos",
   synchronize: true,
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/database/migration/**/*.ts"
   ],
   subscribers: [
      "src/database/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/database/subscriber"
   }
}