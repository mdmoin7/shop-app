import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Currency from "./components/Currency";
import ProductList from "./containers/ProductList";
import Demo from "./containers/Demo";
import Checkout from "./containers/Checkout";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import { Provider } from "react-redux";
import appStore from "./store";
import Footer from "./components/Footer";
class App extends React.Component {
  state = { selectedCurrency: "INR", theme: "light" };
  render() {
    const { theme } = this.state;
    return (
      <Provider store={appStore}>
        <BrowserRouter>
          <Header theme={theme}>
            <ThemeSwitch changeTheme={(theme) => this.setState({ theme })} />
            <Currency theme={theme} />
          </Header>
          <ThemeContext.Provider value={theme}>
            <AppRouter />
          </ThemeContext.Provider>
          <Footer theme={theme} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
