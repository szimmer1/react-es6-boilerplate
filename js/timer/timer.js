'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base_component = require('../base_component');

var _base_component2 = _interopRequireDefault(_base_component);

var _timer_button = require('./timer_button');

var _timer_button2 = _interopRequireDefault(_timer_button);

var _timer_display = require('./timer_display');

var _timer_display2 = _interopRequireDefault(_timer_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = (function (_BaseComponent) {
    _inherits(Timer, _BaseComponent);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this, props));

        _this.state = {
            left: 0,
            intervalFn: null
        };

        // bind class methods
        _this._bind('run');
        return _this;
    }

    _createClass(Timer, [{
        key: 'run',
        value: function run(seconds) {
            var _this2 = this;

            clearInterval(this.state.intervalFn);
            var intFn = setInterval(function () {
                var left = _this2.state.left - 1;
                if (!left) clearInterval(intFn);
                _this2.setState({ left: left });
            }, 1000);

            this.setState({
                left: seconds,
                intervalFn: intFn
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Timer'
                ),
                _react2.default.createElement(_timer_button2.default, { seconds: 5, run: this.run }),
                _react2.default.createElement(_timer_button2.default, { seconds: 10, run: this.run }),
                _react2.default.createElement(_timer_button2.default, { seconds: 15, run: this.run }),
                _react2.default.createElement(_timer_display2.default, { left: this.state.left })
            );
        }
    }]);

    return Timer;
})(_base_component2.default);

// https://github.com/babel/babel/issues/2694

exports.default = Timer;
//# sourceMappingURL=timer.js.map
