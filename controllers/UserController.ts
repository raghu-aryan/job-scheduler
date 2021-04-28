import Email from '../entitties/email';
import { getConnection } from 'typeorm';

export class UserController {

    addUser = async (email: String) => {
        console.log('Create user');
        // let const {
        //     email: email
        // }
        //let resp = await getConnection().createQueryBuilder().insert().into(EmailRegistration).values({ email: email }).execute();
        
    }

    async allUsers  () {
        const users =  await getConnection().getRepository(Email).find();
        return users
    }
}