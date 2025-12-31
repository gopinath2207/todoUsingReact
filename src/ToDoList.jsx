import React, { useState } from "react"

function ToDoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewtask] = useState();

    const handleNewTask = (event) => {
        setNewtask(event.target.value);
        
    }

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTask([...tasks, newTask]);
        }
        setNewtask("");

    }

    const handleDeleteTask = (index) => {
        setTask(tasks.filter((_, i) => i != index));
    }

    const handleMoveUp = (index) => {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTask(newTasks);
        }
    };

    const handleMoveDown = (index) => {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTask(newTasks);
        }
    };




    return (

        <>
            <div className="listContainer">
                <h1>✨ To-Do Lists</h1>

                <div className="input-section">
                    <input
                        type="text"
                        value={newTask}
                        id="inp"
                        placeholder="Enter Your Task...."
                        onChange={handleNewTask}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                    />

                    <button className="add-btn" onClick={handleAddTask}>Add</button>
                </div>

                <div className="tasks">
                    {tasks.length === 0 ? (
                        <div className="empty-state">No tasks yet. Add one to get started! 🚀</div>
                    ) : (
                        <ol>
                            {tasks.map((ele, index) => (
                                <li key={index}>
                                    <span>{ele}</span>
                                    <div>
                                        <button
                                            className="task-btn delete-btn"
                                            onClick={() => handleDeleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="task-btn move-btn"
                                            onClick={() => handleMoveUp(index)}
                                            disabled={index === 0}
                                        >
                                            👆
                                        </button>
                                        <button
                                            className="task-btn move-btn"
                                            onClick={() => handleMoveDown(index)}
                                            disabled={index === tasks.length - 1}
                                        >
                                            👇
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>

        </>

    )
}
export default ToDoList