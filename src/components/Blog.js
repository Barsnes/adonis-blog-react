import React from 'react';
import {Spring} from 'react-spring/renderprops'

class Blog extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: this.props.delay}}
        >
        {props =>
        <div className='blog' style={props}>
          <hr />
          <h1>{this.props.blog.title}</h1>
          <p>{this.props.blog.body}</p>
          <button style={props} onClick={() => this.props.deleteBlog(this.props.blog.id)} className='danger'>Delete</button>
        </div>}
      </Spring>
    )
  }
}

export default Blog
