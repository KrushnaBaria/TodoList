import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos, setTodos] = useState([{task : "Sample Task", id : uuidv4(), isDone : false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((preTodos)=>{
            return[...preTodos, {task : newTodo, id : uuidv4(), isDone : false}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value)
    }

    let DeleteTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
    };

    let UpperAll = ()=>{
        setTodos((todos) => todos.map((todo) => {
            return{...todo, task : todo.task.toUpperCase()};
        }));
    };

    let UpperOne = (id)=>{
        setTodos((todos) => todos.map((todo) => {
            if(todo.id == id){
                return{...todo, task : todo.task.toUpperCase()};
            }else{
                return todo;
            }
        }));
    };

    let MarkAsDone = (id) =>{
        setTodos((todos) => todos.map((todo) => {
            if(todo.id == id){
            return{...todo, isDone : true};

            }else{
                return todo;
            }
        }));
    }

    return(
        <div>
            <input type="text" placeholder="Add Task" value={newTodo}  onChange={updateTodoValue}/> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {color: "green"} : {}}>{todo.task}</span> &nbsp; &nbsp;
                        <button onClick={() => DeleteTodo(todo.id)}>Delete</button>  &nbsp; &nbsp;
                        {/* <button onClick={() => UpperOne(todo.id)}>UpperCase</button> */}
                        <button onClick={() => MarkAsDone(todo.id)}>Mask As Done</button>
                    </li>
                ))}
            </ul>
            <button onClick={UpperAll}>UpperCaseAll</button>    
        </div>
    )

}