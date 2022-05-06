import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Launches from "./components/Launches";
import useFetchDetails from "./Hooks/useFetchDetails";

// changed
export const DataContext = createContext();

function App() {
  // changed
  // all launchpads data
  const launchpadsURL = "https://api.spacexdata.com/v4/launchpads";
  const allLaunchpadsData = useFetchDetails(launchpadsURL);

  // all launches data
  const launchesURL = "https://api.spacexdata.com/v4/launches";
  const allLaunchesData = useFetchDetails(launchesURL);
  // console.log(allLaunchesData);

  // before change
  // let params = useParams();
  // console.log(params);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DataContext.Provider
              value={{
                allLaunches: allLaunchesData,
                allLaunchpads: allLaunchpadsData,
              }}
            >
              <Home />
            </DataContext.Provider>
          }
        />
        <Route
          path="/launches/:launchId"
          element={
            <DataContext.Provider
              value={{
                allLaunches: allLaunchesData,
                allLaunchpads: allLaunchpadsData,
              }}
            >
              <Launches />
            </DataContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
