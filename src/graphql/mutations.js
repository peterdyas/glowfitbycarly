/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrograms = /* GraphQL */ `
  mutation createPrograms(
    $input: CreateProgramsInput!
    $condition: ModelProgramsConditionInput
  ) {
    createPrograms(input: $input, condition: $condition) {
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
export const updatePrograms = /* GraphQL */ `
  mutation UpdatePrograms(
    $input: UpdateProgramsInput!
    $condition: ModelProgramsConditionInput
  ) {
    updatePrograms(input: $input, condition: $condition) {
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
export const deletePrograms = /* GraphQL */ `
  mutation DeletePrograms(
    $input: DeleteProgramsInput!
    $condition: ModelProgramsConditionInput
  ) {
    deletePrograms(input: $input, condition: $condition) {
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
