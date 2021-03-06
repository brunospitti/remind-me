// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"redux\\actionCreators\\fetchToDos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchToDos = undefined;
var _this = undefined;

var _firebase = require("../../config/firebase");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchToDos = exports.fetchToDos = function fetchToDos(userId) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _firebase.todosRef.on("value", function (snapshot) {
                dispatch({
                  type: "FETCH_TO_DOS",
                  lists: snapshot.val(),
                  userId: userId
                });
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
},{"../../config/firebase":"config\\firebase.js"}],"redux\\actionCreators\\selectList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectList;
function selectList(listId) {
  return {
    type: "CHANGE_ACTIVE_LIST",
    listId: listId
  };
}
},{}],"hocs\\requireAuth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.requireAuth = requireAuth;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = require("@reach/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAuth(ComposedComponent) {
  var Authentication = function (_Component) {
    _inherits(Authentication, _Component);

    function Authentication() {
      _classCallCheck(this, Authentication);

      return _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).apply(this, arguments));
    }

    _createClass(Authentication, [{
      key: "render",
      value: function render() {
        if (this.props.authenticated) {
          return _react2.default.createElement(ComposedComponent, this.props);
        }
        return null;
      }
    }]);

    return Authentication;
  }(_react.Component);

  Authentication.contextTypes = {
    router: _propTypes2.default.object
  };


  function mapStateToProps(state) {
    return { authenticated: state.user };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(Authentication);
}
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","prop-types":"..\\node_modules\\prop-types\\index.js","@reach/router":"..\\node_modules\\@reach\\router\\es\\index.js"}],"redux\\actionCreators\\editListName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = editListName;
function editListName(listId, newName) {
  return {
    type: "EDIT_LIST_NAME",
    listId: listId,
    newName: newName
  };
}
},{}],"redux\\actionCreators\\deleteList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteList;
function deleteList(listId, nextListId) {
  return {
    type: "DELETE_LIST",
    listId: listId,
    nextListId: nextListId
  };
}
},{}],"components\\basics\\Sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../../assets/globalStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_React$PureComponent) {
  _inherits(Sort, _React$PureComponent);

  function Sort() {
    _classCallCheck(this, Sort);

    return _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).apply(this, arguments));
  }

  _createClass(Sort, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledSortBy,
        null,
        _react2.default.createElement(
          "span",
          null,
          "Sort by: "
        ),
        _react2.default.createElement(
          "select",
          {
            value: this.props.sortBy,
            onChange: function onChange(e) {
              return _this2.props.handleSortByChange(e.target.value);
            }
          },
          _react2.default.createElement(
            "option",
            { value: "most-important" },
            "Most Important"
          ),
          _react2.default.createElement(
            "option",
            { value: "alphabetically-a-z" },
            "Alphabetically (A-Z)"
          ),
          _react2.default.createElement(
            "option",
            { value: "alphabetically-z-a" },
            "Alphabetically (Z-A)"
          ),
          _react2.default.createElement(
            "option",
            { value: "newest" },
            "Newest"
          ),
          _react2.default.createElement(
            "option",
            { value: "oldest" },
            "Oldest"
          )
        )
      );
    }
  }]);

  return Sort;
}(_react2.default.PureComponent);

// styled components


exports.default = Sort;
var StyledSortBy = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Sort__StyledSortBy",
  componentId: "w02ahw-0"
})(["float:right;margin-top:10px;span{font-size:1.1em;}select{border:1px solid ", ";padding:7px 2px;margin-left:5px;}"], (0, _polished.lighten)(0.15, _globalStyles.colors.lightGrey));
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../../assets/globalStyles":"assets\\globalStyles.js"}],"hocs\\contentEditable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = contentEditable;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/display-name */


function contentEditable(WrappedComponent) {
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        editing: false
      }, _this.toggleEdit = function (e) {
        e.stopPropagation();
        if (_this.state.editing) {
          _this.cancel();
        } else {
          _this.edit();
        }
      }, _this.edit = function () {
        _this.setState({
          editing: true
        }, function () {
          _this.domElm.focus();
        });
      }, _this.save = function () {
        _this.setState({ editing: false }, function () {
          _this.props.getInputValue(_this.domElm.textContent);
        });
      }, _this.cancel = function () {
        _this.setState({
          editing: false
        });
      }, _this.handleKeyDown = function (e) {
        var key = e.key;
        var dontSaveOnEnter = _this.props.dontSaveOnEnter;

        if (dontSaveOnEnter) {
          switch (key) {
            case "Escape":
              _this.save();
              break;
          }
        } else {
          switch (key) {
            case "Enter":
            case "Escape":
              _this.save();
              break;
          }
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var editOnClick = true;
        var editing = this.state.editing;

        if (this.props.editOnClick !== undefined) {
          editOnClick = this.props.editOnClick;
        }
        return _react2.default.createElement(
          WrappedComponent,
          _extends({
            suppressContentEditableWarning: true,
            className: editing ? "editing" : "",
            onClick: editOnClick ? this.toggleEdit : undefined,
            contentEditable: editing,
            ref: function ref(domNode) {
              _this2.domElm = domNode;
            },
            onBlur: this.save,
            onKeyDown: this.handleKeyDown
          }, this.props),
          this.props.value
        );
      }
    }]);

    return _class2;
  }(_react2.default.Component);
}
},{"react":"..\\node_modules\\react\\index.js"}],"components\\basics\\DivThanInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _contentEditable = require("../../hocs/contentEditable");

var _contentEditable2 = _interopRequireDefault(_contentEditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DivThanInput = function (_React$PureComponent) {
  _inherits(DivThanInput, _React$PureComponent);

  function DivThanInput() {
    _classCallCheck(this, DivThanInput);

    return _possibleConstructorReturn(this, (DivThanInput.__proto__ || Object.getPrototypeOf(DivThanInput)).apply(this, arguments));
  }

  _createClass(DivThanInput, [{
    key: "render",
    value: function render() {
      var EditableDiv = (0, _contentEditable2.default)(StyledEditableDiv);
      var divProps = Object.assign({}, this.props);
      return _react2.default.createElement(EditableDiv, _extends({
        className: this.props.className,
        maxLength: "35",
        type: "text",
        placeholder: this.props.inputPlaceholder,
        value: this.props.value
      }, divProps));
    }
  }]);

  return DivThanInput;
}(_react2.default.PureComponent);

// styled components


exports.default = DivThanInput;
var StyledEditableDiv = (0, _styledComponents2.default)("div").withConfig({
  displayName: "DivThanInput__StyledEditableDiv",
  componentId: "sc-1xhqcwo-0"
})(["cursor:text;"]);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../../hocs/contentEditable":"hocs\\contentEditable.js"}],"redux\\actionCreators\\deleteItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteItem;
function deleteItem(itemToDelete, listId) {
  return {
    type: "DELETE_ITEM_FROM_LIST",
    itemToDelete: itemToDelete,
    listId: listId
  };
}
},{}],"redux\\actionCreators\\changeItemPriorityColor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeItemPriorityColor;
function changeItemPriorityColor(listId, taskId, newPriority) {
  return {
    type: "CHANGE_ITEM_PRIORITY_COLOR",
    listId: listId,
    taskId: taskId,
    newPriority: newPriority
  };
}
},{}],"components\\basics\\PrioritySelector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../../assets/globalStyles");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrioritySelector = function (_React$PureComponent) {
  _inherits(PrioritySelector, _React$PureComponent);

  function PrioritySelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrioritySelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrioritySelector.__proto__ || Object.getPrototypeOf(PrioritySelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showChangePriority: false
    }, _this.priorityColor = function () {
      var low = _globalStyles.priorityColors.low;
      var medium = _globalStyles.priorityColors.medium;
      var high = _globalStyles.priorityColors.high;
      var priority = _this.props.priority;


      if (priority === 1) {
        return low;
      } else if (priority === 2) {
        return medium;
      } else {
        return high;
      }
    }, _this.handleChangePriority = function (listId, taskId, newPriority) {
      if (newPriority === "low") {
        newPriority = 1;
      } else if (newPriority === "medium") {
        newPriority = 2;
      } else {
        newPriority = 3;
      }
      _this.props.handleChangeItemPriorityColor(listId, taskId, newPriority);
      _this.setState({
        showChangePriority: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PrioritySelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "span",
          { className: "priority" },
          _react2.default.createElement(_Button.Button, {
            icon: "priority",
            clickBehavior: function clickBehavior() {
              return _this2.setState({ showChangePriority: true });
            },
            text: "Priority",
            mainColor: this.priorityColor()
          })
        ),
        this.state.showChangePriority && _react2.default.createElement(
          StyledColorList,
          null,
          Object.keys(_globalStyles.priorityColors).map(function (priorityColor, i) {
            return _react2.default.createElement(
              StyledLabelColor,
              {
                key: i,
                mainColor: _globalStyles.priorityColors[priorityColor],
                onClick: function onClick() {
                  return _this2.handleChangePriority(_this2.props.listId, _this2.props.taskId, priorityColor);
                }
              },
              priorityColor
            );
          })
        )
      );
    }
  }]);

  return PrioritySelector;
}(_react2.default.PureComponent);

