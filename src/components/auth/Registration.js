import React, { useReducer } from "react";
import ReactModal from "react-modal";
import userReducer from "./common/UseReducer";
import { allowSubmit } from "./common/Helpers";
import PasswordComparison from "./common/PasswordComparison";

const Registration = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducer, {
    userName: "davec",
    password: "",
    email: "admin@dzhaven.com",
    passwordConfirm: "",
    resultMsg: "",
    isSubmitDisabled: true,
  });

  const onChangeUserName = (e) => {
    dispatch({ payload: e.target.value, type: "userName" });
    if (!e.target.value) {
      allowSubmit(dispatch, "Username cannot be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onChangeEmail = (e) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) {
      allowSubmit(dispatch, "Email cannot be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onClickRegister = (e) => {
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
            <label>Email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <PasswordComparison
              dispatch={dispatch}
              password={password}
              passwordConfirm={passwordConfirm}
            />
          </div>
        </div>
        <div className="form-buttons">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={isSubmitDisabled}
              onClick={onClickRegister}
            >
              Register
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>
          <span className="form-btn-right">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;