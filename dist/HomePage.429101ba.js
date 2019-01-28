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
})({"redux\\actionCreators\\selectList.js":[function(require,module,exports) {
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
},{}],"..\\node_modules\\@babel\\runtime\\helpers\\esm\\taggedTemplateLiteralLoose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _taggedTemplateLiteralLoose;
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}
},{}],"..\\node_modules\\polished\\dist\\polished.es.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordWrap = exports.triangle = exports.transparentize = exports.transitions = exports.toColorString = exports.tint = exports.timingFunctions = exports.textInputs = exports.stripUnit = exports.size = exports.shade = exports.setSaturation = exports.setLightness = exports.setHue = exports.selection = exports.saturate = exports.rgba = exports.rgb = exports.retinaImage = exports.rem = exports.readableColor = exports.radialGradient = exports.position = exports.placeholder = exports.parseToRgb = exports.parseToHsl = exports.padding = exports.opacify = exports.normalize = exports.modularScale = exports.mix = exports.margin = exports.lighten = exports.hsla = exports.hsl = exports.hiDPI = exports.hideVisually = exports.hideText = exports.invert = exports.grayscale = exports.getValueAndUnit = exports.getLuminance = exports.fontFace = exports.fluidRange = exports.em = exports.ellipsis = exports.directionalProperty = exports.desaturate = exports.darken = exports.cover = exports.complement = exports.clearFix = exports.buttons = exports.borderWidth = exports.borderStyle = exports.borderRadius = exports.borderColor = exports.border = exports.between = exports.backgrounds = exports.backgroundImages = exports.animation = exports.adjustHue = undefined;

var _extends4 = require('@babel/runtime/helpers/esm/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _taggedTemplateLiteralLoose2 = require('@babel/runtime/helpers/esm/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

/**
 * Returns a given CSS value minus its unit (or the original value if an invalid string is passed).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the first argument to " + to + "(), got \"" + pxval + "\" instead.");
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the second argument to " + to + "(), got \"" + base + "\" instead.");
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error("Passed invalid pixel value (\"" + pxval + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    if (typeof newBase === 'string') {
      throw new Error("Passed invalid base value (\"" + base + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    return "" + newPxval / newBase + to;
  };
};

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em =
/*#__PURE__*/
pxtoFactory('em');

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0]
 *   '--unit': getValueAndUnit('100px')[1]
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]}
 *   --unit: ${getValueAndUnit('100px')[1]}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 *   '--unit': 'px'
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */

function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 'perfectFourth';
  }

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new Error("Invalid value passed as base to modularScale, expected number or em string but got \"" + base + "\"");
  }

  return realBase * Math.pow(realRatio, steps) + "em";
}

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem =
/*#__PURE__*/
pxtoFactory('rem');

/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${fontSize: between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${fontSize: between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new Error('minScreen and maxScreen must be provided as stringified numbers with the same units.');
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || !fromSizeUnit || !toSizeUnit || fromSizeUnit !== toSizeUnit) {
    throw new Error('fromSize and toSize must be provided as stringified numbers with the same units.');
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + fromSizeUnit + " + " + (100 * slope).toFixed(2) + "vw)";
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function ellipsis(width) {
  if (width === void 0) {
    width = '100%';
  }

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) {
    throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.');
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = cssProp, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _extends2, _extends3;

      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var obj = _ref;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new Error('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.');
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = (0, _extends5.default)({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = (0, _extends5.default)({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return (0, _extends5.default)({}, fallbacks, mediaQueries);
  } else {
    var _ref2, _ref3, _ref4;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new Error('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.');
    }

    return _ref4 = {}, _ref4[cssProp.prop] = cssProp.fromSize, _ref4["@media (min-width: " + minScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref2), _ref4["@media (min-width: " + maxScreen + ")"] = (_ref3 = {}, _ref3[cssProp.prop] = cssProp.toSize, _ref3), _ref4;
  }
}

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")";
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */

function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings;
  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');

  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }

  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings // Removes undefined fields for cleaner css object.

    } };
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */
function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      'background-color': 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @deprecated - placeholder has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */
function placeholder(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  return _ref = {}, _ref[parent + "::-webkit-input-placeholder"] = (0, _extends5.default)({}, styles), _ref[parent + ":-moz-placeholder"] = (0, _extends5.default)({}, styles), _ref[parent + "::-moz-placeholder"] = (0, _extends5.default)({}, styles), _ref[parent + ":-ms-input-placeholder"] = (0, _extends5.default)({}, styles), _ref;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose3.default)(["radial-gradient(", "", "", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i]; // Adds leading coma if properties preceed color-stops

    if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ", " + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += "" + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // Only adds substitution if it is defined
    } else if (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) + " ";
    }
  }

  return template.trim();
}
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */

