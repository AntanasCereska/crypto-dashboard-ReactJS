import React, { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ showLess }) => {
  const count = showLess ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryproCurrencies, setCryproCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryproCurrencies(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";
  return (
    <div className="container">
      <div className="container-header">
        <h2>Most popular crypto currencies</h2>
        {!showLess && (
          <input
            className="input"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>

      <div className="cr-cards-wrapper">
        {cryproCurrencies?.map((cr) => (
          <div key={cr.id} className="cr-card">
            <div className="cr-card-header">
              <h3 className="cr-card-header-title">{cr.name}</h3>
              <img className="cr-card-header-img" src={cr.iconUrl} alt="" />
            </div>
            <p className="cr-card-text">Rank: {cr.rank}</p>
            <p className="cr-card-text">Price: {millify(cr.price)}$</p>
            <p className="cr-card-text">Market cap: {millify(cr.marketCap)}</p>
            <p className="cr-card-text">
              Change: {cr.change}%{" "}
              <Link
                to={`/crypto/${cr.id}`}
                className="cr-card-text cr-card-link"
                href={cr.websiteUrl}
              >
                🔗
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
