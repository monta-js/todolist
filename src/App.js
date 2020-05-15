import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [tasks,setTasks] = useState([]);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  // const handleEdit = (index, value) => {
  //   const newArr = [...tasks];
  //   newArr[index] = value;
  //   setTasks(newArr);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask =e.target.newTask.value;
    const newArr = [...tasks];
    newArr.push(newTask);
    setTasks(newArr);
  }



  const Todo = (props) => {
  
    return(
      <div>
          <li class="list-group-item d-flex justify-content-between " >
          {props.content}
          <div>
          <button ><i class="fas fa-edit"></i></button>
          <button className="delete" onClick = {() => handleDelete(props.id)} ><i class="fas fa-trash-alt"></i></button> 
          </div>
          </li>
      </div>
    );
  }

  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} />
    })
    return( 

          <ul class="list-group ">{todos}</ul>
  
    );
  }

  const SubmitForm =() => {
   
      return(

          <div >
            <form onSubmit = {handleSubmit}>
            <div class="input-group-prepend ">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-keyboard"></i></span>
                <input type="text" class="form-control" name="newTask" id="newTask" defaultValue="" placeholder="Add a new item" aria-label="Username" aria-describedby="basic-addon1"/>
            </div> 
            <button type="button" class="btn btn-primary btn-lg btn-block" >Add</button>          
            </form>
        </div>
        
      );
    
  
}
  return (
    <div class="container">
  <div class="row">
    <div class="col">
    <SubmitForm/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <TodoList tasks={tasks} />
    </div>
  </div>
</div> 
  );
}

export default App;