import React, { useState } from "react";
import NavBar from "../../component/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transactionStyles from "../transactions/transaction.module.css";
import { useTransactionContext } from "../../utilities/theTransactionContex";
import { FaTrash } from "react-icons/fa6";

function Transactions() {
  // 4. Import filtered transactions
  const {
    deleteTransaction,
    transactions,
    filteredTransactions,

    handleFilterTransaction,
    handleFilterByCategory,
  } = useTransactionContext();

  const handleDelete = (transaction_id) => {
    deleteTransaction(transaction_id);
  };

  return (
    <div>
      <NavBar />
      <div className={transactionStyles.container}>
        <div className={transactionStyles.wrapper}>
          <b>Recent Transactions</b>

          <form action="">
            <div>
              <select onChange={(e) => handleFilterTransaction(e.target.value)}>
                <option value="">--Select--</option>
                <option value="Expenses">Expenses</option>
                <option value="Income">Income</option>
              </select>
            </div>

            <div>
              <select onChange={(e) => handleFilterByCategory(e.target.value)}>
                <option value="">--Select--</option>
                <option value="Food & dinning">Food & dinning</option>
                <option value="Transportation">Transportation</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bill & Utilities">Bill & Utilities</option>
                <option value="Health Care">Health Care</option>
              </select>
            </div>
          </form>
          {/* 5. use filteredTransactions instead of transactions */}
          {/* {transactions?.map((trans) => ( */}
          {filteredTransactions?.map((trans) => (
            <div key={trans.id}>
              <span>{trans.transactionType}</span>
              <span>{trans.description}</span>
              <span>{trans.amount}</span>
              <span>{trans.date}</span>
              <span>{trans.category}</span>
              <button
                onClick={() => {
                  handleDelete(trans.id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <p>No transactions found!</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Transactions;
