import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addBlog } from '../../actions/blogs';
import ListBlog from './ListBlog';

class AddBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogText: '',
      blogs: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let { blogs } = this.props;
    this.setState({ blogs });
  }

  handleChange($event) {
    this.setState({ blogText: $event.target.value })
  }

  handleSubmit() {
    const { blogs, blogText } = this.state;

    blogs.push(blogText);
    this.setState({ blogs })
    this.props.addBlog(blogs);
  }

  render() {
    return (
      <div className="content">
        <br></br><br></br>
        <label>Add blog:</label>
        <input type="text" onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Add</button>

        <br></br><br></br>
        <ul>
          <ListBlog
            blogs={this.state.blogs} />
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogReducer.blogs };
}

function mapDespatchToProps(dispatch) {
  return bindActionCreators({ addBlog }, dispatch);
}

AddBlog = connect(mapStateToProps, mapDespatchToProps)(AddBlog);

export default AddBlog;
