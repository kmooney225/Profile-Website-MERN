import React from "react";
import GlobalStyle from "./components/GloabalStyle";
import AboutMe from './pages/AboutMe'
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
