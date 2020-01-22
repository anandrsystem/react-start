import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as blogsActionCreators from '../../actions/blogs';
import ListBlog from './ListBlog';

class AddBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.inputRef = React.createRef();
  }

  handleChange($event) {
    this.setState({ blogText: $event.target.value })
  }

  handleSubmit($event) {
    $event.preventDefault();
    const { blogText } = this.state;

    this.inputRef.current.focus();
    this.setState({ blogText: '' })
    this.props.addBlog(blogText);
  }

  handleRemove(blogText) {
    this.props.deleteBlog(blogText);
  }

  render() {
    return (
      <div className="content">
        <br></br><br></br>
        <label>Add blog:</label>
        <input type="text" ref={this.inputRef} value={this.state.blogText} onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Add</button>

        <br></br><br></br>
        <ul>
          <ListBlog
            blogs={this.props.blogs}
            handleRemove={this.handleRemove}
          >//what is placed here is passed as props.children</ListBlog>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogReducer.blogs };
}

function mapDespatchToProps(dispatch) {
  return bindActionCreators(blogsActionCreators, dispatch);
}

AddBlog = connect(mapStateToProps, mapDespatchToProps)(AddBlog);

export default AddBlog;
