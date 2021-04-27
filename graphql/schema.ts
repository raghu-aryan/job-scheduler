import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
        users: [User]!
        user(email: String!): [User]!
    }
    type User {
        id: ID!
        email: String!
    }
    type Mutation {
        addUser(email: String!):[AddUser]!
        removeUser(id: ID!):[RemoveUser]!
    }
    type AddUser {
        email: String!
        message: String!
    }
    type RemoveUser {
        id: ID!
        message: String!
    }
`);
export { schema }