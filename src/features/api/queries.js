// import { gql } from "graphql-request";
import { gql} from "@apollo/client";
export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        databaseId
        name
        email
        jwtAuthToken
        jwtRefreshToken
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      edges {
        cursor
        node {
          id
          name
          sku
          averageRating
          ... on SimpleProduct {
            databaseId
            id
            name
            price
            stockStatus
            salePrice
            onSale
            regularPrice
            image {
              mediaItemUrl
            }
          }
          ... on VariableProduct {
            databaseId
            id
            name
            price
            stockStatus
            salePrice
            onSale
            regularPrice
            image {
              mediaItemUrl
            }
          }
          type
        }
      }
    }
  }
`;

export const REGISTER_USER = gql`
          mutation RegisterUser($username: String!, $email: String!) {
            registerUser(input: { username: $username, email: $email }) {
              user {
                databaseId
                username
                email
              }
            }
          }
`;


export const CHECKOUT = gql`
          mutation CheckOut(
            $shippingMethod: [String],
            $paymentMethod: String,
            $billing: CustomerAddressInput
          ){
            checkout(input: {
              shippingMethod: $shippingMethod,
              paymentMethod: $paymentMethod,
              billing: $billing
            }){
              order{
                databaseId,
                total
              }
            }
          }
`;

export const ADD_CART_ITEMS = gql`
  mutation AddCartItems($items: [CartItemInput]){
    addCartItems(input: {
      items: $items
    }){
      cart{
        total
      }
    }
  }
`;