import React from 'react'

const TaskListItems = ({ name, index, deleteSingleBtnHandler, taskSearchList }) => {
  const searchBar = () => {
    if (taskSearchList && !taskSearchList.length === 0) {
      console.log("return taskSearchList hona chahiye")
    } else {
      return name;
    }
  };

  return (
    <li
      className="collection-item delete-item secondary-content list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
    >
      {searchBar()}
      <a href="#" className="delete-item secondary-content text-dark">
        <i
          className="fa fa-remove"
          onClick={() => deleteSingleBtnHandler(index)}
        ></i>
      </a>
    </li>
  );
};


export default TaskListItems;