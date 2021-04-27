import { User } from '../entitties/User';
import { getManager } from "typeorm";
import { send_email } from './mail';

export const SendJobSchedule = async () => {
    var users = await getManager().find(User);
    var mailiedUsers:String[] = [] 
    users.forEach(function (user) {
        if(!mailiedUsers.includes(user.email)) {
            mailiedUsers.push(user.email)
            send_email(user.email, 'Welcome', 'Welcome to Apconic');
        }
    });
};