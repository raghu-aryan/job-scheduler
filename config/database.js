module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [
        "entitties/User.ts"
    ],
}