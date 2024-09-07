import React from "react";
import { allowSubmit } from "./Helpers";
import { isPasswordValid } from "../../../common/validators/PasswordValidator";

const PasswordComparison = ({ dispatch, password, passwordConfirm }) => {
  const onChangePassword = (e) => {
    dispatch({ payload: e.target.value, type: "password" });
    const passwordCheck = isPasswordValid(e.target.value);

    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true);
      return;
    }
    passwordsSame(passwordConfirm, e.target.value);
  };

  const onChangePasswordConfirm = (e) => {
    dispatch({ payload: e.target.value, type: "passwordConfirm" });
    passwordsSame(password, e.target.value);
  };

  const passwordsSame = (passwordVal, passwordConfirmVal) => {
    if (passwordVal !== passwordConfirmVal) {
      allowSubmit(dispatch, "Passwords do not match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };

  return (
    <React.Fragment>
      <div className="reg-inputs-input">
        <label>password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className="reg-inputs-input">
        <label>password confirmation</label>
        <input
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
      </div>
    </React.Fragment>
  );
};

export default PasswordComparison;