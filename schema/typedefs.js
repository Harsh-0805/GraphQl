const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheater: boolean
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum nationality {
    CANADA
    GERMANY
    INDIA
    CHILE
    BRAZIL
  }
`;

module.exports = { typeDefs };
