import { FaDollarSign } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import "./index.css";
const Header = () => {
  {
    console.log("hello");
  }

  return (
    <div className="home-bg">
      <div className="navBar">
      <div> <FaDollarSign className="dollar-img" /></div> 
        
          <div className="data">
            <p className="expenases-name">Expenses</p>
            <h1 className="heading">
              Monthly <span className="budget">Budget</span>
            </h1>
          </div>

          <div className="btnn">
            <button type="button" className="new-expanse-btn">
              New Expense
            </button>

            <button className="profile" type="button">
              {" "}
              <RxAvatar /> Welcome Alexander
            </button>
          </div>
        </div>
      </div>
   
  );
};
export default Header;
