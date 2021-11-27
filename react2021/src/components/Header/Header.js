import React from 'react';
import logo from '../.././logo.svg';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.HeaderWrapper}>
                {this.props.timerValue}
            </div>
          );
    }
  }

  export default Header;