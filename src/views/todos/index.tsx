/*
 * @Author: yuzhoufen
 * @Date: 2021-11-01 10:18:24
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-01 11:45:25
 * @Description: Do not edit
 * @FilePath: \my-app\src\views\todos\index.tsx
 */

import React, { useState } from "react";
import useArray from "../../hooks/todos.tsx";
const TodoList=()=>{
    const tasks = useArray([])
    const [newTask,setNewTask] = useState("");

    // "Add" button clicked
    const handleSubmit = e =>{
        e.preventDefault();
        tasks.push(newTask);
        setNewTask("");
    };
    const handInputChange = e =>{
        setNewTask(e.target.value);
    };
    console.log(tasks.value)
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={handInputChange} />
                <button>Add</button>
            </form>            
            {             
                tasks.isEmpty()?(<p>No tasks to display</p>):(
                    <ul>
                        {tasks.value.map((task,index)=>
                            <li key={index}>
                                <input 
                                    type="checkbox" 
                                    onClick={()=>{tasks.remove(index)}}
                                    checked={false}
                                />
                                {task}
                            </li>
                        )}
                    </ul>
                )            
            }
            
        </>
    )

}
export default TodoList;