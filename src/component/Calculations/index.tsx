import  { Component } from "react";
import "./index.css";
import { PiSpotifyLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";

interface StockData {
  symbol: string;
  name: string;
  lastSale: string;
  netChange: string;
  pctChange: string;
  marketCap: string;
}

interface CalculationsState {
  stockData: StockData[];
}

class Calculations extends Component<CalculationsState> {
  state: CalculationsState = {
    stockData: [],
  };

  // componentDidMount() {
  //   this.fetchStockData();
  // }
  // here i caller similar api but after getting data unfortunatly it showing
  // "You have exceeded the monthly quota for request on your current plan "
  // fetchStockData = async () => {
  //   const url = "https://scrape-it-cloud.p.rapidapi.com/";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "25542c4468msh1658f6775774303p10b73ajsn3ec7740c03fb",
  //       "X-RapidAPI-Host": "scrape-it-cloud.p.rapidapi.com",
  //     },
  //     body: {
  //       url: "https://hasdata.com/",
  //       window_width: 1920,
  //       window_height: 1080,
  //       proxyType: "datacenter",
  //       block_resources: true,
  //       wait: 0,
  //       screenshot: false,
  //       jsRendering: false,
  //       extractEmails: true,
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  render() {
    return (
      <div className="cal-opt-con">
        <div className="calculation-container">
          <h1 className="cal-heading">Calculation</h1>
          <hr className="line" />
          <div className="income-cart">
            <h4>INCOME</h4>
            <h1 className="dollar">$2,700.00</h1>
          </div>
          <div className="avail-btn">
            <div className="available">
              <h3>AVALABLE</h3>
              <h4 className="span">$2,000.00</h4>
            </div>
            <div className="available">
              <h3>SPENT</h3>
              <h4 className="span">$800,00</h4>
            </div>
          </div>
          <hr />
          <button type="button" className="btn2">
            Reset Expenses
          </button>

          {/* <div>
            {this.state.stockData.map((stock) => (
              <div key={stock.symbol}>
                <p>Symbol: {stock.symbol}</p>
                <p>Name: {stock.name}</p>
                <p>Last Sale: {stock.lastSale}</p>
                <p>Net Change: {stock.netChange}</p>
                <p>% Change: {stock.pctChange}</p>
                <p>Market Cap: {stock.marketCap}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div className="optional-container">
          <h1 className="cal-heading">Optional</h1>
          <hr />
          <div className="optional-cart">
            <h3>CHOOSE ANY FIX EXPENSES</h3>
            <div className="col">
              <div className="row">
                <PiSpotifyLogo />
                <h4>SPOTIFY</h4>
                <button type="button" className="btn-select">
                  Select
                </button>
              </div>
              <div className="row">
              <FaInstagram />
                <h4>INSTA</h4>
                <button type="button" className="btn-select">
                  Select
                </button>
              </div>
              <div className="row">
              <GrAmazon />
                <h4>Amazon</h4>
                <button type="button" className="btn-select">
                  Select
                </button>
              </div >

              <div className="row">
              <FaTwitter />

                <h4>TWITTER</h4>
                <button type="button" className="btn-select">
                  Select
                </button>
              </div>
            </div>
          </div>
          <hr/>
          <h4 className="goal">Goals</h4>
          <p>"Save 10% of this amout entered thi month<br/>from my salary"</p>
        </div>
      </div>
    );
  }
}

export default Calculations;
