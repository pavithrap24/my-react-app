import React from 'react'

function Todo(props) {
        console.log('props', props)
        return (
            <div>
                <br />
                <input type="checkbox" onChange={() => props.checkboxChange(props.keyValue)} checked={props.checked}/>
                <input type="text" name="text" onChange={(event) => props.inputChange(event, props.keyValue)} value={props.text}/>
            </div>
        )
}

export default Todo;