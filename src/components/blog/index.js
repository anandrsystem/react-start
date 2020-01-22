import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import child components
import AddBlog from './AddBlog';
import ListBlog from './ListBlog';
import * as action from '../../actions/blogs';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit($event, blogText) {
    $event.preventDefault();
    this.props.addPost(blogText);
  }

  handleRemove($event, blogText) {
    $event.preventDefault();
    this.props.removePost(blogText);
  }

  render() {
    return (
      <div className="content">
        <AddBlog
          handleSubmit={this.handleSubmit}
        />
        <ListBlog
          blogs={this.props.bolgs}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogReducer.blogs };
}

function mapDespatchToProps(dispatch) {
  return bindActionCreators({ addPost: action.addBlog, removePost: action.deleteBlog }, dispatch);
}

BlogContainer = connect(mapStateToProps, mapDespatchToProps)(BlogContainer);

export default BlogContainer;
