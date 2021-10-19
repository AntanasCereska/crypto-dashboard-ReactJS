import React, { useState } from "react";
import millify from "millify";

import { useGetExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return "Loading";
  console.log(exchangesList);
  console.log("exchangesList");

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>24h Trade volume</th>
            <th>Number of markets</th>
            <th>Market share</th>
          </tr>
          {exchangesList.map((exchange) => (
            <tr>
              <td>
                <img src={exchange.iconUrl} alt="" />
                <span>{exchange.name}</span>
              </td>
              <td>$ {millify(exchange.volume)}</td>
              <td>{millify(exchange.numberOfMarkets)}</td>
              <td>{millify(exchange.marketShare)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exchanges;
