export const allowSubmit = (dispatch, msg, setDisabled) => {
    dispatch({ type: "isSubmitDisabled", payload: setDisabled });
    dispatch({ payload: msg, type: "resultMsg" });
};
  