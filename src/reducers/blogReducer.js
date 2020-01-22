import { ADD_BLOG, DELETE_BLOG } from '../constants/actionTypes';

//define the initial state
const initialState = {
  blogs: []
}

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      const afterAdd = [...state.blogs, action.blogText];
      return { ...state, blogs: afterAdd };
    case DELETE_BLOG:
      const index = state.blogs.indexOf(action.blogText);
      const afterRemove = [...state.blogs.slice(0, index), ...state.blogs.slice(index + 1)];
      return { ...state, blogs: afterRemove };
    default:
      return state;
  }
}

export default blogReducer;
