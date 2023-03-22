// import '@/styles/globals.css'
import "../styles/myglobal.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import { RecoilRoot } from "recoil";
import ApolloSetting from "@/src/components/commons/apollo";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}
