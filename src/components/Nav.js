import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
import SideBarMenus from "./SidebarMenu";


const Nav = () => {
    const user = useSelector((state) => state.user);
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const {width} = useWindowDimensions();

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon
                onClick={onClickToggle}
                icon={faBars} 
                size="lg" 
                className="nav-mobile-menu" />
            );
        }
        return null;
    };

    const onClickToggle = (e) => {
        setShowMenu(!showMenu);
    };

    const onRequestClose = (e) => {
        setShowMenu(false);
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
            <ReactModal
            className="modal-menu"
            isOpen={showMenu}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
        >
        <SideBarMenus />
      </ReactModal>
        <nav className="navigation">
            { getMobileMenu() }
            {width >= 768 &&
                <SideBarMenus />
            }
        </nav>
        </React.Fragment>
    )
}

export default Nav;