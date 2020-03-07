import React from 'react';


export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'student': {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  componentDidMount(){
    this.getRandomStudent();
  }

  getRandomStudent(){
    let ind = Math.floor(Math.random() * this.props.student.length)
    this.setState({
      student: this.props.student[ind]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.student.imgurl}></img>
    <h1>{this.state.student.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}