import { useEffect, useState } from 'react';
import './App.css';
import TaskLists from './component/TaskLists';
import TaskForm from './component/TaskForm';
import TaskListItems from './component/TaskListItems';

const localKey = 'tasks';
export const localStorageSave =(Array)=>{
  localStorage.setItem(localKey,JSON.stringify(Array))
}
export const getDataLocalStorage =(Array)=>{
  return JSON.parse(localStorage.getItem(localKey))  
}
function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskSearch, setTaskSearch] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteAllBtnHandler = (event)=>{
        event.preventDefault();
        if(window.confirm("Are you sure? ")){
          localStorageSave([])
          setTaskList([])

        }
  }
  const deleteSingleBtnHandler=(index)=>{
    if(window.confirm("Are you sure? ")){
      const tempTaskList = [...taskList]
      tempTaskList.splice(index,1)
      localStorageSave(tempTaskList)
      setTaskList(tempTaskList)
    }
    
  }
  useEffect(() => {
    const taskFromLocalStorage = getDataLocalStorage();
    if (taskFromLocalStorage) {
      setTaskList(taskFromLocalStorage);
    }
  }, []);
  
  // useEffect(()=>{
  //   const taskFromLocalStorage = getDataLocalStorage();
  //   setTaskList(taskFromLocalStorage)
  // },[])
  const taskSearchValueHandler = (event)=>{
    event.preventDefault();
    setTaskSearch(event.target.value); 
    // console.log("setTaskSearch yeh hai",setTaskSearch) 
  }

  const filteredTasks = taskList.filter(task => task.toLowerCase().includes(taskSearch.toLowerCase()));

  


  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }} >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">

            <div className="card" style={{ borderRadius: "15px" }} >
              <div className="card-body p-5">

                <h5 className="mb-3">Awesome Todo List</h5>
                <TaskForm 
                taskInput={taskInput}
                setTaskInput={setTaskInput}
                taskList={taskList}
                // taskSearchList={taskSearchList}
                setTaskList={setTaskList}
                />
                <form className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input type="text" 
                    id="form3" 
                    name={"task"}
                    value={taskSearch}
                    onChange={taskSearchValueHandler}
                    placeholder="Search" 
                    className="form-control form-control-lg" />
                  </div>
                </form>
                <p className="mb-3">Your Tasks:</p> <hr />

               <TaskLists 
                taskList={filteredTasks}
                deleteSingleBtnHandler={deleteSingleBtnHandler}
                 />

                 <TaskListItems />
               <button className='btn btn-dark' onClick={deleteAllBtnHandler} style={{width:"150px",height:"50px"}}>Clear All </button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
