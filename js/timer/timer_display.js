'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base_component = require('../base_component');

var _base_component2 = _interopRequireDefault(_base_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimerDisplay = (function (_BaseComponent) {
    _inherits(TimerDisplay, _BaseComponent);

    function TimerDisplay(props) {
        _classCallCheck(this, TimerDisplay);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TimerDisplay).call(this, props));
    }

    _createClass(TimerDisplay, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                this.props.left
            );
        }
    }]);

    return TimerDisplay;
})(_base_component2.default);

exports.default = TimerDisplay;
//# sourceMappingURL=timer_display.js.map
