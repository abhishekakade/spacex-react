import React, { useEffect, useState } from "react";
// useParams will get the launch ID from the clicked link
import { useParams } from "react-router-dom";
import "../Styles/Launches.css";

import useContextData from "../Hooks/useContextData";
import { Launch } from "./Launch";

const Launches = () => {
  const [currentLaunchData, setCurrentLaunchData] = useState();

  const { launchId } = useParams();
  // console.log(launchId);

  // get the required data from context data
  const { apiDataLaunches, isLoadingLaunches, serverErrorLaunches } =
    useContextData();
  // console.log(apiDataLaunches, isLoadingLaunches, serverErrorLaunches);

  useEffect(() => {
    // takes the launchID from URL param and sets the state 
    const filteredLaunchData = (id) => {
      let filteredObj = {};
      filteredObj = apiDataLaunches?.filter((eachObj) => eachObj?.id === id);
      return filteredObj;
    };
    const launchData = filteredLaunchData(launchId);

    setCurrentLaunchData(launchData);
  }, [apiDataLaunches, launchId]);

  // console.log("currentLaunchData", !!currentLaunchData, currentLaunchData);

  return (
    <Launch
      isLoadingLaunches={isLoadingLaunches}
      serverErrorLaunches={serverErrorLaunches}
      currentLaunchData={currentLaunchData}
    />
  );
};

export default Launches;
