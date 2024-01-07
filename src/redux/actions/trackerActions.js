export const ADD_LEETCODE_ITEM = "ADD_LEETCODE_ITEM";
export const FETCH_LEETCODE_ITEMS = "FETCH_LEETCODE_ITEMS";
export const RESET_LEETCODE_ITEMS = "RESET_LEETCODE_ITEMS";
export const DELETE_LEETCODE_ITEM = "DELETE_LEETCODE_ITEM";

export const fetchLeetcodeItems = (items) => ({
  type: FETCH_LEETCODE_ITEMS,
  payload: items,
});

export const addLeetcodeItems = (item) => ({
  type: ADD_LEETCODE_ITEM,
  payload: item,
});
export const deleteLeetcodeItem = (item) => ({
  type: DELETE_LEETCODE_ITEM,
  payload: item,
});

export const resetLeetcodeItems = () => ({
  type: RESET_LEETCODE_ITEMS,
});
