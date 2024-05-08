//import { Component } from "react";
import Header from "../Header";
import "./index.css";
import NotFound from "../NotFound";
import Calculations from "../Calculations";
import Description from "../Description/index";
//import { useLocation } from "react-router-dom";
import { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";

export interface optionalState {
  id: string;
  imgUrl: string;
  ImgName: string;
}

// export interface WelcomeState {
//   Income: number;
//   Name: string;
//   Goal: string;
// }

const optionalList = [
  {
    id: "3639dd44-a5d5-11ec-b909-0242ac120002",
    imgUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1715085430/logo_4_dgv4w5.png",
    ImgName: "NETFLIX",
  },
  {
    id: "3639e17c-a5d5-11ec-b909-0242ac120002",
    imgUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1715085379/logo_iisdql.png",
    ImgName: "SPOTIFY",
  },
  {
    id: "3639e37a-a5d5-11ec-b909-0242ac120002",
    imgUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1715085423/logo_3_cv6qzs.png",
    ImgName: "AMAZON",
  },
  {
    id: "3639e532-a5d5-11ec-b909-0242ac120002",
    imgUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1715085396/logo_1_ejoyta.png",
    ImgName: "GOOGLE",
  },
  {
    id: "3639e8c0-a5d5-11ec-b909-0242ac120002",
    imgUrl:
      "https://res.cloudinary.com/dwc2npg5b/image/upload/v1715085414/logo_2_cmf6h0.png",
    ImgName: "FACEBOOK",
  },
];

export interface descriptionState {
  id: string;
  type: string;
  month: string;
  year: string;
  imageUrl: string;
}

const descriptionList: descriptionState[] = [
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

const Home: React.FC = () => {
  // const location=useLocation()
  // console.log(location.pathname)
  // const state=location.state
  // console.log("state",state)
   const a = useContext(FinanceContext)
   console.log("home", a)

  return(
    <div className="home-data">
    <Header />

    <div className="backgorund">
      <hr className="line" />

      <div className="home-container">
        <div className="home-cart">
          <div className="cart1">
            <h3 className="description">Description</h3>
            <div className="fil">
              <button className="filter-button">
                <p className="filter">Filter Expenses</p>
                <select className="select">
                  <option  value="all" selected>
                    All
                  </option>
                </select>
              </button>
            </div>
          </div>

          <NotFound />
        </div>
        <Calculations optionalData={optionalList} />
      </div>
      <hr />
      <Description descriptionData={descriptionList} />
    </div>
  </div>


  )
}

 
export default Home;
