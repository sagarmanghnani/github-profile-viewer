import { useState } from 'react';
import './home.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [ghProfileName, setGHProfileName] = useState('');
  const navigate = useNavigate();

  const navigateToProfilePage = () => {
    navigate(`/profile/${ghProfileName}`);
  };
  return (
    <>
      <div className="homepage">
        <div className="intro-card">
          <h3 className="gh-heading">
            A simpler way to show <br></br> your Github profile and <br></br> repositories.{' '}
          </h3>
          <div className="input-container">
            <TextField
              id="outlined-basic"
              label="Enter Profile"
              variant="outlined"
              placeholder="Enter github profile"
              value={ghProfileName || null}
              onChange={(ev) => {
                setGHProfileName(() => {
                  return ev.target.value;
                });
              }}
            />

            <Button variant="contained" onClick={navigateToProfilePage} className="home-view-btn">
              View
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
