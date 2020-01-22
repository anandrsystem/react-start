import { ADD_BLOG, DELETE_BLOG } from '../constants/actionTypes';

export const addBlog = blogText => ({
  type: ADD_BLOG,
  blogText
});

export const deleteBlog = blogText => ({
  type: DELETE_BLOG,
  blogText
});
