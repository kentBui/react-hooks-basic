import React, { Component } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
class Todo extends Component {
    state = {
        items: [],
        id: uuidv4(),
        item: '',
        editItem: false,
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            item: this.state.item,
            id: this.state.id,
        }

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            id: uuidv4(),
            item: '',
            editItem: false,
        })
    }

    deleteItem = (id) => {
        const filterItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filterItems,
        })
        console.log(filterItems);
    }

    handleEdit = (id) => {
        const filterItems = this.state.items.filter(item => item.id !== id);
        const editedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: filterItems,
            item: editedItem.item,
            editItem: true,
            id: id,
        })
    }

    clearList = () => {
        this.setState({
            items: [],
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6">
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />

                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            deleteItem={this.deleteItem}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;