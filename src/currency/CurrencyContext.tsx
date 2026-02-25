import { createContext, useContext, useEffect, useState } from "react";

type CurrencyContextType = {
  currency: string;
  rate: number;
  setCurrency: (code: string) => void;
  convert: (amount: number) => number;
  loading: boolean;
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

const BASE_CURRENCY = "USD";
const CACHE_KEY = "exchange_rates_cache";
const CURRENCY_KEY = "selected_currency";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export function CurrencyProvider({ children }: any) {
  const [currency, setCurrencyState] = useState<string>(() => {
    return localStorage.getItem(CURRENCY_KEY) || BASE_CURRENCY;
  });

  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);

  // Persist currency selection
  const setCurrency = (code: string) => {
    localStorage.setItem(CURRENCY_KEY, code);
    setCurrencyState(code);
  };

  useEffect(() => {
    const fetchRate = async () => {
      // if (currency === BASE_CURRENCY) {
      //   setRate(1);
      //   return;
      // }

      setLoading(true);

      // Check cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);

        const isValid =
          Date.now() - parsed.timestamp < CACHE_TTL && parsed.rates?.[currency];

        if (isValid) {
          setRate(parsed.rates[`INR${currency}`]);
          setLoading(false);
          return;
        }
      }

      try {
        const res = await fetch(
          `https://api.exchangerate.host/live?access_key=${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}&source=INR&currencies=INR,USD,EUR,GBP&format=1`,
        );
        const data = await res.json();

        const rates = data.quotes;

        // Save full rate map to cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            rates,
            timestamp: Date.now(),
          }),
        );
        console.log(rates);
        setRate(rates[`INR${currency}`]);
      } catch (err) {
        console.error("Failed to fetch exchange rate");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  const convert = (amount: number) =>
    currency === "INR" ? amount : amount * rate;

  return (
    <CurrencyContext.Provider
      value={{ currency, rate, setCurrency, convert, loading }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("CurrencyContext missing");
  return ctx;
};
