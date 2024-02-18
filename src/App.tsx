import { title } from 'process';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserSearchList from './components/user-search-list/UserSearchList';
import GHAlert from './components/alert/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
function App() {
  return (
    <>
      <GHAlert></GHAlert>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/profile/:profileId" element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
