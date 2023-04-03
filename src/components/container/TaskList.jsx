import React, { useState } from "react";
import { useEffect } from "react";
import { LEVELS } from "../../models/level.enum";
import { Task } from "../../models/task";
import Tasks from "../pure/Tasks";
import Taskform from "../pure/form/Taskform";

function TaskList() {
 

  const [tasks, setTasks] = useState([]);

  
  const [loading, setLoading] = useState(true);

  function completedTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);

    setTasks(tempTasks);
  }


  function addTask(task){
    const tempTasks = [...tasks]
    tempTasks.push(task);
    setTasks(tempTasks)
  }

  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout (()=>{
      setLoading(false);
    }, 2000)

    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, []);


  const Table = () =>{

    return(
      <table className="table" >
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {tasks.map((task, index) => {
                  return (
                    <Tasks
                      key={index}
                      tasks={task}
                      complete={completedTask}
                      remove={deleteTask}
                    />
                  );
                })}
              </tbody>
            </table>
    )


  }
  let TableTask;

  if(tasks.length > 0){
    TableTask  = <Table></Table>;

  }else{
    <div>
      <h3>There are no to show</h3>
    </div>
  }

  const loadingStyle = {
    color: "grey",
    fontSize:"30px",
    fontWeigth: "bold"
  }

  

  return (
    <div>
      <div className="col-12">
        <div className="card ">
          <div className="card-header p-3">Your Tasks:</div>

          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "300px" }}
          >
            {loading ? <p style={loadingStyle}>Loading task...</p>: TableTask}
          </div>
        </div>
       
      </div>
      <div className="container_form">
      <Taskform add={addTask} length={tasks.length}/>
      </div>
    </div>
  );
}

export default TaskList;
