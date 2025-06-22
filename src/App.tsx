import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataDeletionRequest from './pages/DataDeletionRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datadeletionrequest" element={<DataDeletionRequest />} />
      </Routes>
    </Router>
  );
}

export default App