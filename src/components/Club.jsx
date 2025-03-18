import React from "react";
import { Link } from "react-router-dom";
import "./Club.css";

const Club = ({ name, description }) => {
  return (
    <div className="club">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/club/${name.toLowerCase().replace(/\s/g, "-")}`} className="club-link">
        View Club
      </Link>
    </div>
  );
};

export default Club;
