import React from 'react';

const ListBlog = (props) => {
  const { blogs, handleRemove } = props
  const listHTML = blogs && blogs.length > 0 ?
    blogs.map((item, index) => <li key={index}>{item} <button onClick={() => handleRemove(item)}>Remove</button></li>) : null;

  return (
    <ul>
      {listHTML}
      {props.children}
    </ul>
  );
}

export default ListBlog;