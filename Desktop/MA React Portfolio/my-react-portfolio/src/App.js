import {Fragment} from 'react';
import IconsSkillsPage from './components/IconsSkillsPage';
import ProjectsComponent from './components/ProjectsComponent';
import HomeComponent from './components/HomeComponent';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomeComponent/>} />
        <Route path='projects' element={<ProjectsComponent/>} />
        <Route path='skills' element={<IconsSkillsPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
