import {
  FETCH_LEETCODE_ITEMS,
  ADD_LEETCODE_ITEM,
  DELETE_LEETCODE_ITEM,
  RESET_LEETCODE_ITEMS,
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

    case DELETE_LEETCODE_ITEM:
      console.log("action.payload", action.payload);
      const newItems = state.items.filter(
        (item) => item.question !== action.payload
      );
      const deletedState = {
        ...state,
        items: newItems,
      };
      localStorage.setItem("trackerState", JSON.stringify(deletedState));
      return deletedState;

    case RESET_LEETCODE_ITEMS:
      localStorage.removeItem("trackerState");
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
