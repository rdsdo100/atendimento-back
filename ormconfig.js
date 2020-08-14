
console.log(`process.env.DATABASE_URL = ${process.env.DATABASE_URL}`)
module.exports = {
   type: "postgres",
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: [
      "dist/entity/**/*.js"
   ],
   migrations: [
      "dist/database/migration/**/*.js"
   ],
   subscribers: [
      "dist/database/subscriber/**/*.js"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/database/subscriber"
   }
}