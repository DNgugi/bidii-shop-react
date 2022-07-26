import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
  query {
    products {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          productMeta {
            description
            price
            rating
          }
        }
      }
    }
  }
`;

// export const REGISTER_USER_JWT = gql`
  // mutation RegisterUser() {
  //   registerUser(
  //     input: {
  //       username: $username
  //       password: $password
  //       email: $email
  //     }
  //   ) {
  //     user {
  //       jwtAuthToken
  //       jwtRefreshToken
  //     }
  //   }
  // }
// `;
