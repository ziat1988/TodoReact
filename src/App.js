import React from 'react';
import './App.css';
import './components/TodoList'
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text-center">Todo input</h3>

                </div>
            </div>

            <TodoInput/>

            <TodoList/>
        </div>
    );
}

export default App;
