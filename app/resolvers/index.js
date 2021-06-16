import { gql } from "apollo-server-express";
import * as db from "./../database";

export const typeDefs = gql`
  extend type Query {
    filesDataAPI: [APISchema]!
    testAPI: testSchema!
  }
  type testSchema {
    status: Int!
  }
  type APISchema {
    filesId: String!
    userId: String!
    fileLink: String!
    dateOfUpload: String!
    fileName: String!
  }
`;
export const resolvers = {
  Query: {
    filesDataAPI: async () => {
      const a = await db.files.findAll({
        raw: true,
      });
      return a;
    },
    testAPI: async (obj, args, context, info) => {
      return {
        status: 200,
      };
    },
  },
};
