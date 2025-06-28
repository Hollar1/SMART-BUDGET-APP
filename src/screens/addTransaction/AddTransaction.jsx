import React from "react";
import addTransactionStyles from "../addTransaction/addTransaction.module.css";
import NavBar from "../../component/navBar/NavBar";

function AddTransaction() {
  return (
    <div>
      <NavBar />
      <div className={addTransactionStyles.container}>
        <div className={addTransactionStyles.wrapper}>
          <b>Add Transactions</b>

          <form action="">
            <div>
              <label htmlFor="">Transaction Type</label>
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="">Expenses</option>
                <option value="">Income</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Description</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Amount (₦)</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Category</label>
              <select>
                <option value="">--Select--</option>
                <option value="">Food & dinning</option>
                <option value="">Transportation</option>
                <option value="">Shopping</option>
                <option value="">Entertainment</option>
                <option value="">Bill & Utilities</option>
                <option value="">Health Care</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Date</label>
              <input type="date" />
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
