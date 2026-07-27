import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const posts = data.slice(0, 10).map(
          p => new Post(p.id, p.title, p.body)
        );

        this.setState({ posts });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>

        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;