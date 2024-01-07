import {
  FETCH_LEETCODE_ITEMS,
  ADD_LEETCODE_ITEM,
} from "../actions/trackerActions";

const savedState = localStorage.getItem("trackerState");
const initialState = savedState
  ? JSON.parse(savedState)
  : {
      items: [],
    };
export const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEETCODE_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_LEETCODE_ITEM:
      const newState = {
        ...state,
        items: [...state.items, action.payload],
      };
      // Save updated state to local storage
      localStorage.setItem("trackerState", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
