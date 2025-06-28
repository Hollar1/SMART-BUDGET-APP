import React from "react";
import NavBar from "../../component/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transactionStyles from "../transactions/transaction.module.css";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

function Transactions() {
  return (
    <div>
      <NavBar />
      <div className={transactionStyles.container}>
        <div className={transactionStyles.wrapper}>
          <b>Recent Transactions</b>

          <form action="">
            <div>
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="">Expenses</option>
                <option value="">Income</option>
              </select>
            </div>

            <div>
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
          </form>
          <p>No transactions found!</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRegularHeart} />
          <FontAwesomeIcon icon={faSolidHeart} />
        </div>
      </div>
    </div>
  );
}
export default Transactions;
