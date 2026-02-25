import { BrowserRouter } from "react-router";
import LoginButtons from "../auth/components/LoginButtons";
import CartBadge from "../cart/components/CartBadge";
import Currency from "../currency/components/Currency";
import { CurrencyProvider } from "../currency/CurrencyContext";
import { ThemeProvider } from "../theme/components/ThemeContext";
import ThemeSwitch from "../theme/ThemeSwitch";
import Footer from "../ui/components/Footer";
import Menu from "../ui/components/Menu";
import AppRouter from "./Routes";

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
