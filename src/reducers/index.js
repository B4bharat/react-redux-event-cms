import { combineReducers } from "redux";

export const eventsReducer = (events = [], action) => {
  if (action.type === "ADD_EVENT") {
    return [...events, action.payload];
  }

  return events;
};

export default combineReducers({
  events: eventsReducer
});
