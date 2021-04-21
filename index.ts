import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
const bodyParser = require("body-parser");

const databaseDetails = require('./config/database.js');
const jobMail = require('./config/mail.js');
const schedule = require('node-schedule');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', require('./routes/api.ts'));

// Sending job mail.
schedule.scheduleJob('*/5 * * * * *', function(){
    jobMail.send_email('test@mailinator.com', 'welcome', 'Welcome to Apconic');
});

createConnection(databaseDetails);
app.listen("3001", (): void => {
    console.log("Server Running at 3001... ");
});