import { createContext, useContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // 1. Initialized Filtered transactions state
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const addTransactions = (transaction) => {
    const newTransactions = [
      ...transactions,
      {
        ...transaction,
        id: transactions.length + 1,
      },
    ];
    setTransactions(newTransactions);
    localStorage.setItem("transactions", JSON.stringify(newTransactions));
  };

  useEffect(() => {
    const fetchTransactions = () => {
      // Explanation:
      // When we use JSON.parse(localStorage.getItem("transactions")), if there are no transactions saved yet,
      // localStorage.getItem("transactions") will return null. If we try to parse null, JSON.parse(null) gives us null.
      // This is a problem because we want an array ([]) to work with, not null.
      // If we try to use ...transactions when transactions is null, JavaScript will throw an error because you can't spread null.
      //
      // Solution:
      // To fix this, we use the "??" (nullish coalescing) operator to provide a default value.
      // If localStorage.getItem("transactions") is null, we use '[]' instead.
      // So, JSON.parse(localStorage.getItem("transactions") ?? '[]') will always give us an array,
      // either the saved transactions or an empty array if there are none yet.
      const getTransactions = JSON.parse(localStorage.getItem("transactions") ?? '[]');
      setTransactions(getTransactions);

      // 2. Make sure it contains all transactions when page loads
      setFilteredTransactions(getTransactions)
    };

    fetchTransactions();
  }, []);

  const deleteTransaction = (transaction_id) => {
    const filteredTransaction = transactions.filter(
      (transaction) => transaction.id !== transaction_id
    );
    setTransactions(filteredTransaction);
    localStorage.setItem("transactions", JSON.stringify(filteredTransaction));
  };

  const handleFilterTransaction = (transactionType) => {
    const filterTransactionType = transactions.filter(
      (transaction) => transaction.transactionType === transactionType
    );

    // 3. set filteredTransactions state to the result of filtering transactions
    setFilteredTransactions(filterTransactionType);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        addTransactions,
        deleteTransaction,
        handleFilterTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => useContext(TransactionContext);
