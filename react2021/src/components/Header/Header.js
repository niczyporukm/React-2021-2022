import React from 'react';
import styles from '../../common/styles/Headers.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    const currentUser = JSON.parse(window.localStorage.getItem('user'));

    return (
        <div className={styles.Wrapper}>
            <p>Logged user: {`${currentUser.userfirstName} ${currentUser.userLastName}`}</p>
            <Link to='/'>
                <button>Sign out</button>
            </Link>
        </div>
    );
};

export default Header;