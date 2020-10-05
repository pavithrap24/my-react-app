import React from 'react';

const withHOC = WrappedComponent => {
    class WithHOC extends React.Component {
       
        render() {
            return (
                <div>
                    <p>Learning HOC</p>
                    <WrappedComponent />
                </div>
            )
        }
    }
    return WithHOC
}

export default withHOC