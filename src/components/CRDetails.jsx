import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import Chart from "./Chart";
import {
  useGetCRDetailsQuery,
  useGetCRHistoryQuery,
} from "../services/cryptoApi";

const CRDetails = () => {
  const { CRId } = useParams();
  const [timePeriod, setTimePeriod] = useState("24h");
  const { data, isFetching } = useGetCRDetailsQuery(CRId);
  const { data: CRhistory } = useGetCRHistoryQuery({ CRId, timePeriod });
  const CRDetails = data?.data?.coin;
  console.log(CRhistory);
  if (isFetching) return "Loading...";

  console.log("data");
  const coinPrice = [];
  for (let i = 0; i < CRDetails.history?.length; i++) {
    coinPrice.push(CRDetails?.history[i]);
  }

  const time = ["7d", "30d", "1y", "5y"];
  return (
    <div className="container">
      <div className="details-header">
        <img style={{ height: "4rem" }} src={CRDetails.iconUrl} alt="" />
        <h1>
          {CRDetails.name} ({CRDetails.slug})
        </h1>
      </div>
      <div className="details-wrapper">
        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Rank</h4>
          <h3 className="stats-dashboard-card-stat">{CRDetails.rank}</h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Price</h4>
          <h3 className="stats-dashboard-card-stat">
            {millify(CRDetails.price)}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Market cap</h4>
          <h3 className="stats-dashboard-card-stat">
            {millify(CRDetails.marketCap)}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Number of markets</h4>
          <h3 className="stats-dashboard-card-stat">
            {millify(CRDetails.numberOfMarkets)}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Number of exchanges</h4>
          <h3 className="stats-dashboard-card-stat">
            {CRDetails.numberOfExchanges}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Total supply</h4>
          <h3 className="stats-dashboard-card-stat">
            {millify(CRDetails.totalSupply)}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Circulating Supply</h4>
          <h3 className="stats-dashboard-card-stat">
            {millify(CRDetails.circulatingSupply)}
          </h3>
        </div>

        <div className="details-card">
          <h4 className="stats-dashboard-card-header">Approved supply</h4>
          <h3 className="stats-dashboard-card-stat">
            {CRDetails.approvedSupply ? "✔️" : "❌"}
          </h3>
        </div>
      </div>

      <div className="details-flex">
        <select
          className="input"
          onChange={(e) => setTimePeriod(e.currentTarget.value)}
        >
          <option value="24h">24h</option>
          {time.map((date) => (
            <option value={date}>{date}</option>
          ))}
        </select>
        <h2>{CRDetails.name} Price chart</h2>

        {CRhistory?.data?.change > 0 ? (
          <h2 style={{ color: "green" }}>+{CRhistory?.data?.change}%</h2>
        ) : (
          <h2 style={{ color: "red" }}>{CRhistory?.data?.change}%</h2>
        )}
      </div>
      <Chart CRhistory={CRhistory} CRprice={millify(CRDetails.price)} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          marginBottom: "120px",
        }}
      >
        <h2>About {CRDetails.name}</h2>
        <p style={{ fontSize: "1.2rem" }}>
          {HTMLReactParser(CRDetails.description)}
        </p>
        <div>
          {CRDetails.links.map((link) => (
            <p>
              <a href={link.url}>{link.url}</a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRDetails;