function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }

  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject(), position, shape, extent, colorStops.join(', '))
  };
}

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = (0, _extends5.default)({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}

/**
 * CSS to style the selection pseudo-element.
 *
 * @deprecated - selection has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */
function selection(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '';
  }

  return _ref = {}, _ref[parent + "::-moz-selection"] = (0, _extends5.default)({}, styles), _ref[parent + "::selection"] = (0, _extends5.default)({}, styles), _ref;
}

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

};

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return "0 " + width[0] / 2 + width[1] + " " + height[0] + height[1] + " " + width[0] / 2 + width[1];

    case 'left':
      return "" + height[0] / 2 + height[1] + " " + width[0] + width[1] + " " + height[0] / 2 + height[1] + " 0";

    case 'bottom':
      return "" + height[0] + height[1] + " " + width[0] / 2 + width[1] + " 0 " + width[0] / 2 + width[1];

    case 'right':
      return "" + height[0] / 2 + height[1] + " 0 " + height[0] / 2 + height[1] + " " + width[0] + width[1];

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
}; // needed for border-color


var reverseDirection = ['bottom', 'left', 'top', 'right'];
var NUMBER_AND_FLOAT = /(\d*\.?\d*)/;
/**
 * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent',
 *  'borderLeftColor': 'red !important',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = [parseFloat(width), String(width).replace(NUMBER_AND_FLOAT, '') || 'px'];
  var heightAndUnit = [parseFloat(height), String(height).replace(NUMBER_AND_FLOAT, '') || 'px'];

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  var reverseDirectionIndex = reverseDirection.indexOf(pointingDirection);
  return (0, _extends5.default)({
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
    borderStyle: 'solid'
  }, borderColor.apply(void 0, Array.from({
    length: 4
  }).map(function (_, index) {
    return index === reverseDirectionIndex ? foregroundColor : backgroundColor;
  })));
}

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
}

var curriedAdjustHue =
/*#__PURE__*/
curry(adjustHue);

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}

var curriedDarken =
/*#__PURE__*/
curry(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}

