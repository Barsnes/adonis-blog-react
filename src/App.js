import React from 'react';

import Blog from './components/Blog'
import AddBlog from './components/AddBlog'

import ApiService from './apiService';

class App extends React.Component {
  constructor(){
    super()

    this.apiService = new ApiService();

    this.state = {
      showCreateForm: true,
      blogs: []
    }
  }

  componentWillMount() {
    this.fetchBlogs();
  }

  fetchBlogs = () =>
    this.apiService.getBlogs().then(({ data }) => {
    this.setState({
      blogs: data.blog
    });
  });

  toggleCreateForm = (e) => {
    this.setState({
      showCreateForm: !this.state.showCreateForm
    })
  }

  storeBlog = (data) => {
  this.apiService.storeBlog(data)
    .then(() => {
      this.setState({
        showCreateForm: !this.state.showCreateForm
      })
      this.fetchBlogs()
    })
}

deleteBlog = (id) => {
  this.apiService.deleteBlog(id)
    .then(() => {
      this.fetchBlogs()
    })
}

  render() {
    return (
      <div className="App">
        <button
          onClick={this.toggleCreateForm}
          className={this.state.showCreateForm ? '' : 'cancel'}
          >
          {this.state.showCreateForm ? 'Add new blog post' : 'Cancel'}
        </button>

        <AddBlog storeBlog={this.storeBlog} visible={this.state.showCreateForm} />
        {this.state.blogs.map((blog) =>
          <Blog blog={blog} key={blog.id} deleteBlog={this.deleteBlog} />
        )}
      </div>
    );
  }
}

export default App;
