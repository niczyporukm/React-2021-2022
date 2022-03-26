import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();

    const [userfirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');

    const signInUser = (e) => {
        e.preventDefault();
        window.localStorage.setItem('user', JSON.stringify({userfirstName, userLastName}))
        navigate('/shopping')
    }
    return (
        <div>
            <form onSubmit={signInUser}>
                <label>First name</label>
                <input onChange={(event) => setUserFirstName(event.target.value)}></input>
                <label>Lirst name</label>
                <input onChange={(event) => setUserLastName(event.target.value)}></input>
                <button type='submit'> Sign in</button>
            </form>
        </div>
      );
  };

  export default LoginPage;