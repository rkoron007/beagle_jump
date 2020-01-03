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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
      if (this.x > shape.x - 40 && this.y - minheight >= 295 && shape.x > 30) {
        return true;
      } else return false;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dog = __webpack_require__(3);

var _dog2 = _interopRequireDefault(_dog);

var _obstacle = __webpack_require__(4);

var _obstacle2 = _interopRequireDefault(_obstacle);

var _house = __webpack_require__(5);

var _house2 = _interopRequireDefault(_house);

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
    this.fencesToGo = Game.FENCES_TO_WIN;

    //set the frames per second
    this.then = 0;
    this.fps = 10;
    this.fpsInterval = 700 / this.fps;
    this.animationFrame = null;

    this.loadCycle = this.loadCycle.bind(this);
  }

  _createClass(Game, [{
    key: "loadGame",
    value: function loadGame() {
      this.startSprite();
      this.ctx.canvas.addEventListener("click", this.loadCycle);
    }
  }, {
    key: "loadCycle",
    value: function loadCycle() {
      this.start();
      this.ctx.canvas.removeEventListener("click", this.loadCycle);
    }
  }, {
    key: "start",
    value: function start() {
      this.finished = false;
      requestAnimationFrame(this.frame.bind(this));
    }
  }, {
    key: "checkObstacles",
    value: function checkObstacles() {
      if (this.fencesToGo === 1) {
        this.removeObstacles();
        this.bringUpHouse();
      } else if (this.obstacles.length < 3 && this.fencesToGo > 1) {
        this.addObstacles();
      }
      this.removeObstacles();
    }
  }, {
    key: "frame",
    value: function frame() {
      this.animationFrame = requestAnimationFrame(this.frame.bind(this));

      //if game is finished handle
      if (this.fencesToGo <= 0) {
        this.won();
        return true;
      } else if (this.finished === true) {
        this.gameOver();
        return false;
      }
      var now = Date.now();
      var timeDelta = now - this.then;

      if (timeDelta > this.fpsInterval) {
        this.then = now - timeDelta % this.fpsInterval;
        this.checkObstacles();
        this.checkCollisions();
        this.checkJumps();
        this.draw(this.ctx);
      }
    }
  }, {
    key: "add",
    value: function add(object) {
      if (object instanceof _obstacle2.default) {
        this.obstacles.push(object);
      }
      if (object instanceof _house2.default) {
        this.house.push(object);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: "startSprite",
    value: function startSprite() {
      var _this = this;

      var startSprite = new Image();
      startSprite.onload = function () {
        _this.ctx.drawImage(startSprite, 300, 250, 200, 100);
      };
      startSprite.src = "src/images/start.png";
    }
  }, {
    key: "addObstacles",
    value: function addObstacles() {
      //if won -> don't add obstacles
      if (this.fencesToGo <= 0) {
        return this.won();
      }
      //create a random spot for the fence but make sure it's big enough
      var x = void 0;

      if (this.obstacles.length >= 1) {
        // if have obstacle make sure they are a good distance apart
        var y = Math.floor(Math.random() * 400) + 452;
        x = this.obstacles[this.obstacles.length - 1].x + y;
      } else {
        x = Math.floor(Math.random() * 1000 + 1);
        if (x < 850) {
          x += 450;
        }
      }
      //choose a random number for fence image
      var imageNum = Math.floor(Math.random() * 7 + 1);
      this.add(new _obstacle2.default(x, imageNum));
    }
  }, {
    key: "removeObstacles",
    value: function removeObstacles() {
      //if an obstacle has gone off screen - remove count down to game end
      if (this.obstacles.length >= 1 || this.fencesToGo < 3) {
        if (this.obstacles[0].x < -650) {
          this.obstacles.shift();
          this.fencesToGo -= 1;
        }
      }
    }
  }, {
    key: "allObjects",
    value: function allObjects() {
      return [].concat(this.dog, this.obstacles, this.house);
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      for (var i = 0; i < this.obstacles.length; i++) {
        var obj1 = this.dog;
        var obj2 = this.obstacles[i];
        if (obj1.collidedWith(obj2)) {
          this.obstacles = [];
          this.finished = true;
        }
      }
    }
  }, {
    key: "bringUpHouse",
    value: function bringUpHouse() {
      if (this.house.length < 1) {
        this.add(new _house2.default());
      }
    }
  }, {
    key: "clearObstacles",
    value: function clearObstacles() {
      this.obstacles = [];
    }
  }, {
    key: "won",
    value: function won() {
      var _this2 = this;

      if (this.fencesToGo === 0) {
        cancelAnimationFrame(this.animationFrame);
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.house = [];
        var houseSprite = new Image();
        houseSprite.onload = function () {
          _this2.ctx.drawImage(houseSprite, 500, 120, 500, 500);
        };

        var winDogSprite = new Image();
        winDogSprite.onload = function () {
          _this2.ctx.drawImage(winDogSprite, 20, 390, 150, 150);
        };

        var winSprite = new Image();
        winSprite.onload = function () {
          _this2.ctx.drawImage(winSprite, 240, 0, 300, 300);
        };

        var startSprite = new Image();
        startSprite.onload = function () {
          _this2.ctx.drawImage(startSprite, 280, 350, 200, 100);
        };

        startSprite.src = "src/images/start.png";
        winDogSprite.src = "src/images/dogWin.png";
        houseSprite.src = "src/images/houseSprite.png";
        winSprite.src = "src/images/winSprite.png";

        this.finished = true;
        this.clearObstacles();
        this.fencesToGo = Game.FENCES_TO_WIN;
        this.ctx.canvas.addEventListener("click", this.loadCycle);
      } else {
        this.finished = false;
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame);
      this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      this.startSprite();

      var gameOverSprite = new Image();
      gameOverSprite.onload = function () {
        _this3.ctx.drawImage(gameOverSprite, 300, 80, 200, 100);
      };

      var sadDogSprite = new Image();
      sadDogSprite.onload = function () {
        _this3.ctx.drawImage(sadDogSprite, 20, 360, 200, 200);
      };

      sadDogSprite.src = "src/images/dog gameover.png";
      gameOverSprite.src = "src/images/gameover.png";

      this.clearObstacles();
      this.ctx.canvas.addEventListener("click", this.loadCycle);
      this.house = [];
      this.fencesToGo = Game.FENCES_TO_WIN;
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
  }]);

  return Game;
}();

exports.default = Game;


Game.FENCES_TO_WIN = 10;
Game.DIM_X = 800;
Game.DIM_Y = 600;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movingobject = __webpack_require__(0);

var _movingobject2 = _interopRequireDefault(_movingobject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  this.y -= 31;
  this.jumpFrame -= 1;
};

Dog.prototype.jump = function () {
  this.jumping = true;
  this.jumpFrame = 13;
  this.y -= 30;
};

Dog.prototype.draw = function (context) {
  this.y_velocity += 20.5;
  this.y += this.y_velocity;
  this.y_velocity *= 0.09;

  this.clearFloor();
  this.updateFrame();

  var dogSprite = new Image();
  dogSprite.src = "src/images/dogRunBig-resize.png";
  context.drawImage(dogSprite, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width, this.height);
};

exports.default = Dog;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movingobject = __webpack_require__(0);

var _movingobject2 = _interopRequireDefault(_movingobject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Obstacle = function (_MovingObject) {
  _inherits(Obstacle, _MovingObject);

  function Obstacle(x, imageNum) {
    _classCallCheck(this, Obstacle);

    var _this = _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this));

    _this.x = x;
    _this.y = 470;
    _this.height = 100;
    _this.width = 100;
    _this.obstacleSprite = new Image();
    _this.obstacleSprite.src = Obstacle.OBSTACLE_IMAGES[imageNum];
    return _this;
  }

  _createClass(Obstacle, [{
    key: "draw",
    value: function draw(ctx) {
      this.x -= 15;
      ctx.drawImage(this.obstacleSprite, this.x, this.y, 110, 110);
    }
  }]);

  return Obstacle;
}(_movingobject2.default);

exports.default = Obstacle;


Obstacle.OBSTACLE_IMAGES = {
  1: "src/images/shell.png",
  2: "src/images/fence.png",
  3: "src/images/fence2.png",
  4: "src/images/sheep.png",
  5: "src/images/fire.png",
  6: "src/images/bush.png",
  7: "src/images/fence.png"
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var House = function () {
  function House() {
    _classCallCheck(this, House);

    this.x = 1000;
    this.y = 120;
    this.houseSprite = new Image();
    this.houseSprite.src = "src/images/houseSprite.png";
  }

  _createClass(House, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.x > 500) {
        this.x -= 15;
      }
      return ctx.drawImage(this.houseSprite, this.x, this.y, 500, 500);
    }
  }]);

  return House;
}();

exports.default = House;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map