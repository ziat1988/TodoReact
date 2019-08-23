import React,{useState, useEffect} from 'react';

import uuid from 'uuid';
/*
* Xu ly voi input co the co nhieu cach:
* 1. onChange va state doi voi Input  => ko thich lam. State duoc xu ly o trung tam App.js
* 2. ref ? trong cach xua cu
* */

// tiep theo la cap nhat vao view

function TodoInput({submitTodo, initialItem}) {

    // lam sao de xu ly voi object


   // const [title,setTitle] = useState('');

    const [formItem, setFormItem] = useState(initialItem);


    console.log(formItem);

    function handleSubmit(event){
      //  console.log('o trong function thi title la:',title);

        /*
        const trimmedText = title.trim();
        if(trimmedText.length >0)     {

            initialItem.value = title;
            initialItem.id = uuid();
            initialItem.createdAt = new Date();
            initialItem.updatedAt = new Date();

            submitTodo(initialItem);
        }

          setTitle('');
*/
        formItem.id = uuid();
        formItem.createdAt = new Date();
        formItem.updatedAt = new Date();

        // set title can not change the user

        submitTodo(formItem);

        event.preventDefault(); // bo action binh thuong
    }


    function handleChange(event){
        setFormItem({...formItem, value: event.target.value }); //stocker object form


       // setTitle(event.target.value);

    }

    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input value={formItem.value} type="text" className="form-control text-capitalize" placeholder="add a todo item" onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-block btn-primary mt-3">Add item</button>

            </form>

        </div>
    );
}

export default TodoInput;


