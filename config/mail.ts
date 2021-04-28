const auth = require('./auth');
import Email from '../entitties/email'
import { getConnection } from 'typeorm'

export const send_email = (email: String, subject: String, message: String, id: number) => {
    const transporter = auth.transporter;
    var mailOptions = {
        from: 'er.raghuaryan@gmail.com',
        to: email,
        subject: subject,
        html: message,
        id: id
    };
    transporter.sendMail(mailOptions, async function (error: [], info: []) {
        if (error) {
            console.log(error);
            return false
        } else {
            await getConnection().createQueryBuilder().update(Email).set({sentMail: true}).where("id = :id", { id: id }).execute();
            return true;
        }
    });
}

