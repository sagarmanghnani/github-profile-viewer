import { title } from 'process';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserSearchList from './components/user-search-list/UserSearchList';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <UserSearchList
        userList={[
          {
            login: 'hello',
            id: 'hello',
            avatar_url: '',
            url: ''
          }
        ]}></UserSearchList>
    </>
  );
}

export default App;
