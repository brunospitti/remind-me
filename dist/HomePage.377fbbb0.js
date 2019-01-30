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
})({"redux\\actionCreators\\userLogin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = undefined;

var _firebase = require("../../config/firebase");

var userLogin = exports.userLogin = function userLogin() {
  return function (dispatch) {
    _firebase.authRef.signInWithPopup(_firebase.provider).then(function (result) {}).catch(function (error) {});
  };
};
},{"../../config/firebase":"config\\firebase.js"}],"components\\SignIn.jsx":[function(require,module,exports) {
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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _globalStyles = require("../assets/globalStyles");

var _Button = require("./basics/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$PureComponent) {
  _inherits(SignIn, _React$PureComponent);

  function SignIn() {
    _classCallCheck(this, SignIn);

    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).apply(this, arguments));
  }

  _createClass(SignIn, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        StyledContainer,
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Sign In to start"
        ),
        _react2.default.createElement(StyledButton, {
          clickBehavior: this.props.userLogin,
          text: "Sign in with Google"
        })
      );
    }
  }]);

  return SignIn;
}(_react2.default.PureComponent);

// propTypes


exports.default = SignIn;
SignIn.propTypes = {
  userLogin: _propTypes2.default.func.isRequired

  // styles with emotion
};var StyledContainer = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SignIn__StyledContainer",
  componentId: "dg22th-0"
})(["width:60%;height:55vh;margin:30px auto;position:relative;padding:15vh 20px 0;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";text-align:center;@media (", "){width:90%;padding:15vh 10px 0;}h2{text-transform:capitalize;font-size:2em;margin-bottom:20px;display:inline-block;vertical-align:bottom;}"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light), _globalStyles.mobileBreakpoint);

var StyledButton = (0, _styledComponents2.default)(_Button.Button).withConfig({
  displayName: "SignIn__StyledButton",
  componentId: "dg22th-1"
})(["display:block;width:300px;padding:20px 30px 20px 80px;margin-top:3vh;font-size:1.3em;background:#4081ec;border:1px solid #4081ec;position:relative;transition:all 0.25s ease;@media (", "){width:100%;padding-right:20px;}&:before{content:url(\"data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z' fill='#fbbb00'/><path d='M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z' fill='#518ef8'/><path d='M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z' fill='#28b446'/><path d='M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z' fill='#f14336'/></svg>\");position:absolute;left:0;top:0;width:35px;height:35px;padding:15px;background:white;}&:hover{background:", ";border:1px solid ", ";}"], _globalStyles.mobileBreakpoint, (0, _polished.lighten)(0.08, "#4081ec"), (0, _polished.lighten)(0.08, "#4081ec"));
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","prop-types":"..\\node_modules\\prop-types\\index.js","../assets/globalStyles":"assets\\globalStyles.js","./basics/Button":"components\\basics\\Button.jsx"}],"pages\\HomePage.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactLoadable = require("react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _userLogin = require("../redux/actionCreators/userLogin");

var _Loading = require("../components/basics/Loading");

var _Loading2 = _interopRequireDefault(_Loading);

var _SignIn = require("../components/SignIn");

var _SignIn2 = _interopRequireDefault(_SignIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loading = function loading() {
  return _react2.default.createElement(_Loading2.default, null);
};

var LoadableToDosPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return require("_bundle_loader")(require.resolve("../components/ToDosPage"));
  },
  loading: loading
});

var HomePage = function (_React$PureComponent) {
  _inherits(HomePage, _React$PureComponent);

  function HomePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      signIn: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomePage, [{
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps) {
      if (nextProps.user) {
        this.setState({ signIn: false });
      } else {
        this.setState({ signIn: true });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.props.user === "loading" ? _react2.default.createElement(_Loading2.default, null) : this.state.signIn ? _react2.default.createElement(_SignIn2.default, { userLogin: this.props.userLogin }) : _react2.default.createElement(LoadableToDosPage, null)
      );
    }
  }]);

  return HomePage;
}(_react2.default.PureComponent);

// propTypes


HomePage.contextTypes = {
  router: _propTypes2.default.object
};
HomePage.propTypes = {
  user: _propTypes2.default.oneOfType([_propTypes2.default.object.isRequired, _propTypes2.default.string]),
  userLogin: _propTypes2.default.func.isRequired

  // styled components

};function mapStateToProps(_ref2) {
  var user = _ref2.user;

  return { user: user };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { userLogin: _userLogin.userLogin })(HomePage);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","react-loadable":"..\\node_modules\\react-loadable\\lib\\index.js","prop-types":"..\\node_modules\\prop-types\\index.js","../redux/actionCreators/userLogin":"redux\\actionCreators\\userLogin.js","../components/basics/Loading":"components\\basics\\Loading.jsx","../components/SignIn":"components\\SignIn.jsx","_bundle_loader":"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-loader.js","../components/ToDosPage":[["ToDosPage.6586c092.js","components\\ToDosPage.jsx"],"ToDosPage.6586c092.map",["notification.d4c4adb8.mp3","assets\\audio\\notification.mp3"],"components\\ToDosPage.jsx"]}],"..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58985' + '/');
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
},{}],"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;

var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js"}],"..\\node_modules\\parcel-bundler\\src\\builtins\\loaders\\browser\\js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("..\\node_modules\\parcel-bundler\\src\\builtins\\bundle-loader.js");b.register("js",require("..\\node_modules\\parcel-bundler\\src\\builtins\\loaders\\browser\\js-loader.js"));
},{}]},{},["..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js",0,"pages\\HomePage.jsx"], null)
//# sourceMappingURL=/HomePage.377fbbb0.map