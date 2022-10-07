
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/home";
import LoadDroneDetails from "./pages/load-drone-details";
import RegisterDrone from "./pages/register-drone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/drone/register" exact element={<RegisterDrone />} />
        <Route path="/drone/:droneId/medications" exact element={<LoadDroneDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
