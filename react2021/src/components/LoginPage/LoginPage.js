import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function LoginPage() {
    let navigate = useNavigate();

    const [userfirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');

    const signInUser = (e) => {
        e.preventDefault();
        window.localStorage.setItem('user', JSON.stringify({userfirstName, userLastName}))
        navigate('/airports/list')
    }
    return (
        <div>
            <form onSubmit={signInUser}>
                <Box sx={{ m: 2 }}>
                    <TextField margin="dense" id="outlined-basic" label="First name" variant="outlined" value={userfirstName} onChange={(event) => setUserFirstName(event.target.value)} />
                </Box>
                    <Box sx={{ m: 2 }}>
                        <TextField margin="dense" id="outlined-basic" label="Last name" variant="outlined" value={userLastName} onChange={(event) => setUserLastName(event.target.value)} />
                    </Box>
                    <Box sx={{ m: 2 }}>
                        <Button disabled={!userfirstName || !userLastName} variant="contained" type="submit">Sign in</Button>
                    </Box>
            </form>
        </div>
      );
  };

  export default LoginPage;