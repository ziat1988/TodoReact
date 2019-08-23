import React from 'react';


function TodoInput() {
    return (
        <div className="card card-body my-3">
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>


                    </div>



                    <input type="text" className="form-control text-capitalize" placeholder="add a todo item"/>
                </div>


                <button type="submit" className="btn btn-block btn-primary mt-3">Add item</button>

            </form>

        </div>
    );
}

export default TodoInput;


