import { actionTypes } from './sections.types';
import sections from './sections-data';

const INITIAL_STATE = {
  sections,
};

const sectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionsReducer;
