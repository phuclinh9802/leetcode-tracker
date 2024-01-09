import {
  FETCH_LEETCODE_ITEMS,
  ADD_LEETCODE_ITEM,
  DELETE_LEETCODE_ITEM,
  RESET_LEETCODE_ITEMS,
  SET_HEAT_MAP,
} from "../actions/trackerActions";

const heatMapState = localStorage.getItem("heatMapState");
const initialState = {
  items: [],
  heatMap: [],
  count: 1,
};
export const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEETCODE_ITEMS:
      return {
        ...state,
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
      localStorage.removeItem("heatMap");
      return {
        ...state,
        items: [],
        heatMap: [],
      };

    case SET_HEAT_MAP:
      const { date } = action.payload;
      console.log(action.payload);
      const existingDateIndex = state.heatMap.findIndex((item) => {
        item.count += 1;
        return item.date === date;
      });

      console.log("-----");
      console.log(state.heatMap);

      let newHeatMapState = {};

      console.log(existingDateIndex);

      if (existingDateIndex !== -1) {
        // If the date already exists, update the count by 1
        newHeatMapState = {
          ...state,
          //   count: state.count + 1,
          //   heatMap: state.heatMap.map((item, index) =>
          //     index === existingDateIndex ? { ...item, count: state.count } : item
          //   ),
        };
        console.log(state.heatMap);
      } else {
        // If the date doesn't exist, add a new entry with count initialized to 1
        newHeatMapState = {
          ...state,
          count: 1,
          heatMap: [
            ...state.heatMap,
            {
              date,
              count: state.count,
            },
          ],
        };
      }

      localStorage.setItem("heatMapState", JSON.stringify(newHeatMapState));
      return newHeatMapState;

    default:
      return state;
  }
};
