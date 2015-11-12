import React from 'react';
import BaseComponent from '../base_component';
import TimerButton from './timer_button';
import TimerDisplay from './timer_display';

class Timer extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            left: 0,
            intervalFn: null
        };

        // bind class methods
        this._bind('run');
    }

    run(seconds) {
        clearInterval(this.state.intervalFn);
        var intFn = setInterval(() => {
            var left = this.state.left - 1;
            if (!left) clearInterval(intFn);
            this.setState({ left: left });
        }, 1000);

        this.setState({
            left: seconds,
            intervalFn: intFn
        })
    }

    render() {
        return (
            <div>
                <h2>Timer</h2>
                <TimerButton seconds={5} run={this.run}></TimerButton>
                <TimerButton seconds={10} run={this.run}></TimerButton>
                <TimerButton seconds={15} run={this.run}></TimerButton>
                <TimerDisplay left={this.state.left}></TimerDisplay>
            </div>
        )
    }

}

// https://github.com/babel/babel/issues/2694
export default Timer;