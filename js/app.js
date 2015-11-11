'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _timer = require('./timer');

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

    _reactDom2.default.render(React.createElement(_timer2.default, null), document.getElementById('content'));

    dne();
});
//# sourceMappingURL=app.js.map
