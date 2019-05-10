import React from 'react';

import Blog from './components/Blog'
import AddBlog from './components/AddBlog'

import ApiService from './apiService';
import { Transition } from 'react-spring/renderprops'

class App extends React.Component {
  constructor(){
    super()

    this.apiService = new ApiService();

    this.state = {
      showCreateForm: false,
      blogs: []
    }

    this.duration = 0;
  }

  componentWillMount() {
    this.duration = 0;
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
          className={this.state.showCreateForm ? 'cancel' : ''}
          >
          {this.state.showCreateForm ? 'Cancel' : 'Add new blog post'}
        </button>

        <Transition
          items={this.state.showCreateForm}
          from={{ height: 0 }}
          enter={{ height: 'auto' }}
          leave={{ height: 0 }}>
          {show => show && (props => <div style={props}><AddBlog storeBlog={this.storeBlog} visible={this.state.showCreateForm} /> </div>)}
        </Transition>

        {this.state.blogs.map((blog) =>
          <Blog delay={this.duration += 500} blog={blog} key={blog.id} deleteBlog={this.deleteBlog} />
        )}
      </div>
    );
  }
}

export default App;
