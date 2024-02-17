import { title } from 'process';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserSearchList from './components/user-search-list/UserSearchList';
import GHAlert from './components/alert/Alert';

function App() {
  return (
    <>
      <GHAlert></GHAlert>
      <Navbar></Navbar>
    </>
  );
}

export default App;
