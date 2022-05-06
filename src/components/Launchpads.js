import "../Styles/Launchpads.css";
import { Link } from "react-router-dom";
import useContextData from "../Hooks/useContextData";
import { Rocket } from "@styled-icons/ionicons-sharp";

const Launchpads = ({ info }) => {
  
  const { isLoadingLaunches, apiDataLaunches, serverErrorLaunches } =
    useContextData();
  // console.log(isLoadingLaunches, apiDataLaunches, serverErrorLaunches);

  let launches = [];
  if (info.launches.length) {
    launches = info.launches.slice(0, 3);
  }

  const getLaunchNamesFromId = (id) => {
    
    let launchName = "";
    if (!isLoadingLaunches && !serverErrorLaunches) {
      let launchDetails = apiDataLaunches?.filter(
        (eachObj) => eachObj?.id === id
      );
      launchName = launchDetails[0]?.name;
      // console.log(launchDetails, launchDetails[0]?.name);
    }
    return launchName;
  };

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
                  <Rocket size="1rem" title="Unlock account" />
                  <Link className="launch-link" to={"/launches/" + launchID}>
                    {getLaunchNamesFromId(launchID)}
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
