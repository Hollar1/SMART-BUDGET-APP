import React from "react";
import addTransactionStyles from "../addTransaction/addTransaction.module.css";
import NavBar from "../../component/navBar/NavBar";
import { useState } from "react";
import { useTransactionContext } from "../../utilities/theTransactionContex";

function AddTransaction() {

const {addTransactions}= useTransactionContext()



  const [holdData, setHoldData] = useState({
    transactionType: "",
    description: "",
    amount: "",
    category: "",
    date: "",
  });
  const clearData = () => {
    setHoldData({
      transactionType: "",
      description: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setHoldData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  addTransactions(holdData)
    // clearData();
  };

  return (
    <div>
      <NavBar />
      <div className={addTransactionStyles.container}>
        <div className={addTransactionStyles.wrapper}>
          <b>Add Transactions</b>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Transaction Type</label>
              <select
                value={holdData.transactionType}
                name="transactionType"
                onChange={handleOnChange}
              >
                <option value="">--Select--</option>
                <option value="Expenses">Expenses</option>
                <option value="Income">Income</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Description</label>
              <input
                type="text"
                value={holdData.description}
                name="description"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <label htmlFor="">Amount (₦)</label>
              <input
                type="text"
                value={holdData.amount}
                name="amount"
                onChange={handleOnChange}
                inputMode="numeric"
              />
            </div>

            <div>
              <label htmlFor="">Category</label>
              <select
                value={holdData.category}
                name="category"
                onChange={handleOnChange}
              >
                <option value="">--Select--</option>
                <option value="food $ dinning">Food & dinning</option>
                <option value="Transportation">Transportation</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bill & Utilities">Bill & Utilities</option>
                <option value="Health Care">Health Care</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Date</label>
              <input
                type="date"
                value={holdData.date}
                name="date"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <button>Add Expenses</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
