import React from "react";
import "../../src/App.css";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "../components/Cryptocurrencies";
import News from "./News";
const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <div>
      <div className="container">
        <div className="stats-dashboard">
          <div className="stats-dashboard-card">
            <h4 className="stats-dashboard-card-header">
              Total cryptocurrencies
            </h4>
            <h3 className="stats-dashboard-card-stat">{globalStats.total}</h3>
          </div>
          <div className="stats-dashboard-card">
            <h4 className="stats-dashboard-card-header">Total exchanges</h4>
            <h3 className="stats-dashboard-card-stat">
              {millify(globalStats.totalExchanges)}
            </h3>
          </div>
          <div className="stats-dashboard-card">
            <h4 className="stats-dashboard-card-header">Total marketcap</h4>
            <h3 className="stats-dashboard-card-stat">
              {millify(globalStats.totalMarketCap)}
            </h3>
          </div>
          <div className="stats-dashboard-card">
            <h4 className="stats-dashboard-card-header">Total markets</h4>
            <h3 className="stats-dashboard-card-stat">
              {millify(globalStats.totalMarkets)}
            </h3>
          </div>
          <div className="stats-dashboard-card">
            <h4 className="stats-dashboard-card-header">Total 24h Volume</h4>
            <h3 className="stats-dashboard-card-stat">
              {millify(globalStats.total24hVolume)}
            </h3>
          </div>
        </div>
      </div>
      <Cryptocurrencies showLess />
      <News showLess />
    </div>
  );
};

export default Home;
