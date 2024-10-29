
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  </Router>
);
}

export default App
