import './App.css';
import GHAlert from './components/alert/Alert';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
function App() {
  return (
    <>
      <GHAlert></GHAlert>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile/:profileId" element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
