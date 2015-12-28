import React from 'react';
import BaseComponent from '../base_component';

class Menu extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items,
            selected: props.initial
        };

        // bind methods
        this._bind('select');
    }

    select(item) {
        this.setState({
            selected: item
        })
    }

    render() {
        return (
            <ul className="nav nav-pills">
            {this.state.items.map((item) => {
                var className = this.state.selected == item ? 'active' : '';
                return <li role="presentation" className={className} onClick={ this.select.bind(this, item) }><a href="#">{item}</a></li>
            })}
            </ul>
        )
    }
}

export default Menu;