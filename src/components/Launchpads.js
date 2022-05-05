import React from "react";
import "../Styles/Launchpads.css";
import { Link } from "react-router-dom";


const Launchpads = ({ info }) => {
  let launches = [];
  if (info.launches.length) {
    launches = info.launches.slice(0, 3);
  }

  return (
    <div className="launchpads">
      <div className="launchpad-img-div">
        <img
          className="launchpad-img"
          src={info.images.large[0]}
          alt={info.full_name}
          height="250px"
          width="250px"
        />
      </div>
      <div className="launchpad-text-div">
        <h2 className="launchpad-name">{info.name}</h2>
        <p className="launchpad-fullname">{info.full_name}</p>
        <p className="launchpad-details">{info.details}</p>
        <p className="launchpad-status">
          <span className="launchpad-status-span">Status:</span> {info.status}
        </p>
        {/* Top 3 Launches from this Launchpad */}
        <h3>Launches</h3>
        <ul className="launches-list">
          {launches.length ? (
            launches.map((launchID) => {
              return (
                <li key={launchID}>
                  <Link
                    className="launch-link"
                    to={"/launches/" + launchID}
                  >
                    {launchID}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>Launch details unavailable...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Launchpads;
