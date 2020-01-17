//define the initial state
const initialState = {
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const posts = action.data;
      return { ...state,  posts};
    default:
      return state;
  }
}

export default postReducer;
