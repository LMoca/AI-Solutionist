import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataDeletionRequest from './pages/DataDeletionRequest';
import SMSConsent from './pages/SMSConsent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datadeletionrequest" element={<DataDeletionRequest />} />
        <Route path="/sms-consent" element={<SMSConsent />} />
      </Routes>
    </Router>
  );
}

export default App