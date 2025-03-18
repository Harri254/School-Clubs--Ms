import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const clubs = [
  { name: "Science Club", description: "Exploring the wonders of science!" },
  { name: "Music Club", description: "Where melodies come to life!" },
  { name: "Drama Club", description: "Bringing stories to the stage!" },
  { name: "Sports Club", description: "For the love of athletics!" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Our School Clubs</h1>
        <p>Discover various clubs and find the one that suits you best!</p>
      </section>

      {/* Clubs List */}
      <section className="clubs-container">
        {clubs.map((club, index) => (
          <div key={index} className="club">
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            <Link to={`/club/${club.name}`} className="club-link">
              Visit {club.name}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
