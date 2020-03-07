import React from 'react';
import axios from 'axios';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){
    let {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/students', {
      name: this.state.name,
      imgurl: this.state.imgurl
    })
    .then(()=> {
      window.alert('added student')
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler} />
          <button type="submit" value="Submit"onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}