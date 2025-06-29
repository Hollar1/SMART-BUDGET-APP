import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TransactionsProvider } from "./utilities/theTransactionContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </StrictMode>
);