// styled components


var StyledColorList = (0, _styledComponents2.default)("ul").withConfig({
  displayName: "PrioritySelector__StyledColorList",
  componentId: "sc-1iz9zx3-0"
})(["position:absolute;top:5px;right:80px;width:240px;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";padding:10px;"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light));

var StyledLabelColor = (0, _styledComponents2.default)("li").withConfig({
  displayName: "PrioritySelector__StyledLabelColor",
  componentId: "sc-1iz9zx3-1"
})(["cursor:pointer;background:", ";border-bottom:2px solid ", ";width:70px;text-align:center;display:inline-block;padding:10px 0;color:white;&:not(:first-child){margin-left:5px;}"], function (props) {
  return props.mainColor;
}, function (props) {
  return (0, _polished.darken)(0.2, props.mainColor);
});

exports.default = PrioritySelector;
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../../assets/globalStyles":"assets\\globalStyles.js","./Button":"components\\basics\\Button.js"}],"redux\\actionCreators\\checkItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkItem;
function checkItem(itemToCheck, listId) {
  return {
    type: "CHECK_ITEM",
    itemToCheck: itemToCheck,
    listId: listId
  };
}
},{}],"components\\basics\\RatioButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../../assets/globalStyles");

var _checkItem = require("../../redux/actionCreators/checkItem");

var _checkItem2 = _interopRequireDefault(_checkItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-associated-control */
var RatioButton = function RatioButton(props) {
  return _react2.default.createElement(
    StyledRatio,
    {
      mainColor: props.mainColor,
      className: props.checked ? "checked" : "not-checked"
    },
    _react2.default.createElement("input", { type: "checkbox", id: "checkbox" + props.taskId }),
    _react2.default.createElement("label", {
      htmlFor: "checkbox" + props.taskId,
      onClick: function onClick() {
        return props.handleCheckItem(props.taskId, props.listId);
      }
    })
  );
};

// styled components
var StyledRatio = (0, _styledComponents2.default)("div").withConfig({
  displayName: "RatioButton__StyledRatio",
  componentId: "sc-178w7bc-0"
})(["display:table-cell;vertical-align:middle;width:20px;height:20px;label{width:20px;height:20px;background-color:", ";border:1px solid ", ";border-radius:50%;cursor:pointer;left:0;position:relative;display:block;transition:0.25s all ease;&:hover{background-color:", ";border:1px solid ", ";}&:after{border:5px solid ", ";border-top:none;border-right:none;content:\"\";height:6px;top:-1px;left:1px;opacity:0;position:absolute;transform:rotate(-45deg);width:16px;}}input[type=\"checkbox\"]{width:1px;height:1px;visibility:hidden;position:absolute;}&.checked{label{background-color:white;border-color:", ";&:after{opacity:1;}}}"], _globalStyles.colors.light, _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.3, _globalStyles.colors.secondary), _globalStyles.colors.secondary, function (props) {
  return props.mainColor;
}, function (props) {
  return (0, _polished.lighten)(0.1, props.mainColor);
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleCheckItem: function handleCheckItem(itemToCheck, listId) {
      dispatch((0, _checkItem2.default)(itemToCheck, listId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RatioButton);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../../assets/globalStyles":"assets\\globalStyles.js","../../redux/actionCreators/checkItem":"redux\\actionCreators\\checkItem.js"}],"components\\SingleToDo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _deleteItem = require("../redux/actionCreators/deleteItem");

var _deleteItem2 = _interopRequireDefault(_deleteItem);

var _changeItemPriorityColor = require("../redux/actionCreators/changeItemPriorityColor");

var _changeItemPriorityColor2 = _interopRequireDefault(_changeItemPriorityColor);

var _PrioritySelector = require("./basics/PrioritySelector");

var _PrioritySelector2 = _interopRequireDefault(_PrioritySelector);

var _RatioButton = require("./basics/RatioButton");

var _RatioButton2 = _interopRequireDefault(_RatioButton);

var _Button = require("./basics/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleToDo = function (_React$PureComponent) {
  _inherits(SingleToDo, _React$PureComponent);

  function SingleToDo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleToDo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleToDo.__proto__ || Object.getPrototypeOf(SingleToDo)).call.apply(_ref, [this].concat(args))), _this), _this.getClasses = function () {
      var classes = "";
      if (_this.props.task.checked) {
        if (_this.props.showItem) {
          classes = "checked show";
        } else {
          classes = "checked hide";
        }
      } else {
        classes = "not-checked show";
      }
      return classes;
    }, _this.deleteItem = function (itemToDelete, listId) {
      _this.props.handleDeleteItem(itemToDelete, listId);
      setTimeout(function () {
        this.props.completeListLayout();
      }.bind(_this), 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleToDo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          StyledLi,
          {
            id: "single-to-do",
            className: this.getClasses(),
            onMouseEnter: function onMouseEnter() {
              return _this2.props.showToDoOptionsFunc(_this2.props.task.id, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.props.showToDoOptionsFunc(_this2.props.task.id, false);
            }
          },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_RatioButton2.default, {
              checked: this.props.task.checked,
              taskId: this.props.task.id,
              mainColor: this.props.mainColor,
              listId: this.props.listId
            }),
            _react2.default.createElement(
              StyledTask,
              {
                role: "button",
                onKeyPress: function onKeyPress() {
                  return _this2.props.itemListDetails(_this2.props.task);
                },
                onClick: function onClick() {
                  return _this2.props.itemListDetails(_this2.props.task);
                },
                tabIndex: "0"
              },
              this.props.task.task
            ),
            _react2.default.createElement(_PrioritySelector2.default, {
              handleChangeItemPriorityColor: this.props.handleChangeItemPriorityColor,
              priority: this.props.task.priority,
              listId: this.props.listId,
              taskId: this.props.task.id
            }),
            this.props.showToDoOptions && _react2.default.createElement(
              "span",
              null,
              _react2.default.createElement(_Button.Button, {
                icon: "delete",
                clickBehavior: function clickBehavior() {
                  return _this2.deleteItem(_this2.props.task.id, _this2.props.listId);
                },
                text: "Delete"
              })
            )
          )
        )
      );
    }
  }]);

  return SingleToDo;
}(_react2.default.PureComponent);

// styled components


var StyledLi = (0, _styledComponents2.default)("li").withConfig({
  displayName: "SingleToDo__StyledLi",
  componentId: "sc-18bh7qb-0"
})(["position:relative;padding:20px;text-align:left;> div{width:100%;}div{display:inline-block;box-sizing:border-box;transition:0.25s all ease;vertical-align:top;cursor:pointer;}span{position:absolute;right:0;top:0;&.priority{right:40px;}}&.checked{div{text-decoration:line-through;opacity:0.5;}}&.hide{display:none;}"]);

