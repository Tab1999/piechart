import React, { useState } from 'react';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

 

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <Link to='/'><h1>PieChart-Info</h1></Link>
      {isAuth && (
        <nav>
          <ul >
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
           
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      
    </header>
  );
};

export default Header;
