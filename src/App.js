import "./App.css";
import Home from "./Home";
import DesktopNav from "./nav/DesktopNav";
import Hidden from "@mui/material/Hidden";
import MobileNav from "./nav/MobileNav";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MoreAbout from "./sections/MoreAbout";

function App() {
  return (
    <Router>
      <div className="root">
        <Hidden mdDown>
          <DesktopNav />
        </Hidden>
        <Hidden mdUp>
          <MobileNav />
        </Hidden>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/library" element={<MoreAbout />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
