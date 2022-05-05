import React from "react";
// useParams will get the launch ID from the clicked link
import { useParams } from "react-router-dom";
import useFetchLaunchDetails from "../Hooks/useFetchLaunchDetails";
import "../Styles/Launches.css"


const Launches = () => {

  const { launchId } = useParams();
  console.log(launchId);

  const { isLoading, serverError, apiData } = useFetchLaunchDetails(
    `https://api.spacexdata.com/v4/launches/${launchId}`
  );

  return (
    <div>
      <h2>Launch Details</h2>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && serverError ? (
        <h3>Error fetching data. Try again later...</h3>
      ) : (
        <span>{JSON.stringify(apiData)}</span>
      )}
      <hr />

      <p>{apiData?.name}</p>
      <p>Details: {apiData?.details ? (apiData?.details) : (<span>No details available...</span>)}</p>
      <p>{apiData?.date_utc}</p>
      <p>Reused: {apiData?.cores[0]?.reused?.toString()}</p>
    </div>
  );
};

export default Launches;
