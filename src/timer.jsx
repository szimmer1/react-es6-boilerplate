import React from 'react';

class Timer extends React.Component {

    setInitialState() {
        return {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h2>Timer</h2>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

// https://github.com/babel/babel/issues/2694
export default Timer;