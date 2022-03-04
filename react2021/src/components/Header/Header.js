import React from 'react';
import styles from '../../common/styles/Headers.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.Wrapper}>
            <Link to='/'>
                <button>Sign out</button>
            </Link>
        </div>
      );
  };

  export default Header;