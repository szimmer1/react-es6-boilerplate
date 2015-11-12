import React from 'react';
import BaseComponent from '../base_component';

class TimerButton extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            seconds: props.seconds
        };

        // bind methods
        this._bind('startTimer');
    }

    startTimer() {
        this.props.run(this.state.seconds);
    }

    render() {
        return (
            <button onClick={this.startTimer}>{this.state.seconds} seconds</button>
        )
    }
}

export default TimerButton;