var StyledTask = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SingleToDo__StyledTask",
  componentId: "sc-18bh7qb-1"
})(["width:calc(100% - 90px);padding-left:15px;vertical-align:middle !important;"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists;
  return {
    lists: lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleDeleteItem: function handleDeleteItem(itemToDelete, listId) {
      dispatch((0, _deleteItem2.default)(itemToDelete, listId));
    },
    handleChangeItemPriorityColor: function handleChangeItemPriorityColor(listId, taskId, newPriority) {
      dispatch((0, _changeItemPriorityColor2.default)(listId, taskId, newPriority));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SingleToDo);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../redux/actionCreators/deleteItem":"redux\\actionCreators\\deleteItem.js","../redux/actionCreators/changeItemPriorityColor":"redux\\actionCreators\\changeItemPriorityColor.js","./basics/PrioritySelector":"components\\basics\\PrioritySelector.js","./basics/RatioButton":"components\\basics\\RatioButton.js","./basics/Button":"components\\basics\\Button.js"}],"assets\\icons\\edit.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M149.996 0C67.157 0 .001 67.161.001 149.997S67.157 300 149.996 300s150.003-67.163 150.003-150.003S232.835 0 149.996 0zm71.306 107.945l-14.247 14.247-29.001-28.999-11.002 11.002 29.001 29.001-71.132 71.126-28.999-28.996-11.002 11.002 28.999 28.999-7.088 7.088-.135-.135a5.612 5.612 0 0 1-3.582 2.575l-27.043 6.03a5.61 5.61 0 0 1-5.197-1.512 5.613 5.613 0 0 1-1.512-5.203l6.027-27.035a5.631 5.631 0 0 1 2.578-3.582l-.137-.137L192.3 78.941a4.304 4.304 0 0 1 6.082.005l22.922 22.917a4.302 4.302 0 0 1-.002 6.082z"
});

var SvgEdit = function SvgEdit(props) {
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 300 300"
  }, props), _ref);
};

exports.default = SvgEdit;
},{"react":"..\\node_modules\\react\\index.js"}],"assets\\helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomId = exports.randomId = function randomId() {
  return Math.random().toString(36).slice(-10);
};

var dateTransformation = exports.dateTransformation = function dateTransformation(dateTime) {
  if (dateTime) {
    var date = new Date(dateTime);
    return date.toDateString();
  } else {
    return null;
  }
};

var currTime = exports.currTime = function currTime() {
  return new Date(new Date().toString().split("GMT")[0] + " UTC").toISOString().split(".")[0];
};

var slugify = exports.slugify = function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
},{}],"redux\\actionCreators\\editItemName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = editItemName;
function editItemName(listId, taskId, newName) {
  return {
    type: "EDIT_ITEM_NAME",
    listId: listId,
    taskId: taskId,
    newName: newName
  };
}
},{}],"redux\\actionCreators\\editItemNotes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = editItemNotes;
function editItemNotes(listId, taskId, newNotes) {
  return {
    type: "EDIT_ITEM_NOTES",
    listId: listId,
    taskId: taskId,
    newNotes: newNotes
  };
}
},{}],"components\\SingleToDoDetailsEdit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require("../assets/globalStyles");

var _editItemName = require("../redux/actionCreators/editItemName");

var _editItemName2 = _interopRequireDefault(_editItemName);

var _editItemNotes = require("../redux/actionCreators/editItemNotes");

var _editItemNotes2 = _interopRequireDefault(_editItemNotes);

var _DivThanInput = require("./basics/DivThanInput");

var _DivThanInput2 = _interopRequireDefault(_DivThanInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/label-has-associated-control */


var SingleToDoDetailsEdit = function (_React$PureComponent) {
  _inherits(SingleToDoDetailsEdit, _React$PureComponent);

  function SingleToDoDetailsEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleToDoDetailsEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleToDoDetailsEdit.__proto__ || Object.getPrototypeOf(SingleToDoDetailsEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showEditItems: false
    }, _this.getInputValue = function (inputValue) {
      _this.props.handleEditItemName(_this.props.listId, _this.props.task.id, inputValue);
    }, _this.getTextAreaValue = function (textAreaValue) {
      _this.props.handleEditItemNotes(_this.props.listId, _this.props.task.id, textAreaValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleToDoDetailsEdit, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledEditableDiv, {
          value: this.props.task.task,
          getInputValue: this.getInputValue,
          inputPlaceholder: "Edit task"
        }),
        _react2.default.createElement(StyledEditableDivTextArea, {
          dontSaveOnEnter: true,
          value: this.props.task.notes,
          getInputValue: this.getTextAreaValue,
          inputPlaceholder: "Edit task"
        })
      );
    }
  }]);

  return SingleToDoDetailsEdit;
}(_react2.default.PureComponent);

// styled components

var StyledEditableDiv = (0, _styledComponents2.default)(_DivThanInput2.default).withConfig({
  displayName: "SingleToDoDetailsEdit__StyledEditableDiv",
  componentId: "ve0p5t-0"
})(["position:relative;text-align:left;background:", ";width:100%;margin-bottom:5px;border:0;padding:15px 10px;"], _globalStyles.colors.light);

var StyledEditableDivTextArea = (0, _styledComponents2.default)(_DivThanInput2.default).withConfig({
  displayName: "SingleToDoDetailsEdit__StyledEditableDivTextArea",
  componentId: "ve0p5t-1"
})(["position:relative;text-align:left;background:", ";width:100%;margin-bottom:5px;border:0;padding:12px 10px;margin:10px 0;height:120px;overflow-x:auto;"], _globalStyles.colors.light);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleEditItemName: function handleEditItemName(listId, taskId, newName) {
      dispatch((0, _editItemName2.default)(listId, taskId, newName));
    },
    handleEditItemNotes: function handleEditItemNotes(listId, taskId, newNotes) {
      dispatch((0, _editItemNotes2.default)(listId, taskId, newNotes));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SingleToDoDetailsEdit);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/editItemName":"redux\\actionCreators\\editItemName.js","../redux/actionCreators/editItemNotes":"redux\\actionCreators\\editItemNotes.js","./basics/DivThanInput":"components\\basics\\DivThanInput.js"}],"components\\SingleToDoDetails.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../assets/globalStyles");

var _edit = require("../assets/icons/edit.svg");

var _edit2 = _interopRequireDefault(_edit);

var _helpers = require("../assets/helpers");

var _deleteItem = require("../redux/actionCreators/deleteItem");

var _deleteItem2 = _interopRequireDefault(_deleteItem);

var _PrioritySelector = require("./basics/PrioritySelector");

var _PrioritySelector2 = _interopRequireDefault(_PrioritySelector);

var _changeItemPriorityColor = require("../redux/actionCreators/changeItemPriorityColor");

var _changeItemPriorityColor2 = _interopRequireDefault(_changeItemPriorityColor);

var _SingleToDoDetailsEdit = require("./SingleToDoDetailsEdit");

var _SingleToDoDetailsEdit2 = _interopRequireDefault(_SingleToDoDetailsEdit);

var _Button = require("./basics/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/label-has-associated-control */


var SingleToDoDetails = function (_React$PureComponent) {
  _inherits(SingleToDoDetails, _React$PureComponent);

  function SingleToDoDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleToDoDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleToDoDetails.__proto__ || Object.getPrototypeOf(SingleToDoDetails)).call.apply(_ref, [this].concat(args))), _this), _this.deleteItem = function (itemToDelete, listId) {
      _this.props.closeDetails();
      _this.props.handleDeleteItem(itemToDelete, listId);
      setTimeout(function () {
        this.props.completeListLayout();
      }.bind(_this), 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleToDoDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledDetailsContainer,
        {
          className: this.props.task.checked ? "checked" : "not-checked"
        },
        _react2.default.createElement(
          "div",
          { className: "header-container" },
          _react2.default.createElement(
            StyledH3,
            { mainColor: this.props.mainColor },
            "Task details"
          ),
          _react2.default.createElement(StyledEditIcon, { mainColor: this.props.mainColor }),
          _react2.default.createElement(_PrioritySelector2.default, {
            handleChangeItemPriorityColor: this.props.handleChangeItemPriorityColor,
            priority: this.props.task.priority,
            listId: this.props.listId,
            taskId: this.props.task.id
          })
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(_SingleToDoDetailsEdit2.default, {
            task: this.props.task,
            showDetailsEditItems: this.props.showDetailsEditItems,
            showDetailsEditItemsFunc: this.props.showDetailsEditItemsFunc,
            itemListDetails: this.props.itemListDetails,
            mainColor: this.props.mainColor,
            showToDoOptionsFunc: this.props.showToDoOptionsFunc,
            listId: this.props.listId
          })
        ),
        _react2.default.createElement(
          StyledFooter,
          { mainColor: this.props.mainColor },
          _react2.default.createElement(_Button.Button, {
            className: "footer-item",
            icon: "collapse",
            clickBehavior: this.props.closeDetails,
            text: "Close me"
          }),
          _react2.default.createElement(
            "div",
            { className: "footer-item" },
            _react2.default.createElement(
              "b",
              null,
              "Date created:"
            ),
            " ",
            (0, _helpers.dateTransformation)(this.props.task.start_date)
          ),
          _react2.default.createElement(_Button.Button, {
            className: "footer-item",
            icon: "delete",
            clickBehavior: function clickBehavior() {
              return _this2.deleteItem(_this2.props.task.id, _this2.props.listId);
            },
            text: "Delete"
          })
        )
      );
    }
  }]);

  return SingleToDoDetails;
}(_react2.default.PureComponent);

