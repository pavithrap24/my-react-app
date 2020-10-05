import React from 'react'

function GitUserSearch(props) {

    return (
        <div>
            <label>{props.loginName}</label>
            <br />
            <img src={props.avatar} alt=''/>
            <br />
            <br />
        </div>
    )
}

export default GitUserSearch;