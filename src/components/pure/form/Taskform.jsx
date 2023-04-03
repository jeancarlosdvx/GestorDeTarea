import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task"
import { LEVELS } from "../../../models/level.enum"
import { useRef } from "react";

const Taskform = ({ add, length}) => {

    const nameRef = useRef("")
    const descriptionRef = useRef("")
    const levelRef = useRef(LEVELS.NORMAL)
    const completed = false



    function addTaks(e) {
      e.preventDefault();
      const newTask = new Task (
        nameRef.current.value,
        descriptionRef.current.value,
        completed,
        levelRef.current.value
      )
      add(newTask)
    }

    return(

        <form onSubmit={addTaks} className="d-flex justify-content-center align-items-center mb-6">
        <div className="form-outline flex-fill">
        <input ref={nameRef} type="text" name="nombre" id="inputNombre" className="form-control form-control-lg" required autoFocus placeholder="Task name"/>
        <input ref={descriptionRef} type="text" name="nombre" id="inputDescription" className="form-control form-control-lg" required placeholder="Task descrption"/>
        <label htmlFor="selectLevel" className="sr-only">Priority</label>
        <select  ref={levelRef} name="selectPriority" id="selectLevel" defaultValue={LEVELS.NORMAL}>
            <option value={LEVELS.NORMAL}>
                Normal
            </option>
            <option value={LEVELS.URGENT}>
                Urgent
            </option>
            <option value={LEVELS.BLOKING}>
                Bloking
            </option>
        </select>
        </div>
        <button className="btn btn-success btn-lg ms-2">
            {length > 0 ? "Add" : "Create new Task"}
        </button>
        </form>
    );
    
}


export default Taskform

Taskform.prototype = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}