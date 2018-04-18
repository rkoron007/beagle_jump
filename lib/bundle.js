/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _gameview = __webpack_require__(7);

var _gameview2 = _interopRequireDefault(_gameview);

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

var _movingobject = __webpack_require__(3);

var _movingobject2 = _interopRequireDefault(_movingobject);

var _obstacle = __webpack_require__(4);

var _obstacle2 = _interopRequireDefault(_obstacle);

var _utility = __webpack_require__(6);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("game");
  var ctx = canvasEl.getContext("2d");
  var game = new _game2.default(ctx);

  initListeners(game);
  game.loadGame();
});

function initListeners(game) {
  var keyDownHandler = function keyDownHandler(e) {
    if (e.keyCode === 32) {
      game.spacePressed = true;
    }
  };

  var keyUpHandler = function keyUpHandler(e) {
    if (e.keyCode === 32) {
      game.spacePressed = false;
    }
  };

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

var _obstacle = __webpack_require__(4);

var _obstacle2 = _interopRequireDefault(_obstacle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.obstacles = [];
    this.house = [];
    this.dog = new _dog2.default();
    this.finished = false;
    this.ctx = ctx;
    this.spacePressed = false;
    this.fencesToGo = 3;

    this.loadCycle = this.loadCycle.bind(this);
  }

  _createClass(Game, [{
    key: "add",
    value: function add(object) {
      if (object instanceof _obstacle2.default) {
        this.obstacles.push(object);
      }
    }
  }, {
    key: "addObstacles",
    value: function addObstacles() {
      if (this.fencesToGo <= 0) {
        return this.won();
      }
      var y = Math.floor(Math.random() * 800 + 1);
      if (y < 200) {
        y += 200;
      }
      this.add(new _obstacle2.default(y));
      this.fencesToGo -= 1;
    }
  }, {
    key: "removeObstacles",
    value: function removeObstacles() {
      if (this.obstacles[0].x < -150) {
        this.obstacles.shift();
      }
    }
  }, {
    key: "won",
    value: function won() {
      if (this.fencesToGo <= 0) {
        var houseSprite = new Image();
        houseSprite.src = "src/images/houseSprite.png";
        this.ctx.drawImage(houseSprite, 500, 140, 500, 500);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "allObjects",
    value: function allObjects() {
      return [].concat(this.dog, this.obstacles);
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      for (var i = 0; i < this.obstacles.length; i++) {
        var obj1 = this.dog;
        var obj2 = this.obstacles[i];
        if (obj1.collidedWith(obj2)) {
          // const collision = obj1.collideWith(obj2);
          // if (collision) return;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: "checkJumps",
    value: function checkJumps() {
      if (this.spacePressed && this.dog.jumping === false) {
        this.dog.jump();
      }
      if (this.dog.jumping === true) {
        this.dog.animateJump();
      }
    }
  }, {
    key: "frame",
    value: function frame() {
      if (this.obstacles.length < 1) {
        this.addObstacles();
      }
      this.removeObstacles();
      this.checkCollisions();
      this.checkJumps();

      if (this.won() !== true) {
        this.draw(this.ctx);
      }
      // else if ( ){
      //
      // }
      //handle game over
    }
  }, {
    key: "gameOver",
    value: function gameOver() {}
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      setInterval(function () {
        return _this.frame();
      }, 80);
    }
  }, {
    key: "loadCycle",
    value: function loadCycle() {
      this.start();
      this.ctx.canvas.removeEventListener('click', this.loadCycle);
    }
  }, {
    key: "loadGame",
    value: function loadGame() {
      var _this2 = this;

      var startSprite = new Image();
      startSprite.onload = function () {
        _this2.ctx.drawImage(startSprite, 300, 250, 200, 100);
      };
      this.ctx.canvas.addEventListener('click', this.loadCycle);
      startSprite.src = "src/images/start.png";
    }
  }]);

  return Game;
}();

exports.default = Game;


Game.NUM_OBSTACLES = 2;
Game.DIM_X = 800;
Game.DIM_Y = 600;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movingobject = __webpack_require__(3);

var _movingobject2 = _interopRequireDefault(_movingobject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STEP_SPEED = 11;
var JUMP_DISTANCE = 350;
var JUMP_HEIGHT = 100;

var Dog = function (_MovingObject) {
  _inherits(Dog, _MovingObject);

  function Dog(options) {
    _classCallCheck(this, Dog);

    var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this));

    _this.x = 100;
    _this.y = 470;
    _this.srcX = 0;
    _this.srcY = 0;
    _this.trackRight = 0;
    _this.rows = 1;
    _this.columns = 4;
    _this.spriteWidth = 410;
    _this.spriteHeight = 120;
    _this.width = _this.spriteWidth / _this.columns;
    _this.height = _this.spriteHeight / _this.rows;
    _this.curFrame = 0;
    _this.frameCount = 4;

    _this.jumping = false;
    _this.jumpFrame = 13;
    _this.y_velocity = 0;
    return _this;
  }

  return Dog;
}(_movingobject2.default);

Dog.prototype.updateFrame = function () {
  this.curFrame = ++this.curFrame % this.frameCount;
  this.srcX = this.curFrame * this.width;
};

Dog.prototype.clearFloor = function () {
  if (this.y > 470) {
    this.jumping = false;
    this.y = 470;
    this.y_velocity = 0;
  }
};

Dog.prototype.animateJump = function () {
  if (this.jumpFrame < 1) {
    return false;
  }

  this.y -= 30;
  this.jumpFrame -= 1;
};

Dog.prototype.jump = function () {
  this.jumping = true;
  this.jumpFrame = 13;
  this.y -= 35;
};

Dog.prototype.draw = function (context) {
  this.y_velocity += 20.5;
  this.y += this.y_velocity;
  this.y_velocity *= .09;

  this.clearFloor();
  this.updateFrame();

  var dogSprite = new Image();
  dogSprite.src = "src/images/dogRunBig-resize.png";
  context.drawImage(dogSprite, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height);
};

exports.default = Dog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(x, y, h, w) {
    _classCallCheck(this, MovingObject);

    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
  }

  _createClass(MovingObject, [{
    key: "collidedWith",
    value: function collidedWith(shape) {
      var minheight = (this.height + shape.height) / 2;

      if (this.x > shape.x - 40 && this.y - minheight >= 300 && shape.x > 30) {
        return true;
      } else return false;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movingobject = __webpack_require__(3);

var _movingobject2 = _interopRequireDefault(_movingobject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Obstacle = function (_MovingObject) {
  _inherits(Obstacle, _MovingObject);

  function Obstacle(x) {
    _classCallCheck(this, Obstacle);

    var _this = _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this));

    _this.x = x + 400;
    _this.y = 470;
    _this.height = 100;
    _this.width = 100;
    _this.fenceSprite = new Image();
    _this.fenceSprite.src = "src/images/fence.png";
    return _this;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw(ctx) {
      this.x -= 15;
      ctx.drawImage(this.fenceSprite, this.x, this.y, 110, 110);
    }
  }]);

  return Obstacle;
}(_movingobject2.default);

exports.default = Obstacle;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var centerText = function centerText(ctx, text, y) {
  var measurement = ctx.measureText(text);
  var x = (ctx.canvas.width - measurement.width) / 2;
  ctx.fillText(text, x, y);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map