import { getManager, getConnection } from 'typeorm'
import Email from '../entitties/email'

const resolver = {
    // Get list of emails
    emails: async () => await getAllEmails(),

    // Get single email
    email: (args: {id: number}) => {
        return getEmail(args.id)
    },

    // Add email
    addEmail: async (args: {email: String}) => {
        const email = args.email;
        const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail =  emailExpression.test(String(email).toLowerCase())
        if(!isValidEmail)
        throw new Error("Invalid email")
        return await createEmail(args.email);
    },

    // Remove email
    removeEmail: async (args: {id: number}) => {
        return await removeEmail(args.id);
    }
};

// Export resolver.
export { resolver }

async function getEmail(id: number) {
    return await getManager().find(Email, { id: id })
}

// Add email query.
async function createEmail(email: String) {
    var existUser = await getManager().find(Email,{ email: email })
    if(existUser.length < 1){
        let resp = await getConnection().createQueryBuilder().insert().into(Email).values({email: email}).execute();
        return await getManager().find(Email, { id: resp.identifiers[0].id})
    } else {
        throw new Error('This Email already exist')
    }
}

// Get email list query.
async function getAllEmails() {
    return await getManager().find(Email)
}

// Remove email query.
async function removeEmail(id: number) {
    var emailData = await getManager().find(Email, { id: id});
    if(emailData.length > 0){
        await getManager().delete(Email, id)
        return emailData
    }
    throw new Error('This is not exist')
}