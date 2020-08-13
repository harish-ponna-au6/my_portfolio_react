import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { heroState } from "./states/heroState";
import { serviceState } from "./states/serviceState";
import { skillsState } from "./states/skillsState";
import { portfolioState } from "./states/portfolioState";
import { aboutMeState } from "./states/aboutMeState";
import { quoteState } from "./states/quoteState";

const initialState = {
  heroState,
  serviceState,
  skillsState,
  portfolioState,
  aboutMeState,
  quoteState
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer, composeWithDevTools());

export { store };
