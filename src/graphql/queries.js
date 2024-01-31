/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrograms = /* GraphQL */ `
  query GetPrograms($id: ID!) {
    getPrograms(id: $id) {
      id
      name
      description
      image
      day
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgramss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        day
        time
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
