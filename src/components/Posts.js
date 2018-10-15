import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
  // there are not needed anymore since the states are now from the store.
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts, right?</h1>
        {postItems}
      </div>
    );
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items // the reason why it is state.posts is because in the root reducer, it is called posts.
})

// export default Posts;
export default connect(mapStateToProps, { fetchPosts })(Posts);

// rcc - react class based component
// rfc - react function based component.
