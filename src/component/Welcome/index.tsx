
import  {  FormEvent, useContext, useState } from "react";
import "./index.css";
import {  useNavigate } from "react-router-dom";
import FinanceContext from "../../context/FinanceContext";
//import {withRouter} from 'react-router-dom'


export interface WelcomeState  {
  Income: number;
  Name: string;
  Goal: string;
  redirect: boolean;
  incomeError: string;
  nameError: string;
  goalError: string;
}

const Welcome = () => {
  const {name, setName, income, setIncome, goal, setGoal} = useContext(FinanceContext)
  const navigate = useNavigate()
  const [nameErr, setNameErr] = useState<boolean>(true)
  const [incomeErr, setIncomeErr] = useState<boolean>(true)
  const [goalErr, setGoalErr] = useState<boolean>(true)
  const [nameErrMsg, setNameErrMsg] = useState<string>("")
  const [incomeErrMsg, setIncomeErrMsg] = useState<string>("")
  const [goalErrMsg, setGoalErrMsg] = useState<string>("")


  
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!income) {
      setIncomeErr(true)
    setIncomeErrMsg("Please enter your income");
    
     }
    if (!name) {
      setNameErr(true)
      setNameErrMsg("Please enter your name");
    }
    if (!goal) {
      setGoalErr(true)
      setGoalErrMsg("Please enter your goal");
    }
    
    if (name !== "" && goal !== "" && income !== "") {
      navigate("/welcome")
    }
  };
 
  return  (
      <div className="bg-container">
        <div className="image-cart">
          <h1 className="cart-title">
            Calculate Smarter,
            <br />
            Spend Wiser ...
          </h1>
          <div className="imgele">
            <img
              src="https://res.cloudinary.com/dwc2npg5b/image/upload/v1714802706/home-Illustrator_twlsqr.svg"
              alt="img"
              className="imageEle"
            />
          </div>
        </div>
        <div className="details-cart">
          <h1 className="heading">
            Monthly <span className="budget">Budget</span>
          </h1>
          <form className="forlEle" onSubmit={onSubmitForm} >
            <div className="carts">
              <label className="income">Insert Your Income</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              
               
              /><br/>
              {incomeErr && (
               <span className="error">{incomeErrMsg}</span>
              )}
            </div>
            <div className="carts">
              <label className="income">Insert Your Name</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={name}
                onChange={(e) => setName(e.target.value)}
              
             
              /><br/>
              {nameErr && (
                <span className="error">{nameErrMsg}</span>
              )}
            </div>
            <div className="carts">
              <label className="income">Insert Your Goal</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                
              
              /><br/>
              {goalErr && (
                <span className="error">{goalErrMsg}</span>
              )}
            </div>
            <div className="btn-con">
              <button type="submit" className="btn">
                Start Your Calculations
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Welcome