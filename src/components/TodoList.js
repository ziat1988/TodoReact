import React from 'react';

import './TodoItem';
import TodoItem from "./TodoItem";

function TodoList({items,deleteTodo,editTodo,clearList}) {



    return (
        <ul className="list-group my-5">

            <h3 className="text-capitalize text-center">Todo List</h3>

            {items.map((item) => // o day ta ko dung ngoac kep vi ly do ham return truc tiep TodoItem

                <TodoItem
                    key={item.id}
                    item = {item}
                    deleteTodo = {deleteTodo}
                    editTodo={editTodo}
                />

            )}



            <button onClick={()=> clearList()} type="button" className="btn btn-danger btn-block text-capitalize mt-5"> Clear list</button>
        </ul>
    );
}

export default TodoList;