// styled components


var StyledDetailsContainer = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SingleToDoDetails__StyledDetailsContainer",
  componentId: "sc-1gzjucr-0"
})(["height:100%;width:45%;position:absolute;padding:20px;right:5px;bottom:0;background:white;box-shadow:-1px 2px 4px ", ";&.active{width:40%;}> button{position:absolute;bottom:20px;}li#single-ToDo{div{padding-left:0;}div + div{padding-left:15px;}}&.checked{.header-container,ul,> div{opacity:0.5;}}"], _globalStyles.colors.lightGrey);

var StyledEditIcon = (0, _styledComponents2.default)(_edit2.default).withConfig({
  displayName: "SingleToDoDetails__StyledEditIcon",
  componentId: "sc-1gzjucr-1"
})(["display:inline-block;float:right;width:33px;fill:", ";"], function (props) {
  return props.mainColor;
});

var StyledH3 = (0, _styledComponents2.default)("h3").withConfig({
  displayName: "SingleToDoDetails__StyledH3",
  componentId: "sc-1gzjucr-2"
})(["color:", ";margin-bottom:10px;margin-top:7px;font-size:1.3em;display:inline-block;"], function (props) {
  return props.mainColor;
});

var StyledFooter = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SingleToDoDetails__StyledFooter",
  componentId: "sc-1gzjucr-3"
})(["position:absolute;bottom:0;background:", ";width:100%;left:0;button{background:", ";margin:0;padding:20px;transition:0.25s all ease;&:hover{background:", ";}svg{margin-left:0;fill:;}}div{width:calc(100% - 120px);text-align:center;}button:last-child{svg{&:hover{opacity:0.4 !important;fill:black !important;}}}.footer-item{display:inline-block;}"], (0, _polished.lighten)(0.225, _globalStyles.colors.lightGrey), (0, _polished.lighten)(0.2, _globalStyles.colors.lightGrey), (0, _polished.lighten)(0.15, _globalStyles.colors.lightGrey));

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists;
  return {
    lists: lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleDeleteItem: function handleDeleteItem(itemToDelete, listId) {
      dispatch((0, _deleteItem2.default)(itemToDelete, listId));
    },
    handleChangeItemPriorityColor: function handleChangeItemPriorityColor(listId, taskId, newPriority) {
      dispatch((0, _changeItemPriorityColor2.default)(listId, taskId, newPriority));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SingleToDoDetails);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../assets/icons/edit.svg":"assets\\icons\\edit.svg","../assets/helpers":"assets\\helpers.js","../redux/actionCreators/deleteItem":"redux\\actionCreators\\deleteItem.js","./basics/PrioritySelector":"components\\basics\\PrioritySelector.js","../redux/actionCreators/changeItemPriorityColor":"redux\\actionCreators\\changeItemPriorityColor.js","./SingleToDoDetailsEdit":"components\\SingleToDoDetailsEdit.js","./basics/Button":"components\\basics\\Button.js"}],"redux\\actionCreators\\addItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItem = undefined;
var _this = undefined;

var _firebase = require("../../config/firebase");

var _helpers = require("../../assets/helpers");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var addItem = exports.addItem = function addItem(itemToAdd, listId) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var taskId, updates, newItemObject;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              taskId = (0, _helpers.randomId)();
              updates = {};
              newItemObject = {
                id: taskId,
                task: itemToAdd,
                start_date: (0, _helpers.currTime)(),
                checked: false,
                priority: 1
              };


              _firebase.databaseRef.child("lists/" + listId + "/items/").push(newItemObject);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
},{"../../config/firebase":"config\\firebase.js","../../assets/helpers":"assets\\helpers.js"}],"components\\AddItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require("react-redux");

var _addItem = require("../redux/actionCreators/addItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddItem = function (_React$PureComponent) {
  _inherits(AddItem, _React$PureComponent);

  function AddItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: ""
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.state.inputValue != "" && _this.state.inputValue.length > 3) {
        _this.props.handleAddItem(_this.state.inputValue, _this.props.listId);
        setTimeout(function () {
          this.props.completeListLayout();
        }.bind(_this), 0);
        _this.setState({ inputValue: "" });
      }
    }, _this.handleChange = function (e) {
      _this.setState({ inputValue: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "form",
        { onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          } },
        _react2.default.createElement(StyledInput, {
          maxLength: "35",
          type: "text",
          placeholder: "Insert new item",
          value: this.state.inputValue,
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          }
        })
      );
    }
  }]);

  return AddItem;
}(_react2.default.PureComponent);

// styled components


