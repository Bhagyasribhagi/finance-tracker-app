
import React, { Component, ChangeEvent, FormEvent } from "react";
import "./index.css";
import { Navigate } from "react-router-dom";

interface WelcomeProps {
  Income: number;
  Name: string;
  Goal: string;
  redirect: boolean;
}

interface WelcomeState {
  Income: number;
  Name: string;
  Goal: string;
  redirect: boolean;
  incomeError: string;
  nameError: string;
  goalError: string;
}

class Welcome extends Component<WelcomeProps, WelcomeState> {
  state: WelcomeState = {
    Income: 0,
    Name: "",
    Goal: "",
    redirect: false,
    incomeError: "",
    nameError: "",
    goalError: ""
  };

  onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.Income) {
      this.setState({ incomeError: "Please enter your income" });
      return;
    }
    if (!this.state.Name) {
      this.setState({ nameError: "Please enter your name" });
      return;
    }
    if (!this.state.Goal) {
      this.setState({ goalError: "Please enter your goal" });
      return;
    }

    // If all fields are filled, proceed with form submission
    this.setState({ redirect: true });
  };

  onChangeIncome = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ Income: parseInt(e.target.value) });
    this.setState({ incomeError: "" }); 
  };

  onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ Name: e.target.value });
    this.setState({ nameError: "" }); 
  };

  onChangeGoal = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ Goal: e.target.value });
    this.setState({ goalError: "" }); 
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    const { Income, Name, Goal } = this.state;

    return (
      <div className="bg-container">
        <div className="image-cart">
          <h1 className="cart-title">
            Calculate Smarter,
            <br />
            Spend Wiser ...
          </h1>
          <div className="img">
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
          <form className="forlEle" onSubmit={this.onSubmitForm}>
            <div className="carts">
              <label className="income">Insert Your Income</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={Income}
                onChange={this.onChangeIncome}
              />
              {this.state.incomeError && (
               <span className="error">{this.state.incomeError}</span>
              )}
            </div>
            <div className="carts">
              <label className="income">Insert Your Name</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={Name}
                onChange={this.onChangeName}
              />
              {this.state.nameError && (
                <span className="error">{this.state.nameError}</span>
              )}
            </div>
            <div className="carts">
              <label className="income">Insert Your Goal</label>
              <br />
              <input
                type="text"
                className="income-type"
                value={Goal}
                onChange={this.onChangeGoal}
              />
              {this.state.goalError && (
                <span className="error">{this.state.goalError}</span>
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
    );
  }
}

export default Welcome;
