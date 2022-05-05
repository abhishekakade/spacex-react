import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import Launches from "./components/Launches";


function App() {
  let params = useParams();
  console.log(params);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches/:launchId" element={<Launches />} />
      </Routes>
    </Router>
  );
}

export default App;
