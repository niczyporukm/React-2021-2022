import React from 'react';
import styles from '../../common/styles/Headers.module.scss';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

function Header() {
    const currentUser = JSON.parse(window.localStorage.getItem('user'));

    return (
        <div className={styles.Wrapper}>
            <Typography sx={{ m: 2 }} variant="h5">Logged user: {`${currentUser.userfirstName} ${currentUser.userLastName}`}</Typography>
            <Link to='/'>
                <Button variant="outlined">Sign out</Button>
            </Link>
        </div>
    );
};

export default Header;