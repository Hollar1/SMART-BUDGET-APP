import React, { useState, useRef } from "react";
import navBarStyles from "../navBar/navBar.module.css";
import {
  FaChartColumn,
  FaHouse,
  FaListUl,
  FaPlus,
  FaXmark,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <nav className={navBarStyles.nav}>
        <span className={navBarStyles.icon_01}>
          {" "}
          <FaChartColumn />
        </span>
        <b>Smart Budget Tracker</b>
        <span className={navBarStyles.icon_02}>
          {!showOptions ? (
            <FaListUl onClick={handleShowOptions} />
          ) : (
            <FaXmark
              onClick={handleShowOptions}
              className={navBarStyles.close}
            />
          )}
        </span>
      </nav>

      {showOptions && (
        <section className={navBarStyles.sec_01}>
          <div tabIndex={"0"} onClick={()=>navigate("/")}>
            <FaHouse className={navBarStyles.icon} />
            <p>Dashboard</p>
          </div>

          <div tabIndex={"0"} onClick={()=>navigate("/add_transaction")}>
            <FaPlus className={navBarStyles.icon} />
            <p>Add Transaction</p>
          </div>

          <div tabIndex={"1"} onClick={()=>navigate("/transactions")}>
            <FaListUl className={navBarStyles.icon} />
            <p>Transaction</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default NavBar;
