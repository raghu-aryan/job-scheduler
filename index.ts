import express from "express"
import { graphqlHTTP } from 'express-graphql'
import { createConnection } from "typeorm"
import { schema } from './graphql/schema'
import { root } from './graphql/root'
import bodyParser from "body-parser"
import { SendJobSchedule } from './config/jobmail'
const databaseDetail = require('./config/database');
const schedule = require('node-schedule');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/api', require('./routes/api.ts'));

// // Sending job mail.
schedule.scheduleJob('*/20 * * * * *', function () {
    SendJobSchedule();
});

createConnection(databaseDetail);
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at:4000');