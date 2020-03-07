import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => {
  return(
  <div>
    {props.students.map((student, index) => 
      <ListElement student={student} key={index} getStudent={props.getStudent}/>
    )}
  </div>
  )
}

export default List