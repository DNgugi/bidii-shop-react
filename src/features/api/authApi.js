import { apiSlice } from "./api";
import { gql } from "graphql-request";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Register User
    registerUser: builder.mutation({
      query: (regData) => ({
        method: "POST",
        document: gql`
          mutation registerUser(
            $username: String!
            $email: String!
            $password: String!
          ) {
            registerUser(
              input: { username: $username, password: $password, email: $email }
            ) {
              user {
                id
                jwtAuthToken
                jwtRefreshToken
              }
            }
          }
        `,
        variables: {
          username: regData.username,
          email: regData.email,
          password: regData.username,
        },
      }),
      transformResponse: (responseData) => responseData.registerUser.user,
    }),
    //Login User
    loginUser: builder.mutation({
      query: (loginData) => ({
        method: "POST",
        document: gql`
          mutation LoginUser($username: String!, $password: String!) {
            login(input: { username: $username, password: $password }) {
              authToken
              user {
                id
                name
              }
            }
          }
        `,
        variables: {
          username: loginData.username,
          password: loginData.password,
        },
      }),
      transformResponse: (responseData) => responseData.login,
    }),
    //Refresh Token
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        method: "POST",
        document: gql`
          mutation RefreshToken($jwtRefreshToken: String!) {
            refreshJwtAuthToken(input: { jwtRefreshToken: $jwtRefreshToken }) {
              authToken
            }
          }
        `,
        variables: {
          jwtRefreshToken: refreshToken,
        },
      }),
      transformResponse: (responseData) => responseData.refreshJwtAuthToken,
    }),
    //Get Products
    getAllProducts: builder.query({
      query: () => ({
        method: "GET",
        document: gql`
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
        `,
      }),
      transformResponse: (responseData) => {
        return responseData.products.edges;
      },
    }),
    //Get Product
    getProduct: builder.query({
      query: (prodID) => ({
        method: "GET",
        document: gql`
          query GetProduct($id: ID!) {
            product(id: $id) {
              id
              name
              averageRating
              ... on SimpleProduct {
                id
                name
                price
                stockStatus
                salePrice
                description
                shortDescription
                onSale
                averageRating
                regularPrice
                image {
                  mediaItemUrl
                }
              }
              ... on VariableProduct {
                id
                name
                price
                stockStatus
                salePrice
                description
                shortDescription
                averageRating
                onSale
                regularPrice
                image {
                  mediaItemUrl
                }
              }
              type
            }
          }
        `,
        variables: {
          id: prodID,
        },
      }),
      transformResponse: (responseData) => {
        return responseData.product;
      },
    }),
    //Create Order
    createOrder: builder.mutation({
      query: ({
        customerId,
        customerNote,
        isPaid,
        lineItems,
        shipping,
        status,
      }) => ({
        method: "POST",
        document: gql`
          mutation CreateOrder(
            $customerId: Int
            $customerNote: String
            $isPaid: Boolean
            $lineItems: [LineItemInput]
            $shipping: CustomerAddressInput
            $status: OrderStatusEnum
          ) {
            createOrder(
              input: {
                customerId: $customerId
                customerNote: $customerNote
                isPaid: $isPaid
                lineItems: $lineItems
                shipping: $shipping
                status: $status
              }
            ) {
              order {
                id
              }
            }
          }
        `,
        variables: {
          customerId,
          customerNote,
          isPaid,
          lineItems,
          shipping,
          status,
        },
      }),
      transformResponse: (responseData) => {
        return responseData.order.id;
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useRegisterUserMutation,
  useGetProductQuery,
  useLoginUserMutation,
  useCreateOrderMutation
} = authApiSlice;
