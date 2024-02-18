import './App.css';
import GHAlert from './components/alert/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
function App() {
  return (
    <>
      <GHAlert></GHAlert>
      <Router>
        <Routes>
          <Route path="/profile/:profileId" element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
