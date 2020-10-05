import React, {useState} from 'react'
import Todo from './Todo'

function TodoUseState() {

    const [list, setList] = useState([])

    function checkboxChange(id){
        const newList = list;
        newList[id]['isChecked'] = !newList[id]['isChecked'];
        setList(newList);
    }
    
    function inputChange(event, id){
        const newList = list;
        newList[id]['text'] = newList[id]['text'] + event.target.value;
        setList(newList);
    }
    
    function addNewItemButtonCLick() {
        const length = list.length;
        const item = {
            id:  length,
            text: '',
            isChecked: false
        }
        setList([...list, item]);
    }

    function ToList({items}) { 
        return (items.map(item => 
        <Todo 
            key = {item.id}
            keyValue = {item.id}
            checkboxChange={checkboxChange}
            checked = {item.isChecked}
            text = {item.text}
            inputChange={inputChange}
        />
    ))}

    return (
            <div>
                <p>{console.log('finalList ', list)}</p>
                <button onClick={addNewItemButtonCLick}>Add New Item</button>
                <ToList items={list}/>
            </div>
        )
}

export default TodoUseState