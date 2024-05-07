import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
interface d {
  descriptionData: descriptionState[];
}
import { descriptionState } from "../Home";

const Description: React.FC<d> = ({ descriptionData }) => {
  console.log("id", descriptionData);
  return (
    <div className="descrip-data">
      <div className="cart2">
        <h3 className="description">Description</h3>
        <div className="fil">
          <button className="filter-button">
            <p className="filter">Filter Expenses</p>
            <select className="select">
              <option value="1" selected>
                All
              </option>
            </select>
          </button>
        </div>
      </div>

      <Link to="/edit">
        <ul className="discript">
          {descriptionData.map((item: descriptionState) => (
            <div key={item.id}>
            <li className="li-items">
              <div className="separate">
                <img src={item.imageUrl} alt="img" className="img-ele" />
                <div className="data-name">
                  <h3 className="desc-name">{item.type}</h3>
                  <h4 className="date">
                    Date: {item.month}, {item.year}
                  </h4>
                </div>
              </div>
              <h1 className="money">$125,00</h1>
             
              
            </li>
            <hr className="line3" />
            </div>
          ))}
        </ul>
      </Link>
    </div>
  );
};
export default Description;