var curriedDesaturate =
/*#__PURE__*/
curry(desaturate);

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function grayscale(color) {
  return toColorString((0, _extends5.default)({}, parseToHsl(color), {
    saturation: 0
  }));
}

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString((0, _extends5.default)({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}

var curriedLighten =
/*#__PURE__*/
curry(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = (0, _extends5.default)({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = (0, _extends5.default)({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
}

var curriedMix =
/*#__PURE__*/
curry(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = (0, _extends5.default)({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedOpacify =
/*#__PURE__*/
curry(opacify);

/**
 * Returns black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor =
/*#__PURE__*/
curry(readableColor);

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString((0, _extends5.default)({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}

var curriedSaturate =
/*#__PURE__*/
curry(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString((0, _extends5.default)({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}

var curriedSetHue =
/*#__PURE__*/
curry(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString((0, _extends5.default)({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}

var curriedSetLightness =
/*#__PURE__*/
curry(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString((0, _extends5.default)({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}

var curriedSetSaturation =
/*#__PURE__*/
curry(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
}

var curriedShade =
/*#__PURE__*/
curry(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
}

var curriedTint =
/*#__PURE__*/
curry(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = (0, _extends5.default)({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedTransparentize =
/*#__PURE__*/
curry(transparentize);

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */

function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */

function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return (0, _extends5.default)({
      position: positionKeyword
    }, directionalProperty.apply(void 0, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value

    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */

function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same tranisition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */
function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new Error('Property must be a string value.');
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}

// Helpers

exports.adjustHue = curriedAdjustHue;
exports.animation = animation;
exports.backgroundImages = backgroundImages;
exports.backgrounds = backgrounds;
exports.between = between;
exports.border = border;
exports.borderColor = borderColor;
exports.borderRadius = borderRadius;
exports.borderStyle = borderStyle;
exports.borderWidth = borderWidth;
exports.buttons = buttons;
exports.clearFix = clearFix;
exports.complement = complement;
exports.cover = cover;
exports.darken = curriedDarken;
exports.desaturate = curriedDesaturate;
exports.directionalProperty = directionalProperty;
exports.ellipsis = ellipsis;
exports.em = em;
exports.fluidRange = fluidRange;
exports.fontFace = fontFace;
exports.getLuminance = getLuminance;
exports.getValueAndUnit = getValueAndUnit;
exports.grayscale = grayscale;
exports.invert = invert;
exports.hideText = hideText;
exports.hideVisually = hideVisually;
exports.hiDPI = hiDPI;
exports.hsl = hsl;
exports.hsla = hsla;
exports.lighten = curriedLighten;
exports.margin = margin;
exports.mix = curriedMix;
exports.modularScale = modularScale;
exports.normalize = normalize;
exports.opacify = curriedOpacify;
exports.padding = padding;
exports.parseToHsl = parseToHsl;
exports.parseToRgb = parseToRgb;
exports.placeholder = placeholder;
exports.position = position;
exports.radialGradient = radialGradient;
exports.readableColor = curriedReadableColor;
exports.rem = rem;
exports.retinaImage = retinaImage;
exports.rgb = rgb;
exports.rgba = rgba;
exports.saturate = curriedSaturate;
exports.selection = selection;
exports.setHue = curriedSetHue;
exports.setLightness = curriedSetLightness;
exports.setSaturation = curriedSetSaturation;
exports.shade = curriedShade;
exports.size = size;
exports.stripUnit = stripUnit;
exports.textInputs = textInputs;
exports.timingFunctions = timingFunctions;
exports.tint = curriedTint;
exports.toColorString = toColorString;
exports.transitions = transitions;
exports.transparentize = curriedTransparentize;
exports.triangle = triangle;
exports.wordWrap = wordWrap;
},{"@babel/runtime/helpers/esm/extends":"..\\node_modules\\@babel\\runtime\\helpers\\esm\\extends.js","@babel/runtime/helpers/esm/taggedTemplateLiteralLoose":"..\\node_modules\\@babel\\runtime\\helpers\\esm\\taggedTemplateLiteralLoose.js"}],"redux\\actionCreators\\editListName.js":[function(require,module,exports) {
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
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../../assets/globalStyles":"assets\\globalStyles.js"}],"components\\basics\\SimpleInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleInput = function (_React$PureComponent) {
  _inherits(SimpleInput, _React$PureComponent);

  function SimpleInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleInput.__proto__ || Object.getPrototypeOf(SimpleInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: _this.props.initialValue
    }, _this.handleChange = function (e) {
      _this.setState({ inputValue: e.target.value });
    }, _this.handleBlur = function () {
      _this.props.getInputValue(_this.state.inputValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(StyledInput, {
        className: this.props.className,
        autoFocus: this.props.autoFocus ? true : false,
        maxLength: "35",
        type: "text",
        placeholder: this.props.inputPlaceholder,
        value: this.state.inputValue,
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        onBlur: function onBlur() {
          return _this2.handleBlur();
        }
      });
    }
  }]);

  return SimpleInput;
}(_react2.default.PureComponent);

// styled components


exports.default = SimpleInput;
var StyledInput = (0, _styledComponents2.default)("input").withConfig({
  displayName: "SimpleInput__StyledInput",
  componentId: "sc-1boumxs-0"
})(["border:0;border-bottom:1px solid;font-size:1em;margin-bottom:2vh;padding-bottom:5px;"]);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js"}],"assets\\icons\\delete.svg":[function(require,module,exports) {
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
  d: "M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
});

var _ref2 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0 0 78.796 427H268a49.233 49.233 0 0 0 35.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 0 0-11.539-28.031A39.288 39.288 0 0 0 217.797 0H129a39.288 39.288 0 0 0-28.063 11.469A39.289 39.289 0 0 0 89.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 0 1 5.676-13.895A19.26 19.26 0 0 1 129 20h88.797a19.26 19.26 0 0 1 13.926 5.605 19.244 19.244 0 0 1 5.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"
});

var _ref3 =
/*#__PURE__*/
_react2.default.createElement("path", {
  d: "M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
});

var SvgDelete = function SvgDelete(props) {
  return _react2.default.createElement("svg", _extends({
    height: "427pt",
    viewBox: "-40 0 427 427.001",
    width: "427pt"
  }, props), _ref, _ref2, _ref3);
};

exports.default = SvgDelete;
},{"react":"..\\node_modules\\react\\index.js"}],"assets\\icons\\priority.svg":[function(require,module,exports) {
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
  d: "M53.747 35.323L44.17 20l9.668-15.47A1 1 0 0 0 52.99 3h-45V1a1 1 0 1 0-2 0v58a1 1 0 1 0 2 0V37h45.02a1 1 0 0 0 .737-1.677z"
});

var SvgPriority = function SvgPriority(props) {
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 60 60"
  }, props), _ref);
};

exports.default = SvgPriority;
},{"react":"..\\node_modules\\react\\index.js"}],"assets\\icons\\collapse.svg":[function(require,module,exports) {
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
  d: "M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z"
});

var SvgCollapse = function SvgCollapse(props) {
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 129 129"
  }, props), _ref);
};

exports.default = SvgCollapse;
},{"react":"..\\node_modules\\react\\index.js"}],"assets\\icons\\add.svg":[function(require,module,exports) {
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
  d: "M156 256c0-11.047 8.953-20 20-20h60v-60c0-11.047 8.953-20 20-20s20 8.953 20 20v60h60c11.047 0 20 8.953 20 20s-8.953 20-20 20h-60v60c0 11.047-8.953 20-20 20s-20-8.953-20-20v-60h-60c-11.047 0-20-8.953-20-20zM512 20v472c0 11.047-8.953 20-20 20H20c-11.047 0-20-8.953-20-20V20C0 8.953 8.953 0 20 0h472c11.047 0 20 8.953 20 20zm-40 20H40v432h432zm0 0"
});

var SvgAdd = function SvgAdd(props) {
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

exports.default = SvgAdd;
},{"react":"..\\node_modules\\react\\index.js"}],"components\\basics\\Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require("../../assets/globalStyles");

var _delete = require("../../assets/icons/delete.svg");

var _delete2 = _interopRequireDefault(_delete);

var _priority = require("../../assets/icons/priority.svg");

var _priority2 = _interopRequireDefault(_priority);

var _collapse = require("../../assets/icons/collapse.svg");

var _collapse2 = _interopRequireDefault(_collapse);

var _add = require("../../assets/icons/add.svg");

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.getMainColor = function () {
      var mainColor = _globalStyles.colors.lightGrey;
      if (_this.props.primary) {
        mainColor = _globalStyles.colors.primary;
      } else if (_this.props.secondary) {
        mainColor = _globalStyles.colors.secondary;
      } else if (_this.props.danger) {
        mainColor = _globalStyles.colors.danger;
      }

      return mainColor;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      if (this.props.icon) {
        return _react2.default.createElement(
          StyledButtonIcon,
          { onClick: this.props.clickBehavior },
          this.props.icon ? this.props.icon === "deleteIcon" ? _react2.default.createElement(_delete2.default, { alt: "delete item", id: "deleteIcon" }) : this.props.icon === "priorityIcon" ? _react2.default.createElement(StyledPriorityIcon, {
            alt: "priority item",
            id: "priorityIcon",
            mainColor: this.props.mainColor
          }) : this.props.icon === "collapseIcon" ? _react2.default.createElement(_collapse2.default, { alt: "collapse item", id: "collapseIcon" }) : this.props.icon === "addIcon" ? _react2.default.createElement(_add2.default, { alt: "add item", id: "addIcon" }) : null : null
        );
      } else {
        return _react2.default.createElement(
          StyledButton,
          { onClick: this.props.clickBehavior, mainColor: this.getMainColor() },
          this.props.text
        );
      }
    }
  }]);

  return Button;
}(_react2.default.PureComponent);

// styled components


var StyledButton = (0, _styledComponents2.default)("button").withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-153trjo-0"
})(["cursor:pointer;background:", ";border:0;padding:10px 30px;border-radius:3px;color:", ";margin:10px auto;"], function (props) {
  return props.mainColor;
}, _globalStyles.colors.light);

