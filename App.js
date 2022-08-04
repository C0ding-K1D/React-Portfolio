import { Fragment } from "react";
import IconsSkillsPage from "./components/IconsSkillsPage";
import ProjectsComponent from "./components/ProjectsComponent";
import HomeComponent from "./components/HomeComponent";
import { Route, Routes } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="skills" element={<IconsSkillsPage />} />
        <Route path="projects" element={<ProjectsComponent />} />
      </Routes>
    </Fragment>
  );
}

export default App;
