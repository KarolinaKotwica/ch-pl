import React, { useState } from "react";
import { AppState } from "../store/AppState";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import { Link } from "react-router-dom";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state) => state.user);

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <React.Fragment>
      {/* <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">
            <Link to={`/userprofile/${user?.id}`}>{user?.userName}</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickToggleRegister} className="menu-name">
            register
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">
            logout
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul> */}
        <ul className="menuList">
          <li><a href='#'>Kupno / sprzedaz</a></li>
          <li><a href='#'>Firmy</a></li>
          <li><a href='#'>Informacje</a></li>
        </ul>
        <ul className="loginMenu">
          {/* <span className='menu-name'>{user.userName}</span> */}
          <li>
            {/* <FontAwesomeIcon icon={faSignInAlt} /> */}
            <span onClick={onClickToggleLogin} className="menu-name">
              login
            </span>
            <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
          </li>
          <li>
          {/* <FontAwesomeIcon icon={faRegistered} /> */}
          <span onClick={onClickToggleRegister} className="menu-name">
            register
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;