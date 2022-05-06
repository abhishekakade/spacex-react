import React from "react";
import { Link } from "react-router-dom";

export const Launch = ({
  isLoadingLaunches,
  serverErrorLaunches,
  currentLaunchData,
}) => {
  return (
    <div className="launches">
      <h1>Launch Details</h1>
      {isLoadingLaunches && <h3>Loading...</h3>}
      {!isLoadingLaunches && serverErrorLaunches && !currentLaunchData ? (
        <h3>Error fetching data. Try again later...</h3>
      ) : (
        // <span>{JSON.stringify(currentLaunchData)}</span>
        <>
          {currentLaunchData ? (
            <>
              <h2 className="launch-name">{currentLaunchData[0]?.name}</h2>

              <img
                alt={currentLaunchData[0]?.name}
                src={currentLaunchData[0]?.links?.patch?.small}
                height="250px"
                width="auto"
                className="launch-img"
              />
              <p className="launch-details">
                {currentLaunchData[0]?.details ? (
                  currentLaunchData[0]?.details
                ) : (
                  <span>Mission specific details unavailable...</span>
                )}
              </p>
              <p className="launch-date">
                Date:{" "}
                {currentLaunchData[0]?.date_utc
                  ? new Date(currentLaunchData[0]?.date_utc).toUTCString()
                  : null}
              </p>

              <p className="launch-reuse-status">
                Reused: {currentLaunchData[0]?.cores[0]?.reused?.toString()}
              </p>
              {currentLaunchData[0]?.links?.wikipedia ? (
                <a
                  href={currentLaunchData[0]?.links?.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="launch-wikipedia-links"
                >
                  Read more on Wikipedia
                </a>
              ) : null}
              <p>
                <Link className="launch-to-home" to="/">
                  Home
                </Link>
              </p>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};
