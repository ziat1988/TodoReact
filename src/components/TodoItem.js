import React, {useState, Fragment} from 'react';


function TodoItem({item,deleteTodo,editTodo}) {

    const [isEdit,setIsEdit] = useState(false);

    let textInput = React.createRef();



    const cancelEdit = () =>{
        setIsEdit(false);
    };

    const editSubmit = ()=>{
        // object modifié

        item.value = textInput.current.value;
        item.createdAt = new Date();

        editTodo(item.id, item);  // call function to update
        setIsEdit(false);

    };

    const modifyItem = ()=>{
        setIsEdit(true);
    };

    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

            {isEdit ?

                <Fragment>

                    <div className = "edit-row row">
                        <div className= "col-md-7">
                            <input ref={textInput} autoFocus type="text" className="form-control text-capitalize" defaultValue={item.value}/>
                        </div>

                        <div  className="todo-icon col-md-5">
                            <button onClick={editSubmit} type="submit" className="btn btn-success">Modifier</button>
                            <button  onClick={cancelEdit} className="btn btn-secondary">Cancel</button>
                        </div>

                    </div>


                </Fragment>

                :
                <Fragment>

                    <h6>{item.value} </h6>
                    <div  className="todo-icon">
                <span onClick={modifyItem} className="mx-2 text-success"><i className="fas fa-pen"/></span>
                        <span  onClick={()=> deleteTodo(item.id)} className="mx-2 text-danger">
                <i className="fas fa-trash"/>
                </span>
                    </div>
                </Fragment>


            }


        </li>
    );
}

export default TodoItem;
