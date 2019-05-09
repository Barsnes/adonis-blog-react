import React from 'react';

class AddBlog extends React.Component{
  constructor(){
    super()

    this.state = {
      title: '',
      body: ''
    }
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  storeBlog = () => {
    this.props.storeBlog(this.state)
  }

  render(){
    return(
      <div style={this.props.visible ? { display: 'none' } : { display: 'block' }}>
        <h1>Add a blog</h1>
        <input onChange={this.handleFieldChange} name='title'></input>
        <textarea onChange={this.handleFieldChange} name='body'></textarea>
        <button onClick={this.storeBlog}>Create Event</button>
      </div>
    )
  }
}

export default AddBlog
