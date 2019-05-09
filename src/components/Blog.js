import React from 'react';

class Blog extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <hr />
        <h1>{this.props.blog.title}</h1>
        <p>{this.props.blog.body}</p>
        <button onClick={() => this.props.deleteBlog(this.props.blog.id)} className='danger'>Delete</button>
      </div>
    )
  }
}

export default Blog
