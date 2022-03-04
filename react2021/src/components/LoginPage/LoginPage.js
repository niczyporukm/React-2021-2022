import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();

    const [userName, setUserName] = useState('');

    const signInUser = (e) => {
        e.preventDefault();
        window.localStorage.setItem('user', JSON.stringify(userName))
        navigate('/shopping')
    }
    return (
        <div>
            <form onSubmit={signInUser}>
                <label>User name</label>
                <input onChange={(event) => setUserName(event.target.value)}></input>
                <button type='submit'> Sign in</button>
            </form>
        </div>
      );
  };

  export default LoginPage;