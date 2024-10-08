import React, { useReducer, useEffect } from "react";
import ReactModal from "react-modal";
import userReducer from "./common/UseReducer";
import { allowSubmit } from "./common/Helpers";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/Reducer";

const Login = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducer, {
    userName: "",
    password: "",
    resultMsg: "",
    isSubmitDisabled: true,
  });
  
  const reduxDispatch = useDispatch();

  useEffect(() => {
    // todo: replace with GraphQL call
    reduxDispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [reduxDispatch]);

  const onChangeUserName = (e) => {
    dispatch({ type: "userName", payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, "Username cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onChangePassword = (e) => {
    dispatch({ type: "password", payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, "Password cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (e) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>Username</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={isSubmitDisabled}
              onClick={onClickLogin}
            >
              Login
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>

          <span className="form-btn-left">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Login;
