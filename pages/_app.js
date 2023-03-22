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
import { RecoilRoot, useRecoilState } from "recoil";
import { accessTokenState } from "@/src/commons/store";

const GLOBAL_STATE = new InMemoryCache();
const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

export default function App({ Component, pageProps }) {
  const upLoadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([upLoadLink]),
    // cache: new InMemoryCache(),
    cache: GLOBAL_STATE,
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}
