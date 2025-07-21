import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribers from './components/Subscribers'; // Adjust the path as necessary
import NextPage from './components/NextPage'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Subscribers />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
