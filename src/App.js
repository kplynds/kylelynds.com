import "./App.css";
import TopSection from "./sections/TopSection";
import DesktopNav from "./nav/DesktopNav";
import Hidden from "@mui/material/Hidden";
import MobileNav from "./nav/MobileNav";
import Projects from "./sections/Projects";
import MoreAbout from "./sections/MoreAbout";

function App() {
  return (
    <div className="root">
      <Hidden mdDown>
        <DesktopNav />
      </Hidden>
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
      <TopSection />
      <Projects />
      <MoreAbout />
    </div>
  );
}

export default App;
