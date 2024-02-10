import React, { Component } from 'react'
import { localStorageSave } from '../App';

const TaskForm = (props) => {
    const { taskInput, setTaskInput, taskList, setTaskList } = props;
    // console.log(props)
    const taskInputHandler = (event) => {
        event.preventDefault();
        setTaskInput(event.target.value);
        // console.log("aasdfafhh",setTaskInput)
    }
    const taskSubmitHandler = (event) => {
        event.preventDefault();
        if (!taskInput) {
            alert("please fill the task input field!");
            return;
        }
        const taskListTemp = [...taskList]
        taskListTemp.push(taskInput);
        localStorageSave(taskListTemp)
        setTaskList(taskListTemp)

        console.log("You added", taskListTemp)

        setTaskInput("")
    }

    return (
        <div>
            <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={taskSubmitHandler}>
                <div className="form-outline flex-fill">
                    <input type="text" name='task' id="form3" value={taskInput} onChange={taskInputHandler} className="form-control mt-2 mr-3 form-control-lg" />
                    <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                </div>
                <input type="submit" value="Add Task" className="btn btn-dark btn-lg mb-4" />
            </form>

        </div>
    );
};
export default TaskForm;
