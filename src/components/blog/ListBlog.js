import React from 'react';

const ListBlog = (props) => {
  const { blogs } = props
  const listHTML = blogs && blogs.length > 0 ? blogs.map((item, index) => <li key={index}>{item}</li>) : null;

  return listHTML;
}

export default ListBlog;