var StyledInput = (0, _styledComponents2.default)("input").withConfig({
  displayName: "AddItem__StyledInput",
  componentId: "sc-1bcjewa-0"
})(["position:relative;text-align:left;margin-left:53px;width:60%;margin-bottom:5px;border:0;background:transparent;padding:20px 0;"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleAddItem: function handleAddItem(newItem, listId) {
      dispatch((0, _addItem.addItem)(newItem, listId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddItem);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","../redux/actionCreators/addItem":"redux\\actionCreators\\addItem.js"}],"components\\ToDos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../assets/globalStyles");

var _editListName = require("../redux/actionCreators/editListName");

var _editListName2 = _interopRequireDefault(_editListName);

var _deleteList = require("../redux/actionCreators/deleteList");

var _deleteList2 = _interopRequireDefault(_deleteList);

var _Sort = require("./basics/Sort");

var _Sort2 = _interopRequireDefault(_Sort);

var _Button = require("./basics/Button");

var _DivThanInput = require("./basics/DivThanInput");

var _DivThanInput2 = _interopRequireDefault(_DivThanInput);

var _SingleToDo = require("./SingleToDo");

var _SingleToDo2 = _interopRequireDefault(_SingleToDo);

var _SingleToDoDetails = require("./SingleToDoDetails");

var _SingleToDoDetails2 = _interopRequireDefault(_SingleToDoDetails);

var _AddItem = require("./AddItem");

var _AddItem2 = _interopRequireDefault(_AddItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDos = function (_React$PureComponent) {
  _inherits(ToDos, _React$PureComponent);

  function ToDos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToDos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToDos.__proto__ || Object.getPrototypeOf(ToDos)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      detailsTask: "",
      showToDoOptions: false,
      showDetailsEditItems: false
    }, _this.handleEditList = function (inputValue) {
      if (inputValue.length > 3) {
        _this.props.handleEditListName(_this.props.currentList.id, inputValue);
      } else {
        alert("List name should be longer than 3 letters");
      }
    }, _this.deleteList = function () {
      _this.props.handleDeleteList(_this.props.currentList.id, _this.props.nextListId);
    }, _this.itemListDetails = function (task) {
      _this.setState({
        detailsTask: task,
        showDetailsEditItems: false
      }, function () {
        _this.props.showDetailsFunc(true);
      });
    }, _this.closeDetails = function () {
      _this.setState({ detailsTask: {} }, function () {
        _this.props.showDetailsFunc(false);
      });
    }, _this.showToDoOptionsFunc = function (taskId, toggle) {
      _this.setState({ showToDoOptions: toggle + "," + taskId });
    }, _this.showDetailsEditItemsFunc = function () {
      _this.setState({ showDetailsEditItems: true });
    }, _this.showEditListNameFunc = function () {
      _this.setState({ showEditListName: true });
    }, _this.numberOfCheckedItems = function () {
      var checkedItems = _this.props.currentList.items.filter(function (item) {
        return item.checked;
      });
      return checkedItems.length;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToDos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledEditableDiv, {
          className: this.props.className,
          value: this.props.currentList.name,
          getInputValue: this.handleEditList,
          inputPlaceholder: "List name"
        }),
        _react2.default.createElement(_Button.Button, {
          icon: "delete",
          clickBehavior: function clickBehavior() {
            return _this2.deleteList();
          },
          text: "Delete"
        }),
        _react2.default.createElement(_Sort2.default, {
          sortBy: this.props.sortBy,
          handleSortByChange: this.props.handleSortByChange
        }),
        _react2.default.createElement(
          StyledTodoHolder,
          null,
          _react2.default.createElement(
            StyledFilterChecked,
            { onClick: function onClick() {
                return _this2.props.filterCheckedFunc();
              } },
            this.props.filterChecked ? "Show checked items - (" + this.numberOfCheckedItems() + ")" : "Hide checked items - (" + this.numberOfCheckedItems() + ")"
          ),
          _react2.default.createElement(
            StyledToDo,
            {
              id: "to-dos",
              mainColor: this.props.currentList.color,
              toDoWidth: this.props.showDetails ? "55%" : "100%"
            },
            _react2.default.createElement(
              "ul",
              null,
              this.props.currentList.items.map(function (task) {
                return _react2.default.createElement(_SingleToDo2.default, {
                  key: task.id,
                  task: task,
                  itemListDetails: _this2.itemListDetails,
                  mainColor: _this2.props.currentList.color,
                  showToDoOptionsFunc: _this2.showToDoOptionsFunc,
                  showToDoOptions: "true," + task.id === _this2.state.showToDoOptions && _this2.state.showToDoOptions,
                  listId: _this2.props.currentList.id,
                  completeListLayout: _this2.props.completeListLayout,
                  showItem: _this2.props.filterChecked ? false : true
                });
              }),
              _react2.default.createElement(_AddItem2.default, {
                addItem: this.props.addItem,
                listId: this.props.currentList.id,
                completeListLayout: this.props.completeListLayout
              }),
              [].concat(_toConsumableArray(Array(this.props.completeListLayoutNum))).map(function (e, i) {
                return _react2.default.createElement("li", { key: i, className: i === 0 ? "first-fake" : null });
              })
            )
          ),
          this.props.showDetails && _react2.default.createElement(_SingleToDoDetails2.default, {
            task: this.state.detailsTask,
            showDetailsEditItems: this.state.showDetailsEditItems,
            showDetailsEditItemsFunc: this.showDetailsEditItemsFunc,
            itemListDetails: this.itemListDetails,
            mainColor: this.props.currentList.color,
            closeDetails: this.closeDetails,
            showToDoOptionsFunc: this.showToDoOptionsFunc,
            listId: this.props.currentList.id,
            completeListLayout: this.props.completeListLayout
          })
        )
      );
    }
  }]);

  return ToDos;
}(_react2.default.PureComponent);

// styled components


var StyledTodoHolder = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDos__StyledTodoHolder",
  componentId: "sc-7vjqze-0"
})(["display:block;position:relative;margin-bottom:4vh;"]);

var StyledFilterChecked = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDos__StyledFilterChecked",
  componentId: "sc-7vjqze-1"
})(["width:100%;display:block;padding:12px 40px;background:", ";cursor:pointer;transition:all 0.25s ease;&:hover{background:", ";}"], _globalStyles.colors.light, (0, _polished.darken)(0.02, _globalStyles.colors.light));

var StyledEditableDiv = (0, _styledComponents2.default)(_DivThanInput2.default).withConfig({
  displayName: "ToDos__StyledEditableDiv",
  componentId: "sc-7vjqze-2"
})(["display:inline-block;width:250px;font-size:2em;text-transform:capitalize;border-bottom:1px solid white;transition:all 0.25s ease;&:hover,&:focus{border-bottom:1px solid ", ";}"], _globalStyles.colors.lightGrey);

var StyledToDo = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDos__StyledToDo",
  componentId: "sc-7vjqze-3"
})(["padding:0 20px;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";height:55vh;overflow-x:auto;width:", ";&::-webkit-scrollbar-track{background-color:", ";}&::-webkit-scrollbar{width:6px;background-color:", ";}&::-webkit-scrollbar-thumb{background-color:", ";}> ul > li{position:relative;height:61px;border-bottom:1px solid ", ";&.first-fake{border-top:1px solid ", ";}}"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light), function (props) {
  return props.toDoWidth;
}, function (props) {
  return (0, _polished.lighten)(0.5, props.mainColor);
}, function (props) {
  return (0, _polished.lighten)(0.5, props.mainColor);
}, function (props) {
  return props.mainColor;
}, (0, _polished.lighten)(0.2, _globalStyles.colors.lightGrey), (0, _polished.lighten)(0.2, _globalStyles.colors.lightGrey));

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists;
  return {
    lists: lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleEditListName: function handleEditListName(listId, newName) {
      dispatch((0, _editListName2.default)(listId, newName));
    },
    handleDeleteList: function handleDeleteList(listId, nextListId) {
      dispatch((0, _deleteList2.default)(listId, nextListId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ToDos);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/editListName":"redux\\actionCreators\\editListName.js","../redux/actionCreators/deleteList":"redux\\actionCreators\\deleteList.js","./basics/Sort":"components\\basics\\Sort.js","./basics/Button":"components\\basics\\Button.js","./basics/DivThanInput":"components\\basics\\DivThanInput.js","./SingleToDo":"components\\SingleToDo.js","./SingleToDoDetails":"components\\SingleToDoDetails.js","./AddItem":"components\\AddItem.js"}],"redux\\actionCreators\\addList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addList = undefined;
var _this = undefined;

var _firebase = require("../../config/firebase");

var _helpers = require("../../assets/helpers");

var _globalStyles = require("../../assets/globalStyles");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var addList = exports.addList = function addList(newList, newColor, userId) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var listId, updates, newListObject;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              listId = (0, _helpers.randomId)();
              updates = {};
              newListObject = {
                name: newList,
                id: listId,
                color: _globalStyles.listColors[newColor],
                creation_date: (0, _helpers.currTime)(),
                owner: userId || "",
                items: { ignoreMe: { ignoreMe: true } }
              };

              updates["lists/" + listId] = newListObject;

              _firebase.databaseRef.update(updates);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
},{"../../config/firebase":"config\\firebase.js","../../assets/helpers":"assets\\helpers.js","../../assets/globalStyles":"assets\\globalStyles.js"}],"redux\\actionCreators\\changeListColor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeListColor;
function changeListColor(listId, newColor) {
  return {
    type: "CHANGE_LIST_COLOR",
    listId: listId,
    newColor: newColor
  };
}
},{}],"assets\\icons\\paint-board-and-brush.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M41.493 281.6l45.686-79.951c4.726-8.271 15.36-11.028 23.631-6.302l337.132 196.529c8.271 4.726 11.028 15.36 6.302 23.631l-45.686 79.951c-4.726 8.271-15.36 11.028-23.631 6.302L47.794 305.231c-8.271-4.726-11.027-15.36-6.301-23.631z",
  fill: "#bf392b"
});

var _ref2 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M87.573 203.225l-.788-.788-9.058 16.148 258.757 230.794L87.573 203.225z",
  fill: "#ac3327"
});

var _ref3 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M408.557 495.458l45.686-79.951c4.726-8.271 1.969-18.905-6.302-23.631L341.21 329.649l-66.56 107.914 110.277 64.197c8.27 4.726 18.904 1.969 23.63-6.302z",
  fill: "#d6d6d6"
});

