import { useState } from "react";
import "../components/PricingTable.css";
import barChart from "../assets/bar-chart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function PricingTable() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [buttonText, setButtonText] = useState("");

  const handleTableSelect = (tableId, buttonText) => {
    setSelectedTable(tableId);
    setButtonText(buttonText);
  };

  return (
    <div className="pricingContainer">
      <img src={barChart} width="600px" alt="Bar chart sticker" />
      <h1>Right Plan For You</h1>
      <div className="pricingTable">
        <div
          className={`table ${selectedTable === "table1" ? "selected" : ""}`}
        >
          <h4>Free</h4>
          <p>
            Have a try at the world's most powerful & user-friendly POS software
            available now!
          </p>
          <h2>$0</h2>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Unlimited Listings
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Simple Analytics
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              1 Account
            </li>
          </ul>
          <button onClick={() => handleTableSelect("table1")}>
            {selectedTable === "table1" ? "Selected" : `Let's Go!`}
          </button>
        </div>
        <div
          className={`table ${selectedTable === "table2" ? "selected" : ""}`}
        >
          {" "}
          <h4>Premium</h4>
          <p>
            When your business is ready for more customers and revenues. It's
            time for this!
          </p>
          <h2>$12</h2>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Unlimited Listings
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Advanced Analytics
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              5 Account
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              White Labels
            </li>
          </ul>
          <button onClick={() => handleTableSelect("table2")}>
            {selectedTable === "table2" ? "Selected" : `Yes, Please!`}
          </button>
        </div>
        <div
          className={`table ${selectedTable === "table3" ? "selected" : ""}`}
        >
          {" "}
          <h4>Custom</h4>
          <p>
            Want more capabilities? Let's talk with our business partners that
            will tailor your needs!
          </p>
          <h2>-</h2>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              All Premium Capabilities
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Customized Analytics
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Customized Account
            </li>
            <li>
              {" "}
              <span>
                <FontAwesomeIcon
                  className="fa"
                  icon={faCircleCheck}
                  color="#EB5032"
                />
              </span>
              Made with your brand
            </li>
          </ul>
          <button onClick={() => handleTableSelect("table3")}>
            {" "}
            {selectedTable === "table3" ? "Selected" : `Call us!`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
