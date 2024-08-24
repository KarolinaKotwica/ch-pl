export const UserProfileSetType = "USER_PROFILE_SET";

/**
 * @typedef {Object} UserProfilePayload
 * @property {string} id
 * @property {string} userName
 */

// UserProfileAction jest obiektem akcji, który ma typ i payload
/**
 * @typedef {Object} UserProfileAction
 * @property {string} type
 * @property {UserProfilePayload|null} payload
 */

export const UserProfileReducer = (state = null, action) => {
  switch (action.type) {
    case UserProfileSetType:
      if (action.payload && typeof action.payload.id === 'string' && typeof action.payload.userName === 'string') {
        return action.payload;
      }
      console.warn("Invalid payload structure");
      return state;
    default:
      return state;
  }
};
