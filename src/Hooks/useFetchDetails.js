import { useEffect, useState } from "react";
import axios from "axios";

const useFetchLaunchDetails = (url) => {
  // console.log(url);

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (err) {
        setServerError(err);
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchData();
    // https://api.spacexdata.com/v4/launches/5eb87cfeffd86e000604b34d
  }, [url]);

  // console.log(launchInfo);
  return { isLoading, apiData, serverError };
};

export default useFetchLaunchDetails;
