import React from "react";
import GlobalStyle from "./components/GloabalStyle";
import AboutMe from './pages/AboutMe';
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Music from "./pages/Music";
import ProgrammingProjects from "./pages/ProgrammingProjects";
import Services from "./pages/Services";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route 
          path="/" 
          exact
          element={<AboutMe />}
        />
        <Route 
          path="/ProgrammingProjects" 
          exact
          element={<ProgrammingProjects />}
        />
        <Route 
          path="/Music" 
          exact
          element={<Music />}
        />
        <Route 
          path="/Services"
          exact
          element={<Services />}
        />
        <Route 
          path="/ContactMe"
          exact
          element={<ContactMe />}
        />
      </Routes>
    </div>
  );
}

export default App;