var StyledButtonIcon = (0, _styledComponents2.default)("button").withConfig({
  displayName: "Button__StyledButtonIcon",
  componentId: "sc-153trjo-1"
})(["background:transparent;cursor:pointer;border:0;padding:10px;margin:10px auto;svg{width:20px;height:20px;display:inline-block;margin-bottom:-6px;margin-left:10px;&#deleteIcon{opacity:0.4;transition:all 0.25s ease;&:hover{opacity:1;fill:", ";}}&#addIcon{opacity:0.7;transition:all 0.25s ease;&:hover{opacity:1;fill:", ";}}}"], _globalStyles.colors.danger, _globalStyles.colors.primary);

var StyledPriorityIcon = (0, _styledComponents2.default)(_priority2.default).withConfig({
  displayName: "Button__StyledPriorityIcon",
  componentId: "sc-153trjo-2"
})(["fill:", ";"], function (props) {
  return props.mainColor;
});
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../../assets/globalStyles":"assets\\globalStyles.js","../../assets/icons/delete.svg":"assets\\icons\\delete.svg","../../assets/icons/priority.svg":"assets\\icons\\priority.svg","../../assets/icons/collapse.svg":"assets\\icons\\collapse.svg","../../assets/icons/add.svg":"assets\\icons\\add.svg"}],"redux\\actionCreators\\deleteItem.js":[function(require,module,exports) {
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
            icon: "priorityIcon",
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
                icon: "deleteIcon",
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
},{"react":"..\\node_modules\\react\\index.js"}],"redux\\actionCreators\\editItemName.js":[function(require,module,exports) {
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
},{}],"redux\\actionCreators\\addItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addItem;
function addItem(itemToAdd, listId) {
  return {
    type: "ADD_ITEM_TO_LIST",
    itemToAdd: itemToAdd,
    listId: listId
  };
}
},{}],"components\\basics\\SimpleTextArea.js":[function(require,module,exports) {
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

var _globalStyles = require("../../assets/globalStyles");

var _addItem = require("../../redux/actionCreators/addItem");

var _addItem2 = _interopRequireDefault(_addItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTextArea = function (_React$PureComponent) {
  _inherits(SimpleTextArea, _React$PureComponent);

  function SimpleTextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleTextArea.__proto__ || Object.getPrototypeOf(SimpleTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: _this.props.initialValue
    }, _this.handleChange = function (e) {
      _this.setState({ inputValue: e.target.value });
    }, _this.handleBlur = function () {
      _this.props.getTextAreaValue(_this.state.inputValue);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleTextArea, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(StyledTextArea, {
        type: "text",
        placeholder: this.props.inputPlaceholder,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: function onBlur() {
          return _this2.handleBlur();
        }
      });
    }
  }]);

  return SimpleTextArea;
}(_react2.default.PureComponent);

