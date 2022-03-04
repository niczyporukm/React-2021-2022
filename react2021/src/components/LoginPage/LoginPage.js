import React from 'react';
import { Link } from 'react-router-dom';
function LoginPage() {
    return (
        <div>
            <Link to="/shopping" >
                <button> Sign in</button>
            </Link>
        </div>
      );
  };

  export default LoginPage;