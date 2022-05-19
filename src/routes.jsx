import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

const RouteHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/repository-listing" element={<Home />} />
        <Route
          path="/repository-listing/repositories"
          element={<Repositories />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteHandler;