var _ref4 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M293.554 406.843l-1.969 2.757 44.505 39.778-42.536-42.535z",
  fill: "#cacaca"
});

var _ref5 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M87.573 179.2l64.591-64.197c6.695-6.695 17.723-6.695 24.418 0l274.905 272.148c6.695 6.695 6.695 17.329 0 24.025l-64.591 64.197c-6.695 6.695-17.723 6.695-24.418 0L87.573 203.225c-6.696-6.696-6.696-17.33 0-24.025z",
  fill: "#e2574c"
});

var _ref6 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M147.831 119.335l-14.966 14.572 173.292 259.938-158.326-274.51z",
  fill: "#cb4e44"
});

var _ref7 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M451.486 411.175c6.695-6.695 6.695-17.329 0-24.025l-93.342-92.16-89.797 87.04 94.129 93.342c6.695 6.695 17.723 6.695 24.418 0 .002 0 64.592-64.197 64.592-64.197z",
  fill: "#e0e0e0"
});

var _ref8 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M154.133 95.705l79.951-46.08c8.271-4.726 18.905-1.969 23.631 6.302L453.85 396.209c4.726 8.271 1.969 18.905-6.302 23.631l-79.951 46.08c-8.271 4.726-18.905 1.969-23.631-6.302L147.831 119.335c-4.726-8.27-1.969-18.904 6.302-23.63z",
  fill: "#d07c40"
});

var _ref9 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M288.04 362.732l-1.575 1.575 19.692 29.538-18.117-31.113z",
  fill: "#d1d1d1"
});

var _ref10 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M367.991 466.314l79.951-46.08c8.271-4.726 11.028-15.36 6.302-23.631l-68.529-118.942-108.308 66.954 66.56 115.397c5.12 8.271 15.753 11.028 24.024 6.302z",
  fill: "#ebebeb"
});

var _ref11 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M240.779 56.714a19.192 19.192 0 0 1 0-9.452c-2.363.394-4.332 1.182-6.695 2.363l-16.148 9.452L329 382.031 240.779 56.714zm126.424 382.818h.788v-.394l-.788.394z",
  fill: "#bb6f39"
});

var _ref12 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M367.203 439.532h.788v-.394l-.788.394zm-54.35-116.972l-3.545 2.363L329 382.031l-16.147-59.471z",
  fill: "#dbdbdb"
});

var _ref13 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M252.594 35.84l89.009-23.631c9.058-2.363 18.511 2.757 21.268 11.815L464.09 395.815c2.363 9.058-3.151 18.511-12.209 20.874l-89.009 23.631c-9.058 2.363-18.511-2.757-21.268-11.815L240.779 56.714c-2.757-9.059 2.757-18.511 11.815-20.874z",
  fill: "#f4b459"
});

var _ref14 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M362.871 0h81.526c11.422 0 20.48 9.058 20.48 20.48v384.394c0 11.422-9.058 20.48-20.48 20.48h-81.526c-11.422 0-20.48-9.058-20.48-20.48V20.48c0-11.422 9.059-20.48 20.48-20.48z",
  fill: "#efc75e"
});

var _ref15 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M308.52 306.806l33.083 121.698c2.363 9.058 11.815 14.572 21.268 11.815l89.009-23.631c9.059-2.363 14.572-11.815 12.209-20.874l-33.083-120.123-122.486 31.115z",
  fill: "#e6e6e6"
});

var _ref16 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M342.391 20.48c0-3.151.788-5.908 1.969-8.271-.788 0-1.969 0-2.757.394l-20.874 5.514 21.662 313.895V20.48z",
  fill: "#dba250"
});

var _ref17 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M342.391 275.298v129.575c0 11.422 9.058 20.48 20.48 20.48h81.526c11.422 0 20.48-9.058 20.48-20.48V275.298H342.391z",
  fill: "#efefef"
});

var _ref18 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M342.391 298.142l-2.363.788 2.363 33.083v-33.871z",
  fill: "#ddd"
});

var _ref19 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M362.083 295.385v19.692h66.954v-19.692h-66.954zm0 102.4h27.569V385.97h-27.569v11.815zm0-27.57h27.569V358.4h-27.569v11.815zm0-27.569h27.569v-11.815h-27.569v11.815zm68.924 35.446c5.514 0 9.846 4.332 9.846 9.846s-4.332 9.846-9.846 9.846-9.846-4.332-9.846-9.846c-.001-5.513 4.332-9.846 9.846-9.846z",
  fill: "#bfbfbf"
});

var SvgPaintBoardAndBrush = function SvgPaintBoardAndBrush(props) {
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 504.065 504.065"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19);
};

exports.default = SvgPaintBoardAndBrush;
},{"react":"..\\node_modules\\react\\index.js"}],"components\\basics\\ColorSelector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../../assets/globalStyles");

var _paintBoardAndBrush = require("../../assets/icons/paint-board-and-brush.svg");

var _paintBoardAndBrush2 = _interopRequireDefault(_paintBoardAndBrush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/label-has-associated-control */


var ColorSelector = function (_React$PureComponent) {
  _inherits(ColorSelector, _React$PureComponent);

  function ColorSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorSelector.__proto__ || Object.getPrototypeOf(ColorSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showColorSelector: false
    }, _this.handleColorChange = function (listId, listColor) {
      _this.props.handleColorChange(listId, listColor);
      _this.setState({
        showColorSelector: !_this.state.showColorSelector
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledImg, {
          alt: "change color",
          role: "button",
          onKeyPress: function onKeyPress() {
            return _this2.setState({
              showColorSelector: !_this2.state.showColorSelector
            });
          },
          onClick: function onClick() {
            return _this2.setState({
              showColorSelector: !_this2.state.showColorSelector
            });
          },
          tabIndex: "0"
        }),
        this.state.showColorSelector && _react2.default.createElement(
          StyledColorList,
          null,
          Object.keys(_globalStyles.listColors).map(function (listColor, i) {
            return _react2.default.createElement(StyledLabelColor, {
              key: i,
              style: { backgroundColor: _globalStyles.listColors[listColor] },
              onClick: function onClick() {
                return _this2.handleColorChange(_this2.props.list.id, listColor);
              }
            });
          })
        )
      );
    }
  }]);

  return ColorSelector;
}(_react2.default.PureComponent);

// styled components


var StyledImg = (0, _styledComponents2.default)(_paintBoardAndBrush2.default).withConfig({
  displayName: "ColorSelector__StyledImg",
  componentId: "sc-7t7tp5-0"
})(["cursor:pointer;width:20px;display:inline-block;margin-bottom:-6px;margin-left:10px;margin-right:10px;"]);

var StyledColorList = (0, _styledComponents2.default)("ul").withConfig({
  displayName: "ColorSelector__StyledColorList",
  componentId: "sc-7t7tp5-1"
})(["position:absolute;bottom:20px;z-index:9999;left:0;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";padding:10px;width:100%;"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light));

var StyledLabelColor = (0, _styledComponents2.default)("li").withConfig({
  displayName: "ColorSelector__StyledLabelColor",
  componentId: "sc-7t7tp5-2"
})(["cursor:pointer;height:30px;width:30px;display:inline-block;&:not(:first-child){margin-left:2%;}"]);

exports.default = ColorSelector;
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../../assets/globalStyles":"assets\\globalStyles.js","../../assets/icons/paint-board-and-brush.svg":"assets\\icons\\paint-board-and-brush.svg"}],"components\\AddList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require("react-redux");

var _globalStyles = require("../assets/globalStyles");

var _Button = require("./basics/Button");

var _ColorSelector = require("./basics/ColorSelector");

var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddList = function (_React$PureComponent) {
  _inherits(AddList, _React$PureComponent);

  function AddList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddList.__proto__ || Object.getPrototypeOf(AddList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: "",
      inputColor: "lightGrey"
    }, _this.handleChange = function (e) {
      var inputNow = e.target.value;
      _this.setState({ inputValue: inputNow });
    }, _this.clickBehavior = function (e) {
      e.preventDefault();
      if (_this.state.inputValue != "" && _this.state.inputValue.length > 3) {
        _this.props.clickBehavior(_this.state.inputValue, _this.state.inputColor, _this.props.user.uid);
        _this.setState({ inputValue: "", inputColor: "lightGrey" });
      }
    }, _this.handleColorAdd = function (list, color) {
      _this.setState({ inputColor: color });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          StyledForm,
          {
            mainColor: _globalStyles.listColors[this.state.inputColor],
            buttonHeight: this.state.inputValue === "" ? "7px" : "40px"
          },
          _react2.default.createElement(
            "div",
            { className: "input-holder" },
            _react2.default.createElement("input", {
              autoFocus: this.props.autoFocus ? true : false,
              type: "text",
              placeholder: "Create new list",
              value: this.state.inputValue,
              onChange: function onChange(e) {
                return _this2.handleChange(e);
              }
            }),
            _react2.default.createElement(_ColorSelector2.default, { handleColorChange: this.handleColorAdd })
          ),
          _react2.default.createElement(_Button.Button, {
            style: { backgroundColor: "blue" },
            clickBehavior: function clickBehavior(e) {
              return _this2.clickBehavior(e);
            },
            text: this.props.text
          })
        )
      );
    }
  }]);

  return AddList;
}(_react2.default.PureComponent);

