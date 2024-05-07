import React from "react";

interface FinanceContextInterface {
  income: string;
  name: string;
  goal: string;
  setIncome: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setGoal: React.Dispatch<React.SetStateAction<string>>
}

const FinanceContext = React.createContext<FinanceContextInterface>({
  income: "",
  name: "",
  goal: "",
  setIncome: () => {},
  setName: () => {},
  setGoal: () => {}
});

export default FinanceContext;

