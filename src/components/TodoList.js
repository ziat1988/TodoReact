import React from 'react';


function TodoList() {
    return (
       <ul className="list-group my-5">

            <h3 className="text-capitalize text-center">Todo List</h3>


           <button type="button" className="btn btn-danger btn-block text-capitalize mt-5"> Clear list</button>
       </ul>
    );
}

export default TodoList;
