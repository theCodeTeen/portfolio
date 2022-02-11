import {Routes,Route,useNavigate} from 'react-router-dom';
import './App.css';
import React from 'react';
import InitLoading from './components/layouts/InitLoading/InitLoading';
import Intro from './components/layouts/Intro/Intro';
import Skillset from './components/layouts/Skillset/Skillset';
import Projects from './components/layouts/Projects/Projects';
import Achivements from './components/layouts/Achivements/Achivements';
import Navigation from './components/layouts/Navigation/Navigation';

function App() {
  const navigate = useNavigate();
  function loadIntro(){
    navigate('/home',{replace:false});
  }
  function loadSkillset(){
    navigate('/skillset',{replace:false});
  }
  function loadProjects(){
    navigate('/projects',{replace:false});
  }
  function loadAchivements(){
    navigate('/achivements',{replace:false});
  }
 
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<InitLoading loadIntro={loadIntro}/>}/>
        <Route path="/home" element={<Intro loadSkillset={loadSkillset}/>}/>
        <Route path="/skillset" element={<Skillset loadProjects={loadProjects}/>} />
        <Route path="/projects" element={<Projects loadAchivements={loadAchivements}/>}/>
        <Route path="/achivements" element={<Achivements/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