// styled components


var StyledTextArea = (0, _styledComponents2.default)("textarea").withConfig({
  displayName: "SimpleTextArea__StyledTextArea",
  componentId: "hyk4wz-0"
})(["resize:none;background:", ";position:relative;text-align:left;margin-bottom:5px;border:0;padding:10px;margin:10px 0;width:100%;height:120px;"], _globalStyles.colors.light);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleAddItem: function handleAddItem(newItem, listId) {
      dispatch((0, _addItem2.default)(newItem, listId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SimpleTextArea);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","../../assets/globalStyles":"assets\\globalStyles.js","../../redux/actionCreators/addItem":"redux\\actionCreators\\addItem.js"}],"components\\SingleToDoDetailsEdit.js":[function(require,module,exports) {
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

var _SimpleInput = require("./basics/SimpleInput");

var _SimpleInput2 = _interopRequireDefault(_SimpleInput);

var _SimpleTextArea = require("./basics/SimpleTextArea");

var _SimpleTextArea2 = _interopRequireDefault(_SimpleTextArea);

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
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.props.showDetailsEditItems ? _react2.default.createElement(
          "form",
          { onSubmit: function onSubmit(e) {
              return _this2.handleSubmit(e);
            } },
          _react2.default.createElement(StyledSimpleInput, {
            className: this.props.className,
            autoFocus: true,
            getInputValue: this.getInputValue,
            initialValue: this.props.task.task,
            inputPlaceholder: "Insert new item"
          }),
          _react2.default.createElement(_SimpleTextArea2.default, {
            getTextAreaValue: this.getTextAreaValue,
            initialValue: this.props.task.notes,
            inputPlaceholder: "Add notes"
          })
        ) : _react2.default.createElement(
          StyledFakeInputFields,
          {
            onClick: function onClick() {
              return _this2.props.showDetailsEditItemsFunc();
            }
          },
          _react2.default.createElement(
            "span",
            null,
            this.props.task.task
          ),
          _react2.default.createElement(
            "span",
            null,
            this.props.task.notes != "" ? this.props.task.notes : "Add notes"
          )
        )
      );
    }
  }]);

  return SingleToDoDetailsEdit;
}(_react2.default.PureComponent);

// styled components

var StyledSimpleInput = (0, _styledComponents2.default)(_SimpleInput2.default).withConfig({
  displayName: "SingleToDoDetailsEdit__StyledSimpleInput",
  componentId: "ve0p5t-0"
})(["position:relative;text-align:left;background:", ";width:100%;margin-bottom:5px;border:0;padding:15px 10px;"], _globalStyles.colors.light);

