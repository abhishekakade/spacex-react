import React, { Fragment, useContext } from "react";
import Launchpads from "./Launchpads";
import { DataContext } from "../App";

const Home = () => {

  // using ContextAPI to share fetched API data between components
  const launchpadsAPIData = useContext(DataContext);
  const { isLoading, serverError, apiData } = launchpadsAPIData?.allLaunchpads;

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
              {apiData?.map((item) => (
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
