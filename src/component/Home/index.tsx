import { Component } from "react";
import Header from "../Header";
import "./index.css";
import NotFound from "../NotFound";
import Calculations from "../Calculations";
class Home extends Component {
  render() {
    return (
      <div>
         <Header />
         <hr className="line" />
        <div className="home-container">
          <div className="home-cart">
            <div className="cart1">
              <h3 className="description">Description</h3>
              <div className="fil">
                <button className="filter-button">
                  <p className="filter">Filter Expenses All</p>
                </button>
              </div>
            </div>
            <NotFound />
          </div>
          <Calculations />
        </div>
      </div>
    );
  }
}
export default Home;
