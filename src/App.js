import React from "react";
import GlobalStyle from "./components/GloabalStyle";
import AboutMe from './pages/AboutMe';
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Music from "./pages/Music";
import ProgrammingProjects from "./pages/ProgrammingProjects";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
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
          path="/ContactMe"
          exact
          element={<ContactMe />}
        />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
