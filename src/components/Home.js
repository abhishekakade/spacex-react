import React, { Fragment } from "react";
import Launchpads from "./Launchpads";
import useFetchLaunchDetails from "../Hooks/useFetchLaunchDetails";

const Home = () => {
  const { isLoading, serverError, apiData } = useFetchLaunchDetails(
    "https://api.spacexdata.com/v4/launchpads"
  );

  return (
    <Fragment>
      {!isLoading && serverError ? (
        <h3>Error fetching data. Try again later...</h3>
      ) : (
        <div id="main-div">
          <h1 style={{ textAlign: "center" }}>SpaceX Launchpads</h1>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <div className="launchpads-list">
              {apiData?.map((item, key) => (
                <Launchpads info={item} key={item.id}></Launchpads>
              ))}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Home;
