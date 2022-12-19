import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { TermsAndConditions } from './pages/terms_and_conditions/TermsAndConditions';
import { FirstUse } from './pages/firstUse/FirstUse';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstUse" element={<FirstUse />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;