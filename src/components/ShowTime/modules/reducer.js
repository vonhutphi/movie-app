import * as ActionType from "./constant";

let initialState = {
  theaterSystemArray: [],
};

const TheaterSystemManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_THEATER_SYSTEM_LIST:
      state.theaterSystemArray = action.theaterSystemArray;
      return { ...state };
    default:
      return { ...state };
  }
};
export default TheaterSystemManagementReducer;
