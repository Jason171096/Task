import React from "react"

export const TaskRow = (props) => {
  return (
    <tr key={props.task.name}>{/* key is equal */}
      <td>
        {props.task.name}{/* Name of the task */}
      </td>
      <td>
        <input
          type="checkbox"
          checked={props.task.done} //Receive true or false
          onChange={() => props.toggleTask(props.task)} />{/* Can be changed by means of the toggleTask function  */} 
      </td>
    </tr>
  )
}

