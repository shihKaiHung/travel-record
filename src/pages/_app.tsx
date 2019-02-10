import { initStore } from "@core/store/store";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

interface AppState {
}

interface BaseAppProps {
  pageProps: object;
  store?: Store<AppState>;
}

class MyApp extends App<BaseAppProps> {
  public static async getInitialProps({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
  }

  public render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
