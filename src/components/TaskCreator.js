import React from 'react';
import { useState } from 'react';

export const TaskCreator = (props) => {

const [newTaskName, setNewTaskName] = useState('')//UseState save the name of the new task

const updatedNewTaskName = e => setNewTaskName(e.target.value)//Update the name of the new task

const createNewTask = () => { //Function that create the new task
    props.callback(newTaskName)
    setNewTaskName('')
}
    return (
        <div className="my-1">
            <input 
                type="text"
                className="form-control"
                value={newTaskName}//The name of the new task
                onChange={updatedNewTaskName}//Each time the value of the input change 
            />
            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                Add new task
            </button>
        </div>
    )
}
