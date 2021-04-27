import { getManager, getConnection } from 'typeorm'
import { User } from '../entitties/User'

const root = {
    // Get list of users
    users: async () => await getAllUsers(),

    // Get single user
    user: (args: {email: String}) => {
        return getUser(args.email)
    },

    // Add user
    addUser: async (args: {email: String}) => {
        let addResponse = await addUser(args.email);
        return [{email: args.email, message: addResponse}]
    },

    // Remove user
    removeUser: async (args: {id: String}) => {
        let removeResponse = await removeUser(args.id);
        return [{id: args.id, message: removeResponse}]
    }
    

};
// Export resolver.
export { root }

async function getUser(email: String) {
    return await getManager().find(User,{ email: email })
}

// Add user query.
async function addUser(email: String) {
    var existUser = await getManager().find(User,{ email: email })
    if(existUser.length < 1){
        let resp = await getConnection().createQueryBuilder().insert().into(User).values({email: email}).execute();
        return 'Record created successfully'
    } else {
        return 'This Email already exist'
    }
}

// Get user list query.
async function getAllUsers() {
    return await getManager().find(User)
}

// Remove user query.
async function removeUser(id: String) {
    await getManager().delete(User, id)
    return 'User removed successfully'
}