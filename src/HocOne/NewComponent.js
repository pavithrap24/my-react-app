import React from 'react'

import withHOC from  './withHOC'

class NewComponent extends React.Component{
    render(){
        return <p>New Component</p>
    }
}

export default withHOC(NewComponent)