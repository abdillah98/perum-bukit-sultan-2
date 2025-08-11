// import { gql } from "graphql-tag";

// export const typeDefs = gql`
//   type Role {
//     id: ID!
//     name: String!
//     description: String!
//     created: String
//     updated: String
//   }

//   type Category {
//     id: ID!
//     name: String!
//     created: String
//     updated: String
//   }

//   type Query {
//     roles(filter: String, sort: String, perPage: Int, page: Int): [Role]
//     role(id: ID!): Role
//     categories(filter: String, sort: String, perPage: Int, page: Int): [Category]
//     category(id: ID!): Category
//   }

//   type Mutation {
//     createRole(name: String!, description: String): Role
//     updateRole(id: ID!, name: String!, description: String): Role
//     deleteRole(id: ID!): Boolean

//     createCategory(name: String!): Category
//     updateCategory(id: ID!, name: String!): Category
//     deleteCategory(id: ID!): Boolean
//   }
// `;
