import { IoCartOutline } from "react-icons/io5";
import './index.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="data">
        Looks Like You Haven't added any <span className="span">Expenses yet</span>
      </h1>
<br/>
      <p className="bin">
        No Worries , just hit the <span className="span">'Add' </span>Button
        <br /> To Get Started
      </p>
    
    <IoCartOutline className="cart-img" />
    </div>
  );
};
export default NotFound;
