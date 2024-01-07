export const ADD_LEETCODE_ITEM = "ADD_LEETCODE_ITEM";
export const FETCH_LEETCODE_ITEMS = "FETCH_LEETCODE_ITEMS";

export const fetchLeetcodeItems = (items) => ({
  type: FETCH_LEETCODE_ITEMS,
  payload: items,
});

export const addLeetcodeItems = (item) => ({
  type: ADD_LEETCODE_ITEM,
  payload: item,
});
