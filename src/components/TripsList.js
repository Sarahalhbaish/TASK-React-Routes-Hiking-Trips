import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { useSearchParams } from "react-router-dom";

function TripsList() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  const trips = tripsData
    .filter((trip) => (!difficulty || trip.difficulty.toLowerCase() === difficulty) &&
    trip.name.toLowerCase().includes(query.toLowerCase()))
    .map((trip, index) => <TripItem trip={trip} key={index} />);

    const handleDifficultyClick = (level) => {
      setSearchParams({ difficulty: level });
    }

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button className="btn btn-primary btn-xl" onClick={() => handleDifficultyClick("easy")}>Easy</button>
          <button className="btn btn-primary btn-xl" onClick={() => handleDifficultyClick("moderate")}>Moderate</button>
          <button className="btn btn-primary btn-xl" onClick={() => handleDifficultyClick("hard")}>Hard</button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsList;
