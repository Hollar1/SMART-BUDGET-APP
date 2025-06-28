import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTransaction from "../src/screens/addTransaction/AddTransaction";
import Transactions from "../src/screens/transactions/Transactions";
import Dashboard from "../src/screens/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add_transaction" element={<AddTransaction />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;

















































