// import * as timerActions from "../redux/timerActions";
import Type from "../redux/actionsType";
import { combineReducers } from "redux";

const valueReduser = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;
    case Type.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const stepReduser = (
  state = {
    value: 5,
    label: 5
  },
  { type, payload }
) => {
  switch (type) {
    case Type.GHANGE_STEP:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  value: valueReduser,
  step: stepReduser
});
