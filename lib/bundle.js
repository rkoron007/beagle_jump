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

var dog = new _dog2.default();

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("game");
  var ctx = canvasEl.getContext("2d");
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  var game = new _game2.default(dog);
  new _gameview2.default(game, ctx).start();
});

var keyDownHandler = function keyDownHandler(e) {
  if (e.keyCode === 32) {
    dog.spacePressed = true;
  }
};

var keyUpHandler = function keyUpHandler(e) {
  if (e.keyCode === 32) {
    dog.spacePressed = false;
  }
};

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
  function Game(dog) {
    _classCallCheck(this, Game);

    this.obstacles = [];
    this.dog = dog;
    this.finished = false;
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
      for (var i = 0; i < Game.NUM_OBSTACLES; i++) {
        this.add(new _obstacle2.default());
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
      var allObjects = this.allObjects();
      for (var i = 0; i < allObjects.length; i++) {
        for (var j = 0; j < allObjects.length; j++) {
          var obj1 = allObjects[i];
          var obj2 = allObjects[j];

          if (obj1.collidedWith(obj2)) {
            return console.log("hello!");
            // const collision = obj1.collideWith(obj2);
            // if (collision) return;
          }
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      if (this.obstacles.length < 2) {
        this.addObstacles();
      }
      console.log(this.obstacles);
      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: "step",
    value: function step(time) {
      this.checkCollisions();
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

var STEP_SPEED = 11;
var JUMP_DISTANCE = 350;
var JUMP_HEIGHT = 100;

var Dog = function Dog(options) {
  _classCallCheck(this, Dog);

  this.x = 20;
  this.y = 460;
  this.srcX = 0;
  this.srcY = 0;
  this.trackRight = 0;
  this.rows = 1;
  this.columns = 4;
  this.spriteWidth = 410;
  this.spriteHeight = 120;
  this.width = this.spriteWidth / this.columns;
  this.height = this.spriteHeight / this.rows;
  this.curFrame = 0;
  this.frameCount = 4;
  this.jumpStart = false;
  this.spacePressed = false;
  this.y_velocity = 0;
};

Object.setPrototypeOf(Dog.prototype, _movingobject2.default);

Dog.prototype.Jumping = function (offset) {
  return this.jumpStart !== null && this.jumpDistance(offset) > 0;
};

Dog.prototype.jumpDistance = function (offset) {
  if (this.jumpStart === null) {
    return 0;
  } else {
    return this.jumpStart + JUMP_DISTANCE - offset;
  }
};

Dog.prototype.startJump = function (offset) {
  this.jumpStart = offset;
};

Dog.prototype.jumpHeight = function (offset) {
  var dRemaining = this.jumpDistance(offset);
  if (dRemaining > 0) {
    var maxJump = JUMP_DISTANCE / 2;

    if (dRemaining >= maxJump) {
      dRemaining -= JUMP_DISTANCE;
    }
    var arcPos = Math.abs(dRemaining / maxJump);

    return JUMP_HEIGHT * arcPos;
  }
  return 0;
};

Dog.prototype.updateFrame = function () {
  this.curFrame = ++this.curFrame % this.frameCount;
  this.srcX = this.curFrame * this.width;
};

Dog.prototype.clearFloor = function () {
  if (this.y > 460) {
    this.jumpStart = false;
    this.y = 460;
    this.y_velocity = 0;
  }
};

Dog.prototype.draw = function (context) {

  if (this.spacePressed && this.jumpStart === false) {
    this.y_velocity -= 160;
    this.jumpStart = true;
  }

  this.y_velocity += 40;
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
    key: "contains",
    value: function contains(x, y) {
      if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "collidedWith",
    value: function collidedWith(shape) {
      if (this.contains(shape.x, shape.y) || this.contains(shape.x + shape.width, shape.y) || this.contains(shape.x, shape.y + shape.height) || this.contains(shape.x + shape.width, shape.y + shape.height)) {
        return true;
      } else if (shape.contains(this.x, this.y) || shape.contains(this.x + this.width, this.y) || shape.contains(this.x, this.y + this.height) || shape.contains(this.x + this.width, this.y + this.height)) {
        return true;
      }
      return false;
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

var Obstacle = function () {
  function Obstacle() {
    _classCallCheck(this, Obstacle);

    this.x = 500;
    this.y = 500;
    this.height = 600;
    this.width = 680;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw(ctx) {
      var fenceSprite = new Image();
      fenceSprite.src = "src/images/fence.png";
      ctx.drawImage(fenceSprite, this.y, this.x, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }]);

  return Obstacle;
}();

exports.default = Obstacle;


Object.setPrototypeOf(Obstacle.prototype, _movingobject2.default);

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var _this = this;

      // this.lastTime = 0;
      // requestAnimationFrame(this.animate(100).bind(this));
      setInterval(function () {
        return _this.game.draw(_this.ctx);
      }, 200);
    }
  }, {
    key: "animate",
    value: function animate(time) {
      // const timeDelta = time - this.lastTime;
      // this.game.step(time);
      // this.lastTime = time;
      // this.game.draw(this.ctx);
      // requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map