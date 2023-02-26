import ContextProvider from "@/ContextProvider/ContextProvider";
import MainLayout from "@/layout/MainLayout/MainLayout";
import store from "@/redux/store/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ContextProvider>
    </Provider>
  );
}
