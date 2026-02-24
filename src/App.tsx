import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import Currency from "./components/Currency";
import AppRouter from "./Routes";
import { BrowserRouter } from "react-router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartBadge from "./components/CartBadge";
import LoginButtons from "./components/LoginButtons";

function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Menu>
              <Currency />
              <ThemeSwitch />
              <CartBadge />
              <LoginButtons />
            </Menu>
            <main className="pt-6 mt-10">
              <AppRouter />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