var StyledFakeInputFields = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SingleToDoDetailsEdit__StyledFakeInputFields",
  componentId: "ve0p5t-1"
})(["span{display:block;position:relative;text-align:left;background:#f7f7f7;width:100%;margin-bottom:15px;border:0;padding:18px 10px;cursor:pointer;}span + span{padding:12px 10px;margin:10px 0;height:120px;}"]);

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
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/editItemName":"redux\\actionCreators\\editItemName.js","../redux/actionCreators/editItemNotes":"redux\\actionCreators\\editItemNotes.js","./basics/SimpleInput":"components\\basics\\SimpleInput.js","./basics/SimpleTextArea":"components\\basics\\SimpleTextArea.js"}],"components\\SingleToDoDetails.js":[function(require,module,exports) {
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
            icon: "collapseIcon",
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
            icon: "deleteIcon",
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
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../assets/icons/edit.svg":"assets\\icons\\edit.svg","../assets/helpers":"assets\\helpers.js","../redux/actionCreators/deleteItem":"redux\\actionCreators\\deleteItem.js","./basics/PrioritySelector":"components\\basics\\PrioritySelector.js","../redux/actionCreators/changeItemPriorityColor":"redux\\actionCreators\\changeItemPriorityColor.js","./SingleToDoDetailsEdit":"components\\SingleToDoDetailsEdit.js","./basics/Button":"components\\basics\\Button.js"}],"components\\AddItem.js":[function(require,module,exports) {
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

var _addItem2 = _interopRequireDefault(_addItem);

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
      dispatch((0, _addItem2.default)(newItem, listId));
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

var _SimpleInput = require("./basics/SimpleInput");

var _SimpleInput2 = _interopRequireDefault(_SimpleInput);

var _Button = require("./basics/Button");

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
      showDetailsEditItems: false,
      showEditListName: false
    }, _this.handleEditList = function (inputValue) {
      if (inputValue.length > 3) {
        _this.props.handleEditListName(_this.props.currentList.id, inputValue);
      } else {
        alert("List name should be longer than 3 letters");
      }
      _this.setState({ showEditListName: false });
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = [].concat(_toConsumableArray(this.props.currentList.items));
      items.sort(function (a, b) {
        return new Date(b.start_date) - new Date(a.start_date);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.state.showEditListName ? _react2.default.createElement(StyledSimpleInput, {
          className: this.props.className,
          autoFocus: true,
          getInputValue: this.handleEditList,
          initialValue: this.props.currentList.list,
          inputPlaceholder: "List name"
        }) : _react2.default.createElement(
          StyledFakeInputField,
          { onClick: function onClick() {
              return _this2.showEditListNameFunc();
            } },
          _react2.default.createElement(
            "span",
            null,
            this.props.currentList.list
          )
        ),
        _react2.default.createElement(_Button.Button, {
          icon: "deleteIcon",
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

var StyledToDo = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDos__StyledToDo",
  componentId: "sc-7vjqze-2"
})(["padding:0 20px;border-radius:3px;box-shadow:1px 1px 4px ", ";background:", ";height:55vh;overflow-x:auto;width:", ";&::-webkit-scrollbar-track{background-color:", ";}&::-webkit-scrollbar{width:6px;background-color:", ";}&::-webkit-scrollbar-thumb{background-color:", ";}> ul > li{position:relative;height:61px;border-bottom:1px solid ", ";&.first-fake{border-top:1px solid ", ";}}"], _globalStyles.colors.lightGrey, (0, _polished.lighten)(0.025, _globalStyles.colors.light), function (props) {
  return props.toDoWidth;
}, function (props) {
  return (0, _polished.lighten)(0.5, props.mainColor);
}, function (props) {
  return (0, _polished.lighten)(0.5, props.mainColor);
}, function (props) {
  return props.mainColor;
}, (0, _polished.lighten)(0.2, _globalStyles.colors.lightGrey), (0, _polished.lighten)(0.2, _globalStyles.colors.lightGrey));

var StyledFakeInputField = (0, _styledComponents2.default)("div").withConfig({
  displayName: "ToDos__StyledFakeInputField",
  componentId: "sc-7vjqze-3"
})(["display:inline-block;width:250px;margin-bottom:29px;span{font-size:2em;text-transform:capitalize;cursor:pointer;}"]);

var StyledSimpleInput = (0, _styledComponents2.default)(_SimpleInput2.default).withConfig({
  displayName: "ToDos__StyledSimpleInput",
  componentId: "sc-7vjqze-4"
})(["width:250px;font-size:2em;text-transform:capitalize;border-bottom:1px solid white;transition:all 0.25s ease;&:hover,&:focus{border-bottom:1px solid ", ";}"], _globalStyles.colors.lightGrey);

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

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ToDos);
},{"react":"..\\node_modules\\react\\index.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/editListName":"redux\\actionCreators\\editListName.js","../redux/actionCreators/deleteList":"redux\\actionCreators\\deleteList.js","./basics/Sort":"components\\basics\\Sort.js","./basics/SimpleInput":"components\\basics\\SimpleInput.js","./basics/Button":"components\\basics\\Button.js","./SingleToDo":"components\\SingleToDo.js","./SingleToDoDetails":"components\\SingleToDoDetails.js","./AddItem":"components\\AddItem.js"}],"redux\\actionCreators\\addList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addList;

