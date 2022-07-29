import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://karyhealthproducts.com/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const authHeader = token ? `Bearer ${token}` : null;
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: authHeader,
    },
  }));

  return forward(operation);
});

const wooMiddleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */
  const session = sessionStorage.getItem("woocommerce-session");
  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "woocommerce-session": `Session ${session}`,
      },
    }));
  }

  return forward(operation);
});

// After the backend responds, we take the refreshToken from headers if it exists, and save it in the cookie.
const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;
    const wsession = headers.get("woocommerce-session");

    /**
     * Check for session header and update session in local storage accordingly.
     */
    if (wsession) {
      if (
        sessionStorage.getItem("woocommerce-session") !== wsession
      ) {
        sessionStorage.setItem("woocommerce-session", wsession);
      }
    }
    return response;
  });
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, wooMiddleware, afterwareLink, httpLink]),
});
