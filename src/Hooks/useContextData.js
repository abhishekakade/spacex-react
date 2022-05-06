import { useContext } from "react";
import { DataContext } from "../App";

const useContextData = () => {
  // using ContextAPI to share fetched API data between components
  const allAPIData = useContext(DataContext);
  // console.log(allAPIData);
  const allLaunchesData = allAPIData?.allLaunches;
  const allLaunchpadsData = allAPIData?.allLaunchpads;
  const {
    apiData: apiDataLaunches,
    isLoading: isLoadingLaunches,
    serverError: serverErrorLaunches,
  } = allLaunchesData;
  const {
    apiData: apiDataLaunchpads,
    isLoading: isLoadingLaunchpads,
    serverError: serverErrorLaunchpads,
  } = allLaunchpadsData;

  // console.log(
  //   apiDataLaunches,
  //   isLoadingLaunches,
  //   serverErrorLaunches,
  //   apiDataLaunchpads,
  //   isLoadingLaunchpads,
  //   serverErrorLaunchpads
  // );
  return {
    apiDataLaunches,
    isLoadingLaunches,
    serverErrorLaunches,
    apiDataLaunchpads,
    isLoadingLaunchpads,
    serverErrorLaunchpads,
  };
};

export default useContextData;
