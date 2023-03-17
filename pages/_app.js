// import '@/styles/globals.css'
import "../styles/myglobal.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default function App({ Component, pageProps }) {
  const upLoadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([upLoadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
