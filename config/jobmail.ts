import { User } from '../entitties/User';
import { getManager } from "typeorm";
const jobMail = require('./mail.js');

module.exports.SendJobSchedule = async () => {
    var users = await getManager().find(User);
    users.forEach(function (user) {
        jobMail.send_email(user.email, 'Welcome', 'Welcome to Apconic');
    });
};