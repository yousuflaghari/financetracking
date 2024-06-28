// App component
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import MainComponent from "./pages/main";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<MainComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
