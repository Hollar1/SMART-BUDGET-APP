import React from "react";
import dashboardStyles from "./dashboard.module.css";
import NavBar from "../../component/navBar/NavBar";
import { FaWallet } from "react-icons/fa6";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className={dashboardStyles.wrapper}>

        <section className={dashboardStyles.sec_01}>
          <div>
            <span>
              <FaWallet />
            </span>
            <p>Total Balance</p>
            <b>₦4,000.00</b>
          </div>
        </section>

        <section className={dashboardStyles.sec_02}>
          <div>
            <span>
              <FaWallet />
            </span>
            <p>Total Income</p>
            <b>₦4,000.00</b>
          </div>
        </section>

        <section className={dashboardStyles.sec_03}>
          <div>
            <span>
              <FaWallet />
            </span>
            <p>Total Expenses</p>
            <b>₦4,000.00</b>
          </div>
        </section>

        <section className={dashboardStyles.sec_04}>
          <div>
            <span>
              <FaWallet />
            </span>
            <p>Transactions</p>
            <b>₦4,000.00</b>
          </div>
        </section>

        <section className={dashboardStyles.sec_05}>
          <div>
            <span>
              <FaWallet />
            </span>

            <b>Spending by Categories</b>
          </div>
        </section>

        <section className={dashboardStyles.sec_06}>
          <div>
            <span>
              <FaWallet />
            </span>
            <b>7 Days Trend</b>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