// styled components


var StyledForm = (0, _styledComponents2.default)("form").withConfig({
  displayName: "AddList__StyledForm",
  componentId: "sc-1ticsgq-0"
})(["display:inline-block;position:relative;vertical-align:top;margin-left:2%;.input-holder{border-radius:3px 3px 0 0;padding:12px 0 10px;max-width:160px;input{border:0;font-size:1.2em;width:calc(100% - 40px);display:inline-block;padding:0 0 0 10px;}}img{background:white;margin:0;padding:15px 10px;margin-bottom:-20px;border-radius:0 3px 0 0;width:40px;border:1px solid ", ";border-left:0;}button{background:", ";display:block;width:100%;border-radius:0;font-size:2em;padding:0 0 7px;line-height:1em;margin:0;height:", ";}"], function (props) {
  return props.mainColor;
}, function (props) {
  return props.mainColor;
}, function (props) {
  return props.buttonHeight;
});

var mapStateToProps = function mapStateToProps(_ref2) {
  var user = _ref2.user;
  return {
    user: user
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(AddList);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","../assets/globalStyles":"assets\\globalStyles.js","./basics/Button":"components\\basics\\Button.js","./basics/ColorSelector":"components\\basics\\ColorSelector.js"}],"components\\ListsManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _globalStyles = require("../assets/globalStyles");

var _addList = require("../redux/actionCreators/addList");

var _changeListColor = require("../redux/actionCreators/changeListColor");

var _changeListColor2 = _interopRequireDefault(_changeListColor);

var _selectList = require("../redux/actionCreators/selectList");

var _selectList2 = _interopRequireDefault(_selectList);

var _ColorSelector = require("./basics/ColorSelector");

var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

var _AddList = require("./AddList");

var _AddList2 = _interopRequireDefault(_AddList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListsManager = function (_React$PureComponent) {
  _inherits(ListsManager, _React$PureComponent);

  function ListsManager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListsManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListsManager.__proto__ || Object.getPrototypeOf(ListsManager)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectList = function (listId) {
      _this.props.handleSelectList(listId);
      setTimeout(function () {
        this.props.completeListLayout();
      }.bind(_this), 0);
    }, _this.sortByCreationDate = function () {
      var lists = _this.props.lists;

      var listsArray = [];
      Object.keys(lists).map(function (list) {
        return listsArray.push(lists[list]);
      });

      listsArray.sort(function (a, b) {
        return new Date(a.creation_date) - new Date(b.creation_date);
      });

      return listsArray;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListsManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Lists:"
        ),
        _react2.default.createElement(
          StyledUl,
          null,
          this.sortByCreationDate().map(function (list, i) {
            return _react2.default.createElement(
              StyledList,
              { key: i },
              _react2.default.createElement(
                StyledButton,
                {
                  className: "color-wrapper",
                  mainColor: list.color,
                  onClick: function onClick() {
                    return _this2.handleSelectList(list.id);
                  }
                },
                _react2.default.createElement(
                  "div",
                  { className: "info-wrapper" },
                  _react2.default.createElement(
                    "span",
                    null,
                    list.name
                  ),
                  _react2.default.createElement(_ColorSelector2.default, {
                    list: list,
                    handleColorChange: _this2.props.handleColorChange
                  })
                )
              )
            );
          }),
          _react2.default.createElement(_AddList2.default, {
            autoFocus: false,
            clickBehavior: this.props.handleAddList,
            text: "+"
          })
        )
      );
    }
  }]);

  return ListsManager;
}(_react2.default.PureComponent);

// styled components


var StyledUl = (0, _styledComponents2.default)("ul").withConfig({
  displayName: "ListsManager__StyledUl",
  componentId: "sc-16841p2-0"
})(["overflow-x:auto;max-width:100%;white-space:nowrap;height:100px;padding-top:15px;&::-webkit-scrollbar-track{background-color:", ";}&::-webkit-scrollbar{height:6px;background-color:", ";}&::-webkit-scrollbar-thumb{background-color:", ";}"], (0, _polished.lighten)(0.5, _globalStyles.colors.primary), (0, _polished.lighten)(0.5, _globalStyles.colors.primary), _globalStyles.colors.primary);

var StyledList = (0, _styledComponents2.default)("li").withConfig({
  displayName: "ListsManager__StyledList",
  componentId: "sc-16841p2-1"
})(["margin:0 2%;display:inline-block;text-align:center;&:first-child{margin-left:0;}span{text-transform:capitalize;font-size:1.2em;}"]);

var StyledButton = (0, _styledComponents2.default)("button").withConfig({
  displayName: "ListsManager__StyledButton",
  componentId: "sc-16841p2-2"
})(["background:white;border:0;width:100%;cursor:pointer;height:50px;margin-bottom:10px;border-bottom:6px solid ", ";transition:0.2s all ease;&:hover{border-bottom-width:10px;}"], function (props) {
  return props.mainColor;
});

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists;
  return {
    lists: lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleAddList: function handleAddList(newList, newColor, userId) {
      dispatch((0, _addList.addList)(newList, newColor, userId));
    },
    handleColorChange: function handleColorChange(listId, newColor) {
      dispatch((0, _changeListColor2.default)(listId, newColor));
    },

    handleSelectList: function handleSelectList(listId) {
      dispatch((0, _selectList2.default)(listId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ListsManager);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/addList":"redux\\actionCreators\\addList.js","../redux/actionCreators/changeListColor":"redux\\actionCreators\\changeListColor.js","../redux/actionCreators/selectList":"redux\\actionCreators\\selectList.js","./basics/ColorSelector":"components\\basics\\ColorSelector.js","./AddList":"components\\AddList.js"}],"components\\NoToDos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require("react-redux");

var _polished = require("polished");

var _globalStyles = require("../assets/globalStyles");

var _addList = require("../redux/actionCreators/addList");

var _Button = require("./basics/Button");

var _AddList = require("./AddList");

var _AddList2 = _interopRequireDefault(_AddList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoToDos = function (_React$PureComponent) {
  _inherits(NoToDos, _React$PureComponent);

  function NoToDos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NoToDos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoToDos.__proto__ || Object.getPrototypeOf(NoToDos)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showAddList: false
    }, _this.handleAddList = function (newList, newColor, userId) {
      _this.props.handleAddList(newList, newColor, userId);
      _this.setState({ showAddList: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NoToDos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        StyledNoToDos,
        null,
        this.state.showAddList ? _react2.default.createElement(_AddList2.default, {
          autoFocus: true,
          clickBehavior: this.handleAddList,
          text: "+"
        }) : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            "h2",
            null,
            "Create your first list"
          ),
          _react2.default.createElement(_Button.Button, {
            className: "footer-item",
            icon: "add",
            clickBehavior: function clickBehavior() {
              return _this2.setState({ showAddList: true });
            },
            text: "Create list"
          })
        )
      );
    }
  }]);

  return NoToDos;
}(_react2.default.PureComponent);

