import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardDetails } from './pages/CardDetail';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Header />
        <Route path="/character/:id" element={<CardDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
