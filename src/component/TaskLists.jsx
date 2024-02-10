import React from 'react'
import TaskListItems from './TaskListItems'

// const TaskLists = (props) => {
//   const {taskList} = props;

//     return (
//         <ul className="list-group mb-0">
//           {taskList.map((singleTaskData, index)=>{
//             return(
//               < TaskListItems 
//               name={singleTaskData}
//               key={index}
//               index={index}
//               />
//             )
//           })}
//       </ul>
//     )
//   }
const TaskLists = (props) => {
  const { taskList, deleteSingleBtnHandler,taskSearchList } = props;
  
  return (
    <ul className="list-group mb-0">
      

      {taskList.map((singleTaskData, index) => {
        return (
          <TaskListItems
            name={singleTaskData}  // Pass singleTaskData directly
            key={index}
            taskSearchList={taskSearchList}
            index={index}
            deleteSingleBtnHandler={deleteSingleBtnHandler}
          />
        );
      })}
    </ul>
  );
};


export default TaskLists