var _helpers = require("../../assets/helpers");

function addList(newList, newColor) {
  return {
    type: "ADD_LIST",
    newList: newList,
    newColor: newColor,
    newId: (0, _helpers.randomId)()
  };
}
},{"../../assets/helpers":"assets\\helpers.js"}],"redux\\actionCreators\\changeListColor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeListColor;
function changeListColor(listName, newColor) {
  return {
    type: "CHANGE_LIST_COLOR",
    listName: listName,
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
    }, _this.handleColorChange = function (list, listColor) {
      _this.props.handleColorChange(list, listColor);
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
                return _this2.handleColorChange(_this2.props.list, listColor);
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
exports.AddList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require("../assets/globalStyles");

var _Button = require("./basics/Button");

var _ColorSelector = require("./basics/ColorSelector");

var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddList = exports.AddList = function (_React$PureComponent) {
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
        _this.props.clickBehavior(_this.state.inputValue, _this.state.inputColor);
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
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","../assets/globalStyles":"assets\\globalStyles.js","./basics/Button":"components\\basics\\Button.js","./basics/ColorSelector":"components\\basics\\ColorSelector.js"}],"components\\ListsManager.js":[function(require,module,exports) {
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

var _addList2 = _interopRequireDefault(_addList);

var _changeListColor = require("../redux/actionCreators/changeListColor");

var _changeListColor2 = _interopRequireDefault(_changeListColor);

var _selectList = require("../redux/actionCreators/selectList");

var _selectList2 = _interopRequireDefault(_selectList);

var _ColorSelector = require("./basics/ColorSelector");

var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

var _AddList = require("./AddList");

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
          Object.keys(this.props.lists).map(function (list, i) {
            return _react2.default.createElement(
              StyledList,
              { key: i },
              _react2.default.createElement(
                StyledButton,
                {
                  className: "color-wrapper",
                  mainColor: _this2.props.lists[list].color,
                  onClick: function onClick() {
                    return _this2.handleSelectList(_this2.props.lists[list].id);
                  }
                },
                _react2.default.createElement(
                  "div",
                  { className: "info-wrapper" },
                  _react2.default.createElement(
                    "span",
                    null,
                    _this2.props.lists[list].list
                  ),
                  _react2.default.createElement(_ColorSelector2.default, {
                    list: _this2.props.lists[list].list,
                    handleColorChange: _this2.props.handleColorChange
                  })
                )
              )
            );
          }),
          _react2.default.createElement(_AddList.AddList, {
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
    handleAddList: function handleAddList(newList, newColor) {
      dispatch((0, _addList2.default)(newList, newColor));
    },
    handleColorChange: function handleColorChange(listName, newColor) {
      dispatch((0, _changeListColor2.default)(listName, newColor));
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

var _addList2 = _interopRequireDefault(_addList);

var _Button = require("./basics/Button");

var _AddList = require("./AddList");

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
    }, _this.handleAddList = function (newList, newColor) {
      _this.props.handleAddList(newList, newColor);
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
        this.state.showAddList ? _react2.default.createElement(_AddList.AddList, {
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
            icon: "addIcon",
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
    handleAddList: function handleAddList(newList, newColor) {
      dispatch((0, _addList2.default)(newList, newColor));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(NoToDos);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","polished":"..\\node_modules\\polished\\dist\\polished.es.js","../assets/globalStyles":"assets\\globalStyles.js","../redux/actionCreators/addList":"redux\\actionCreators\\addList.js","./basics/Button":"components\\basics\\Button.js","./AddList":"components\\AddList.js"}],"pages\\HomePage.js":[function(require,module,exports) {
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

var _selectList = require("../redux/actionCreators/selectList");

var _selectList2 = _interopRequireDefault(_selectList);

var _ToDos = require("../components/ToDos");

var _ToDos2 = _interopRequireDefault(_ToDos);

var _ListsManager = require("../components/ListsManager");

var _ListsManager2 = _interopRequireDefault(_ListsManager);

var _NoToDos = require("../components/NoToDos");

var _NoToDos2 = _interopRequireDefault(_NoToDos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      completeListLayoutNum: 0,
      showDetails: false,
      sortBy: "most-important",
      filterChecked: false
    }, _this.getCurrentList = function () {
      var lists = [].concat(_toConsumableArray(_this.props.lists));
      var currList = lists.filter(function (list) {
        return list.id === _this.props.activeList;
      })[0];
      var items = currList.items;
      if (_this.state.sortBy === "most-important") {
        items.sort(function (a, b) {
          return b.priority - a.priority;
        });
      } else if (_this.state.sortBy === "alphabetically-a-z") {
        items.sort(function (a, b) {
          var nameA = a.task.toLowerCase(),
              nameB = b.task.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        });
      } else if (_this.state.sortBy === "alphabetically-z-a") {
        items.sort(function (a, b) {
          var nameA = a.task.toLowerCase(),
              nameB = b.task.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return 1;
          if (nameA > nameB) return -1;
          return 0; //default return value (no sorting)
        });
      } else if (_this.state.sortBy === "newest") {
        items.sort(function (a, b) {
          return new Date(b.start_date) - new Date(a.start_date);
        });
      } else if (_this.state.sortBy === "oldest") {
        items.sort(function (a, b) {
          return new Date(a.start_date) - new Date(b.start_date);
        });
      }
      return currList;
    }, _this.getNextListIdToShowAfterDeleteCurrentList = function () {
      var lists = _this.props.lists;
      var currList = lists.filter(function (list) {
        return list.id === _this.props.activeList;
      })[0];
      var listsLength = lists.length - 1;
      var nextListIndex = lists.indexOf(currList) + 1;

      var nextList = nextListIndex > listsLength ? lists.filter(function (list, i) {
        return i === 0;
      })[0].id : lists.filter(function (list, i) {
        return i === nextListIndex;
      })[0].id;

      return nextList;
    }, _this.completeListLayout = function () {
      var currState = _this.getCurrentList();
      var containerHeight = document.querySelector("#to-dos").clientHeight;
      var itemHeight = currState.items.length > 0 ? document.querySelector("#single-to-do").clientHeight : 61;
      var maxItems = Math.floor(containerHeight / itemHeight) - 1;
      if (currState.items.length < maxItems) {
        var completeListLayoutNum = maxItems - currState.items.length;
        _this.setState({ completeListLayoutNum: completeListLayoutNum }, function () {});
      } else {
        _this.setState({ completeListLayoutNum: 0 }, function () {});
      }
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

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.lists.length > 0) {
        this.completeListLayout();
        this.getNextListIdToShowAfterDeleteCurrentList();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          StyledContainer,
          {
            className: this.state.showDetails ? "expanded" : "compressed"
          },
          this.props.lists.length > 0 ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_ToDos2.default, {
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
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.PureComponent);

// styled components


var expandsToDoOuter = (0, _styledComponents.keyframes)(["0%{width:60%;}100%{width:80%;}"]);

var compressToDoOuter = (0, _styledComponents.keyframes)(["0%{width:80%;}100%{width:60%;}"]);

var StyledContainer = (0, _styledComponents2.default)("div").withConfig({
  displayName: "HomePage__StyledContainer",
  componentId: "sc-16ryk3c-0"
})(["width:60%;margin:30px auto;position:relative;transition:all 0.25s ease;&.expanded{animation:", " 0.25s ease forwards;}&.compressed{animation:", " 0.25s ease forwards;}h2{text-transform:capitalize;font-size:2em;margin-bottom:20px;}"], expandsToDoOuter, compressToDoOuter);

var mapStateToProps = function mapStateToProps(_ref2) {
  var lists = _ref2.lists,
      activeList = _ref2.activeList;
  return {
    lists: lists,
    activeList: activeList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSelectList: function handleSelectList(listId) {
      dispatch((0, _selectList2.default)(listId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);
},{"react":"..\\node_modules\\react\\index.js","styled-components":"..\\node_modules\\styled-components\\dist\\styled-components.esm.js","react-redux":"..\\node_modules\\react-redux\\es\\index.js","../redux/actionCreators/selectList":"redux\\actionCreators\\selectList.js","../components/ToDos":"components\\ToDos.js","../components/ListsManager":"components\\ListsManager.js","../components/NoToDos":"components\\NoToDos.js"}],"..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50185' + '/');
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
},{}]},{},["..\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","pages\\HomePage.js"], null)
//# sourceMappingURL=/HomePage.429101ba.map