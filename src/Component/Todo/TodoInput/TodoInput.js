import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body">
                <h2 className="text-center mb-3 text-uppercase"> Todo List </h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white">
                                <i class="fa fa-book" aria-hidden="true"></i>
                            </span>
                        </div>

                        <input type="text"
                            className="form-control text-capitalize"
                            placeholder="add your todo"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className={
                            editItem
                                ? "btn btn-block btn-info mt-3 text-center text-uppercase py-2"
                                : "btn btn-block btn-primary mt-3 text-center text-uppercase py-2"
                        }
                    >
                        {editItem ? 'edit item' : 'add item'}
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;