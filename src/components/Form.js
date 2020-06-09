import React, {Component} from 'react'

class Form extends Component {
  state ={
    content:''
  }
  
  handleChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault() // Prevent the default behaviour of form
    this.props.addTodo(this.state)

    //Resets the input field 
    this.setState(
      {
        content:''
      }
    )
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo: </label>
          <input 
            type="text" 
            onChange={this.handleChange}  
            value={this.state.content}/>
        </form>
      </div>
    )
  }

}

export default Form
