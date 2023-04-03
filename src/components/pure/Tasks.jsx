
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from "../../models/task"
import { LEVELS } from '../../models/level.enum';
import "../../css/task.scss";

function Tasks({ tasks, complete, remove }) {

  useEffect (() => {

    console.log("Created Task");

    return() => {
      console.log("Task: "+ tasks.name  + "is going to unmount");
    }

  },[tasks])


  function taskLevelBadge(){
    switch(tasks.level){
      case(LEVELS.NORMAL):

        return(
          <h6 className="mb-0">
            <span className="badge bg-primary">
              {tasks.level}
            </span>
          </h6>
        )

        case(LEVELS.URGENT):

        return(
          <h6 className="mb-0">
            <span className="badge bg-warning">
              {tasks.level}
            </span>
          </h6>
        )

        case(LEVELS.BLOKING):

        return(
          <h6 className="mb-0">
            <span className="badge bg-danger">
              {tasks.level}
            </span>
          </h6>
        )
      default:
        break;
    }
  }




  function taskCompletedIcon (){

    if(tasks.completed){

      return (
        <i className='bi-toggle-on' onClick={() => complete(tasks)} style={ {color: "green"} }></i>
      )
    }else{
      return(
        <i className="bi-toggle-off" onClick={() => complete(tasks)} style={{color: "#c7c7c7"}}></i>
      )
    }
  }


  const taskCompleted = {
    color: "grey",
    textDecoration: "line-through"
  }

  const taskPending = {
    color: "tomato",
    fontWeight: "bold"
  }




  return (
      <tr className='fw-normal' style={tasks.completed ? taskCompleted : taskPending}>
        <th>
          <span className='ms-2 ' >{ tasks.name } </span>
        </th>

        <td className='align-middle'>
          <span >{ tasks.description } </span>
        </td>

        <td className='align-middle'>
          <span >{ taskLevelBadge() } </span>
        </td>

        <td className='align-middle'>
         {taskCompletedIcon()}
         <i className='bi-trash' onClick={() => remove(tasks)} style={{color: "tomato"}}></i>
        </td>
      </tr>
  )
}

Tasks.propTypes = {

    tasks: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  

}

export default Tasks
