import './App.css';
import { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  const [userName, setUserName] = useState('Jason') //UseState of the tasks username 
  const [taskItems, setTaskItems] = useState([ //UseState from default tasks
    { name: 'TaskOne', done: false },
    { name: 'TaskTwo', done: false },
    { name: 'TaskThree', done: true },
    { name: 'TaskFour', done: true }
  ])

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if(data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('Blue')
      setTaskItems([
        { name: 'TaskOne Example', done: false },
        { name: 'TaskTwo Example', done: false },
        { name: 'TaskThree Example', done: true }
      ])
      setShowCompleted(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const createNewTask = taskName => {//Function create new task
    //If the name of the new task doesn't exists it is created 
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const [showCompleted, setShowCompleted] = useState(true)//UseState that its value is true

  const toggleTask = task => { //Function receive task and change task status
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))
    //setTaskItems makes map and verify if task name is equals, if it exists it changes its state
  }

  const taskTableRows = doneValue => //Function to receive true or false and return completed or unfinished tasks
    taskItems.filter(task => task.done === doneValue).map(task => ( 
    <TaskRow task={task} toggleTask={toggleTask} /> //TaskRow receive two parameters,
    //First parameter default task, second paramater change task status
  ))

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Task"
          isChecked={showCompleted}//Always true
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
