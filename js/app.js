'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _timer = require('./timer/timer');

var _timer2 = _interopRequireDefault(_timer);

var _menu = require('./menu/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

    _reactDom2.default.render(React.createElement(_menu2.default, { items: ['Home', 'Blog', 'Products', 'About'] }), document.getElementById('menu'));

    _reactDom2.default.render(React.createElement(_timer2.default, { times: [5, 10, 15] }), document.getElementById('timer'));
});
//# sourceMappingURL=app.js.map
