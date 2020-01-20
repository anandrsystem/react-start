import { ADD_BLOG } from '../constants/actionTypes';

//define the initial state
const initialState = {
  blogs: []
}

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      const { blogs } = action.data;
      return { ...state,  blogs};
    default:
      return state;
  }
}

export default blogReducer;
