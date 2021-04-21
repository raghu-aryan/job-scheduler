import express from "express";
import { createConnection } from "typeorm";
const bodyParser = require("body-parser");

const databaseDetails = require('./config/database.js');
const jobMail = require('./config/mail.js');
const SendJobSchedule = require('./config/jobmail.ts');
const schedule = require('node-schedule');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', require('./routes/api.ts'));

// Sending job mail.
schedule.scheduleJob('*/20 * * * * *', function(){
    SendJobSchedule.SendJobSchedule();
});

createConnection(databaseDetails);
app.listen("3001", (): void => {
    console.log("Server Running at 3001... ");
});