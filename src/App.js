import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetList from "./petList";
import Pets from "./petsForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pets-form" element={<Pets />} />
        </Routes>
      </BrowserRouter>
      {/* <Pets /> */}
    </div>
  );
}

export default App;
