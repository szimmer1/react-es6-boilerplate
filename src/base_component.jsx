import React from 'react';

// Idea from this blog post
// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes

class BaseComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    _bind(...methods) {
        methods.forEach((method) => { this[method] = this[method].bind(this) })
    }
}

export default BaseComponent;