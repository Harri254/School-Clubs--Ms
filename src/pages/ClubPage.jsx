import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ClubPage.css";

const ClubPage = () => {
  const { clubName } = useParams();

  // Example data
  const members = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
  const patrons = ["Mr. Smith", "Mrs. Johnson"];

  const [showMembers, setShowMembers] = useState(false);
  const [showPatrons, setShowPatrons] = useState(false);

  return (
    <div className="club-page">
      <h1>{clubName}</h1>
      <img src={`/images/${clubName.toLowerCase()}.jpg`} alt={`${clubName}`} className="club-image" />

      <div className="member-patrons">
        {/* Members Section */}
      <div className="toggle-section">
        <button onClick={() => setShowMembers(!showMembers)}>
          {showMembers ? "Hide Members" : "Show Members"}
        </button>
        {showMembers && (
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Patrons & Matrons Section */}
      <div className="toggle-section">
        <button onClick={() => setShowPatrons(!showPatrons)}>
          {showPatrons ? "Hide Patrons & Matrons" : "Show Patrons & Matrons"}
        </button>
        {showPatrons && (
          <ul>
            {patrons.map((patron, index) => (
              <li key={index}>{patron}</li>
            ))}
          </ul>
        )}
      </div>
      </div>
      

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <p>No upcoming events at the moment.</p>
      </section>
    </div>
  );
};

export default ClubPage;
