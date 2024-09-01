import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UserProfileSetType } from '../store/user/Reducer';
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import ReactModal from "react-modal";


const Nav = () => {
    const user = useSelector((state) => state.user);
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const {width} = useWindowDimensions();

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon icon={faBars} size="lg" className="nav-mobile-menu" />
            );
        }
        return null;
    };

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
            { getMobileMenu() }
            {width >= 768 &&
                <ul>
                    <FontAwesomeIcon icon={faUser} />
                    <span className='menu-name'>{user.userName}</span>
                    <li><a href='#'>Zaloguj</a></li>
                    <li><a href='#'>Kupno / sprzedaz</a></li>
                    <li><a href='#'>Firmy</a></li>
                    <li><a href='#'>Informacje</a></li>
                </ul>
            }
        </nav>
        </React.Fragment>
    )
}

export default Nav;