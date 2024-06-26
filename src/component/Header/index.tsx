import { FaDollarSign } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import "./index.css";
import { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import Cookies from 'js-cookie'

const Header = () => {
  {
    console.log("hello");
  }
   const onLogout=()=>{
    Cookies.remove("jwt_token")
    window.location.replace("/login")
    console.log("logout")
  }

  const {name} = useContext(FinanceContext)

  return (
    <div className="navbar-bg">
      <div className="navBar">
        <div className="left-nav">
          <FaDollarSign className="dollar-img" />

          <div className="data">
            <p className="expenases-name">Expenses</p>
            <h1 className="heading2">
              Monthly <span className="budget">Budget</span>
            </h1>
          </div>
        </div>

        <div className="btnn">
          <button type="button" className="new-expanse-btn">
            New Expense
          </button>

          <button className="profile" type="button">
            {" "}
            <RxAvatar /> Welcome {name}
          </button>
          <button className="logout-btn" type="button" onClick={onLogout}>
            {" "}
           Logout
          </button>
        </div>
      </div>
      <h4 className="name-ale">Welcome to {name}</h4>
    </div>
  );
};
export default Header;
