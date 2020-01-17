import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPost } from '../actions/posts';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const { posts } = this.props;
    posts.push('Anand');
    this.props.addPost(posts);
    this.setState({ posts })
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="content">
        Hello world !!
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.postReducer.posts };
}

function mapDespatchToProps(dispatch) {
  return bindActionCreators({ addPost }, dispatch);
}

Home = connect(mapStateToProps, mapDespatchToProps)(Home);

export default Home;
