import {useContext } from "react";
import "./index.css";
import { optionalState } from "../Home";
import FinanceContext from "../../context/FinanceContext";
interface OptionalProps{
  optionalData:optionalState[]
}
const Calculations = (props : OptionalProps) => {
  // render() {
     const { optionalData } = props;
     const {income, goal} = useContext(FinanceContext)

    // console.log(optionalData);
    return (
      <div className="calculation">
        <div className="cal-container">
          <h2 className="cal-name">Calculation</h2>
          <hr />
          <div className="income-cart">
            <p>INCOME</p>
            <h2 className="money">${income}</h2>
          </div>
          <div className="circle">
            <img src="https://res.cloudinary.com/dwc2npg5b/image/upload/v1715018974/imgggggg_1_1_1_1_ibdfmw.png" alt="spent" className="circle-img"/>
          </div>
          <div className="available">
            <div className="avaal">
              <h1 className="ava">
                AVAILABLE
                <br />
                <span className="span">$2,000,00</span>
              </h1>
            </div>
            
            <div className="avaal">
              <h1 className="ava">
               SPENT
                <br />
                <span className="span">$8,000,00</span>
              </h1>
            
            </div>
          </div>
          <hr/>
          <div className="btn2">
            <button className="button-avail" type="button">Reset Expenses</button>

          </div>
        </div>
        <div className="opt-container">
          <h2 className="op-name">Optionals</h2>
          <hr />
          <div className="opt-cart">
            <p className="choose">CHOOSE ANY FIX EXPRESES</p>

            {optionalData.map((item: optionalState) => (
              <div className="row" key={item.id}>
                <div className="imgName">
                  {" "}
                  <img src={item.imgUrl} alt="img" className="img" />
                </div>
                <h4 className="img-name">{item.ImgName}</h4>
                <button className="btn-select" type="button">
                  Select
                </button>
              </div>
            ))}
          </div>
          <hr className="line-hr"/>
          <h3 className="goals">Goals</h3>
          <h5 className="goal-name">
          {goal}
          </h5>
        </div>
      </div>
    );
  }

export default Calculations;
