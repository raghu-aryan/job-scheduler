import Email from '../entitties/email';
import { getManager } from "typeorm";
import { send_email } from './mail';

export const SendJobSchedule = async () => {
    var users = await getManager().find(Email, { sentMail: false })
    users.forEach(function (user) {
        send_email(user.email, 'Welcome', 'Welcome to Apconic', user.id);
    });
};