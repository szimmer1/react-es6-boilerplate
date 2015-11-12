import React from 'react';
import BaseComponent from '../base_component';

class TimerDisplay extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.left}</h1>
        )
    }
}

export default TimerDisplay;