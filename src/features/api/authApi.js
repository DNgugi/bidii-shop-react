import { apiSlice } from "./api";
import { gql } from "graphql-request";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Register User
    registerUser: builder.mutation({
      query: (regData) => ({
        method: "POST",
        document: gql`
          mutation RegisterUser($username: String!, $email: String!) {
            registerUser(input: { username: $username, email: $email }) {
              user {
                databaseId
                username
                email
              }
            }
          }
        `,
        variables: {
          username: regData.username,
          email: regData.email,
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
                databaseId
                name
                email
              }
            }
          }
        `,
        variables: {
          username: loginData.username,
          password: loginData.password,
        },
      }),
      transformResponse: (responseData, meta) => {
        console.log(responseData)
        return responseData
      },
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
              orderId
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
        return responseData;
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useRegisterUserMutation,
  useGetProductQuery,
  useLoginUserMutation,
  useCreateOrderMutation,
} = authApiSlice;
