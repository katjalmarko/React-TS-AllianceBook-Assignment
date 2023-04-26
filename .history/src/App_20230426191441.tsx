import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from './types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CardDetails } from './pages/CardDetail';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/character/:id" element={<CardDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
