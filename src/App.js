import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <h1>Google Search</h1>

      {/* Home (the one with the search on)*/ }
      {/* SearchPage (the results page) */}

    <Home />
    </div>
  );
}

export default App;
