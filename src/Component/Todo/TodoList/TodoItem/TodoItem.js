import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { item, deleteItem, handleEdit } = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between">
                <h5 className="text-capitalize">{item.item}</h5>

                <div className="todo-icon">
                    <span className="mx-2 text-info" onClick={() => handleEdit(item.id)}>
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={() => deleteItem(item.id)}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;