import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
        emails: [Email]!
        email(id: ID!): [Email]!
    }
    type Email {
        id: ID!
        email: String!
    }
    type Mutation {
        addEmail(email: String!):[Email]!
        removeEmail(id: ID!):[Email]!
    }
`);
export { schema }