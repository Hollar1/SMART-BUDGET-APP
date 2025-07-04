import { createContext, useContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionsProvider = ({ children }) => {

  const [filterState, setFilterState] = useState({
    transactionType: null,
    category: null
  });
  
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  const [transactions, setTransactions] = useState([]);
  


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
    const stored = JSON.parse(localStorage.getItem("transactions") ?? '[]');
    setTransactions(stored);
  }, []);
  


  useEffect(() => {
    let result = [...transactions];
  
    if (filterState.transactionType) {
      result = result.filter(
        t => t.transactionType === filterState.transactionType
      );
    }
  
    if (filterState.category) {
      result = result.filter(
        t => t.category.toLowerCase() === filterState.category.toLowerCase()
      );
    }
  
    setFilteredTransactions(result);
  }, [transactions, filterState]);
  


  const deleteTransaction = (transaction_id) => {
    const filteredTransaction = transactions.filter(
      (transaction) => transaction.id !== transaction_id
    );
    setTransactions(filteredTransaction);
    localStorage.setItem("transactions", JSON.stringify(filteredTransaction));
  };

  const handleFilterTransaction = (transactionType) => {
    setFilterState(prev => ({ ...prev, transactionType }));
  };
  
  const handleFilterByCategory = (category) => {
    setFilterState(prev => ({ ...prev, category }));
  };
  
  // const resetFilters = () => {
  //   setFilterState({ transactionType: null, category: null });
  // };
  
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        addTransactions,
        deleteTransaction,
        handleFilterTransaction,
        handleFilterByCategory
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => useContext(TransactionContext);
