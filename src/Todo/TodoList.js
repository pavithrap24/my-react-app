import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 0,
                    text: "",
                    isChecked: false
                }
            ]
        }
        this.checkboxChange = this.checkboxChange.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.addNewItemButtonCLick = this.addNewItemButtonCLick.bind(this)
    }

    checkboxChange(id){
        console.log('id ',id)
        const list = this.state.list;
        list[id]['isChecked'] = !list[id]['isChecked'];
        this.setState({
            list: list
        })
    }

    inputChange(event, id){
        console.log('id ',id)
        const list = this.state.list;
        list[id]['text'] = event.target.value;
        this.setState({
            list: list
        })
    }

    addNewItemButtonCLick() {
        console.log("length ", this.state.list.length)
        const length = this.state.list.length;
        const item = {
            id:  length,
            text: '',
            isChecked: false
        }
        const list = this.state.list;
        list.push(item);
        this.setState({
            list: list
        })
        console.log("new list ", list)
    }

    render() {
        const todoList = this.state.list.map(item => 
            <Todo 
                key = {item.id}
                keyValue = {item.id}
                checkboxChange={this.checkboxChange}
                checked = {item.isChecked}
                text = {item.text}
                inputChange={this.inputChange}
                addNewItemButtonCLick={this.addNewItemButtonCLick}
            />
        )
        return (
            <div>
                <button onClick={this.addNewItemButtonCLick}>Add New Item</button>
                {todoList}
            </div>
        )
    }
}

export default TodoList