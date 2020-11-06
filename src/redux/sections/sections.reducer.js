import { actionTypes } from './sections.types';
import sections from './sections-data';

const INITIAL_STATE = {
  sections,
};

const sectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case false:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default sectionsReducer;
