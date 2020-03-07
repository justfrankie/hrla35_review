import React from 'react';
import axios from 'axios';

// const ListElement = (props) =>
//   <span>
//     <div>{props.student.name}</div>
//     <img src={props.student.imgurl}></img>
//   </span>

// export default ListElement

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      updateName = false,
      studentId: 0,
      studentName: this.props.studentName
    }
    this.updateStudent = this.updateStudent.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  updateStudent(id){
    axios.put(`/api/students/${id}`, {
      newName: this.state.studentName
    })
    .then(()=> {
      thisprops.getStudent()
    })
    .catch(err=> {
      console.log(err)
    })
  }

  clickHandler(){
    this.setState({
      updateName: true,
      studentId: id
    })
  }

  changeHandler(e){
    this.setState({
      studentName: e.target.value
    }, ()=> {
      console.log(this.state.studentName)
    })
  }

  submitHandler(e){
    e.preventDefault();
    this.setState({
      updateName: false
    }, () => {
      this.updateStudent(this.state.studentId)
    })
  }
  
  render(){
    return (
    this.state.updateName ?

    <span>
      <input onChange={this.changeHandler} value={this.state.studentName}></input>
      <button onClick={this.submitHandler}> Change Name</button>
      <img src={props.student.imgurl}></img>
  </span> : 

    <span>
      <div onClick={() => this.clickHandler(this.props.student._id)}>{this.props.student.name}</div>
     <img src={this.props.student.imgurl}></img>
    </span>
    )  
}
}