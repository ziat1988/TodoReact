import React, {useState} from 'react';
import './App.css';
import './components/TodoList'
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


// H hay co gang giai thich ly do tai sao
function App() {


    const [items, setItems] = useState([]); // gia tri ban dau la 1 array rong cua cac items

    const initialItem = {
        id: null,
        value: '' ,
        createdAt:null,
        updatedAt : null

    };

   // const [itemCurrent, setItemCurrent] = useState(initialItem); // tai sao khi truyen itemCurrent thi lai bi trung id ??? Vi no la 1

    const submitTodo = (newItem)=>{
        // tai sao lai phai set o vi tri nay? Vi de re render lai khi co thay doi trong state
        setItems([...items,newItem]);


    };



    const editTodo = (idTodo, updatedItem)=>{

        setItems(items.map((item) => (item.id=== idTodo ? updatedItem : item)));

    };


    const clearList = () => {
        setItems([]);
    }

    const deleteTodo = (idTodo)=>{

        const newTodos = items.filter(item => item.id !== idTodo);

        setItems(newTodos);
    };



    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text-center">Todo input</h3>

                </div>
            </div>

            <TodoInput
                initialItem = {initialItem}
                submitTodo = {submitTodo}

            />
            <TodoList
                items = {items}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}
                clearList = {clearList}

            />


        </div>

    );
}

export default App;
