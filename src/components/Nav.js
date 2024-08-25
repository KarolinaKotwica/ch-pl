import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Nav.css'
import { useEffect } from 'react';
import { UserProfileSetType } from '../store/user/Reducer';
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
  } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "Test user"
            },
        });
    }, [dispatch]);

    return (
        <React.Fragment>
        <nav className="navigation">
            <ul>
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <span className='menu-name'>{user.userName}</span>
                <li><a href='#'>Zaloguj</a></li>
                <li><a href='#'>Kupno / sprzedaz</a></li>
                <li><a href='#'>Firmy</a></li>
                <li><a href='#'>Informacje</a></li>
            </ul>
        </nav>
        </React.Fragment>
    )
}

export default Nav;