// styled components


var StyledNoToDos = (0, _styledComponents2.default)("div").withConfig({
  displayName: "NoToDos__StyledNoToDos",
  componentId: "sc-1buctv0-0"
})(["padding:0 20px;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";height:55vh;overflow-x:auto;width:100%;text-align:center;h2{margin-top:15vh;}button{padding:0;margin:1vh auto;svg{width:80px;height:80px;}}form{margin-top:18vh;}"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleAddList: function handleAddList(newList, newColor, userId) {
      dispatch((0, _addList.addList)(newList, newColor, userId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(NoToDos);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/addList":"redux\\actionCreators\\addList.js","./basics/Button":"components\\basics\\Button.js","./AddList":"components\\AddList.js"}],"components\\ToDosPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require("react-redux");

var _fetchToDos = require("../redux/actionCreators/fetchToDos");

var _selectList = require("../redux/actionCreators/selectList");

var _selectList2 = _interopRequireDefault(_selectList);

var _requireAuth = require("../hocs/requireAuth");

var _ToDos = require("./ToDos");

var _ToDos2 = _interopRequireDefault(_ToDos);

var _ListsManager = require("./ListsManager");

var _ListsManager2 = _interopRequireDefault(_ListsManager);

var _NoToDos = require("./NoToDos");

var _NoToDos2 = _interopRequireDefault(_NoToDos);

var _Loading = require("./basics/Loading");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDosPage = function (_React$PureComponent) {
  _inherits(ToDosPage, _React$PureComponent);

  function ToDosPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToDosPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToDosPage.__proto__ || Object.getPrototypeOf(ToDosPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      completeListLayoutNum: 0,
      showDetails: false,
      sortBy: "most-important",
      filterChecked: false
    }, _this.sortBy = function (itemsArray) {
      if (_this.state.sortBy === "most-important") {
        itemsArray.sort(function (a, b) {
          return b.priority - a.priority;
        });
      } else if (_this.state.sortBy === "alphabetically-a-z") {
        itemsArray.sort(function (a, b) {
          var nameA = a.task.toLowerCase(),
              nameB = b.task.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        });
      } else if (_this.state.sortBy === "alphabetically-z-a") {
        itemsArray.sort(function (a, b) {
          var nameA = a.task.toLowerCase(),
              nameB = b.task.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return 1;
          if (nameA > nameB) return -1;
          return 0; //default return value (no sorting)
        });
      } else if (_this.state.sortBy === "newest") {
        itemsArray.sort(function (a, b) {
          return new Date(b.start_date) - new Date(a.start_date);
        });
      } else if (_this.state.sortBy === "oldest") {
        itemsArray.sort(function (a, b) {
          return new Date(a.start_date) - new Date(b.start_date);
        });
      }

      return itemsArray;
    }, _this.getCurrentList = function () {
      var lists = _extends({}, _this.props.lists);
      var currList = Object.keys(lists).filter(function (list) {
        return lists[list].id === _this.props.activeList;
      });
      var items = lists[currList].items;
      var itemsArray = [];
      Object.keys(items).filter(function (item) {
        return !items[item].hasOwnProperty('ignoreMe');
      }).map(function (itemKey) {
        return itemsArray.push(items[itemKey]);
      });

      _this.sortBy(itemsArray);

      lists[currList].items = itemsArray;

      return lists[currList];
    }, _this.completeListLayout = function () {
      var currList = _this.getCurrentList();
      var containerHeight = document.querySelector("#to-dos").clientHeight;
      var itemHeight = currList.items.length > 0 ? document.querySelector("#single-to-do").clientHeight : 61;
      var maxItems = Math.floor(containerHeight / itemHeight) - 1;
      if (currList.items.length < maxItems) {
        var completeListLayoutNum = maxItems - currList.items.length;
        _this.setState({ completeListLayoutNum: completeListLayoutNum }, function () {});
      } else {
        _this.setState({ completeListLayoutNum: 0 }, function () {});
      }
    }, _this.getNextListIdToShowAfterDeleteCurrentList = function () {
      var lists = _extends({}, _this.props.lists);
      var currList = Object.keys(lists).filter(function (list) {
        return lists[list].id === _this.props.activeList;
      })[0];
      var listsLength = Object.keys(_this.props.lists).length - 1;
      var nextListIndex = Object.keys(lists).indexOf(currList) + 1;
      var nextList = nextListIndex > listsLength ? lists[Object.keys(lists)[0]].id : lists[Object.keys(lists)[nextListIndex]].id;

      return nextList;
    }, _this.showDetailsFunc = function (showDetails) {
      _this.setState({ showDetails: showDetails });
    }, _this.handleSortByChange = function (sortBy) {
      _this.setState({ sortBy: sortBy }, function () {});
    }, _this.filterCheckedFunc = function () {
      _this.setState({ filterChecked: !_this.state.filterChecked }), function () {
        _this.getCurrentList();
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToDosPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.handleFetchToDos(this.props.user.uid);
      if (this.props.lists != "loading" && Object.keys(this.props.lists).length > 0) {
        this.completeListLayout();
        this.getNextListIdToShowAfterDeleteCurrentList();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ToDosWithAuth = (0, _requireAuth.requireAuth)(_ToDos2.default);

      return _react2.default.createElement(
        StyledContainer,
        {
          className: this.state.showDetails ? "expanded" : "compressed"
        },
        this.props.lists === "loading" ? _react2.default.createElement(_Loading2.default, null) : Object.keys(this.props.lists).length > 0 ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(ToDosWithAuth, {
            currentList: this.getCurrentList(),
            nextListId: this.getNextListIdToShowAfterDeleteCurrentList(),
            filterCheckedFunc: this.filterCheckedFunc,
            filterChecked: this.state.filterChecked,
            completeListLayoutNum: this.state.completeListLayoutNum,
            completeListLayout: this.completeListLayout,
            showDetails: this.state.showDetails,
            showDetailsFunc: this.showDetailsFunc,
            sortBy: this.state.sortBy,
            handleSortByChange: this.handleSortByChange
          }),
          _react2.default.createElement(_ListsManager2.default, { completeListLayout: this.completeListLayout })
        ) : _react2.default.createElement(_NoToDos2.default, null)
      );
    }
  }]);

  return ToDosPage;
}(_react2.default.PureComponent);

// styled components


var expandsToDoOuter = (0, _styledComponents.keyframes)(["0%{width:60%;}100%{width:80%;}"]);

var compressToDoOuter = (0, _styledComponents.keyframes)(["0%{width:80%;}100%{width:60%;}"]);

var StyledContainer = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDosPage__StyledContainer",
  componentId: "sc-17ad0et-0"
})(["width:60%;margin:30px auto;position:relative;transition:all 0.25s ease;&.expanded{animation:", " 0.25s ease forwards;}&.compressed{animation:", " 0.25s ease forwards;}h2{text-transform:capitalize;font-size:2em;margin-bottom:20px;}"], expandsToDoOuter, compressToDoOuter);

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists,
      activeList = _ref2.activeList,
      user = _ref2.user;
  return {
    lists: lists,
    activeList: activeList,
    user: user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSelectList: function handleSelectList(listId) {
      dispatch((0, _selectList2.default)(listId));
    },
    handleFetchToDos: function handleFetchToDos(userId) {
      dispatch((0, _fetchToDos.fetchToDos)(userId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ToDosPage);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","../redux/actionCreators/fetchToDos":"redux\\actionCreators\\fetchToDos.js","../redux/actionCreators/selectList":"redux\\actionCreators\\selectList.js","../hocs/requireAuth":"hocs\\requireAuth.js","./ToDos":"components\\ToDos.js","./ListsManager":"components\\ListsManager.js","./NoToDos":"components\\NoToDos.js","./basics/Loading":"components\\basics\\Loading.js"}],"..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53299' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","components\\ToDosPage.js"], null)
//# sourceMappingURL=/ToDosPage.cd233d32.map