import { createContext, useContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  console.log(transactions);

  const addTransactions = (transaction) => {
    setTransactions([
      ...transactions,
      {
        ...transaction,
        id: transactions.length + 1,
      },
    ]);

    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  useEffect(() => {
    const fetchTransactions = () => {
      const getTransactions = JSON.parse(localStorage.getItem("transactions"));
      setTransactions(getTransactions);
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
    console.log(transactionType);
    const filterTransactionType = transactions.filter(
      (transaction) => transaction.transactionType === transactionType
    );
    setTransactions(filterTransactionType);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
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
