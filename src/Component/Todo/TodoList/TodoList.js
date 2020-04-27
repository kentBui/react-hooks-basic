import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        const { items, clearList, deleteItem, handleEdit } = this.props;
        return (
            <div className="card card-body mt-3">
                <h2 className="text-center text-capitalize">List of your todo</h2>
                <ul className="list-group">
                    {items.map(item => <TodoItem key={item.id} item={item} deleteItem={deleteItem} handleEdit={handleEdit} />)}
                </ul>
                <button
                    className="btn btn-danger btn-block text-capotalize text-uppercase mt-3 py-2"
                    onClick={clearList}
                >
                    Clear list
                </button>
            </div>
        );
    }
}

export default TodoList;