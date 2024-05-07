// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Editoption from './component/Editoption'
import Home from './component/Home'
import Welcome from './component/Welcome'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import FinanceContext from './context/FinanceContext'
import { useState } from 'react'
//import FinanceContext from './context/FinanceContext'
export interface descriptionState{
  id:string,
  type:string,
  month:string,
  year:string,
  imageUrl:string
}
const descriptionList : descriptionState[] = [
  {
    id: "1",
    type: "Debts",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714988420/debts_inlifq.png",
  },
  {
    id: "2",
    type: "Food",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714988674/food_ltkvmt.png",
  },
  {
    id: "3",
    type: "Hobbie",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714975690/ocio_a6xjpz.png",
  },
  {
    id: "4",
    type: "Rent",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714988580/rent_tnxvdq.png",
  },
  {
    id: "5",
    type: "Savings",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714988612/savings_btporb.png",
  },
  {
    id: "6",
    type: "Health",
    month: "January",
    year: "12-2023",
    imageUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1714988643/salud_zgjrbz.png",
  },
];

function App() {
  const [income, setIncome] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [goal, setGoal] = useState<string>("")
  

  return (
    <>
    <BrowserRouter>
    <FinanceContext.Provider value={{income, setIncome, name, setName, goal, setGoal}}>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/welcome" element={<Home/>}/>
      <Route path="/edit" element={<Editoption descriptionData={descriptionList}/>}/>
    </Routes>
    </FinanceContext.Provider>
    </BrowserRouter>
   
     
      
    </>
  )
}

export default App
