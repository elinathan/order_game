"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    background-image: url(\"./img/car.svg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: rotate(", "deg);\n    // background-color: red;\n    height: ", "px;\n    width: ", "px;\n    left: ", "px;\n    top: ", "px;\n    // border-radius: 50%;\n"], ["\n    position: relative;\n    background-image: url(\"./img/car.svg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: rotate(", "deg);\n    // background-color: red;\n    height: ", "px;\n    width: ", "px;\n    left: ", "px;\n    top: ", "px;\n    // border-radius: 50%;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    outline: none;\n    & #coin_coint {\n        position: absolute;\n        left: 83.5%;\n        top: 4%;\n        text-align: center;\n        font-family: bitcount-mono-single-square, monospace;\n        font-weight: 600;\n        font-style: normal;\n        letter-spacing: 0.1rem;\n        color: #fadf4f;\n        font-size: 1.5rem;\n        display: inline-block;\n    }\n    & #icon {\n        position: absolute;\n        background-image: url(\"./img/coin.svg\");\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        left: 76%;\n        top: 6%;\n        width: 20px;\n        height: 20px;\n    }\n    & span {\n        position: absolute;\n        left: 7%;\n        top: 2%;\n        text-align: center;\n        font-family: bitcount-mono-single-square, monospace;\n        font-weight: 600;\n        font-style: normal;\n        letter-spacing: 0.2rem;\n        color: white;\n        font-size: 2rem;\n        filter: drop-shadow(2px 2px 0 black);\n    }\n"], ["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    outline: none;\n    & #coin_coint {\n        position: absolute;\n        left: 83.5%;\n        top: 4%;\n        text-align: center;\n        font-family: bitcount-mono-single-square, monospace;\n        font-weight: 600;\n        font-style: normal;\n        letter-spacing: 0.1rem;\n        color: #fadf4f;\n        font-size: 1.5rem;\n        display: inline-block;\n    }\n    & #icon {\n        position: absolute;\n        background-image: url(\"./img/coin.svg\");\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        left: 76%;\n        top: 6%;\n        width: 20px;\n        height: 20px;\n    }\n    & span {\n        position: absolute;\n        left: 7%;\n        top: 2%;\n        text-align: center;\n        font-family: bitcount-mono-single-square, monospace;\n        font-weight: 600;\n        font-style: normal;\n        letter-spacing: 0.2rem;\n        color: white;\n        font-size: 2rem;\n        filter: drop-shadow(2px 2px 0 black);\n    }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    height: ", "px;\n    width: ", "px;\n    background-color: blue;\n    overflow: hidden;\n"], ["\n    position: relative;\n    height: ", "px;\n    width: ", "px;\n    background-color: blue;\n    overflow: hidden;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: ", "px;\n    left: ", "px;\n    background-image: url(\"./img/obstacle.png\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"], ["\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: ", "px;\n    left: ", "px;\n    background-image: url(\"./img/obstacle.png\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: ", "px;\n    left: ", "px;\n    visibility: ", ";\n    background-image: url(\"./img/coin.svg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"], ["\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    top: ", "px;\n    left: ", "px;\n    visibility: ", ";\n    background-image: url(\"./img/coin.svg\");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n    position: absolute;\n    background-image: url(\"./img/bg.png\");\n    top: ", "px;\n    width: 100%;\n    height: 200%;\n"], ["\n    position: absolute;\n    background-image: url(\"./img/bg.png\");\n    top: ", "px;\n    width: 100%;\n    height: 200%;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n    top: 0;\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-family: bitcount-mono-single-square, monospace;\n    font-size: 2rem;\n    letter-spacing: 0.1rem;\n    color: white;\n    visibility: ", ";\n    & #game_over {\n        font-size: 2.5rem;\n        font-weight: 600;\n        filter: drop-shadow(2px 2px 0 black);\n        margin-bottom: -0.2rem;\n    }\n    & #score {\n        font-size: 1.5rem;\n        font-weight: 500;\n        filter: drop-shadow(1px 1px 0 black);\n        letter-spacing: 0;\n        margin-bottom: -0.5rem;\n    }\n    & #puff_points {\n        font-size: 1.5rem;\n        font-weight: 500;\n        filter: drop-shadow(1px 1px 0 black);\n        letter-spacing: 0;\n        color: #fadf4f;\n    }\n    & #restart_button {\n        background-image: url(\"./img/restart.png\");\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        width: 30%;\n        height: 10%;\n        cursor: pointer;\n"], ["\n    top: 0;\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-family: bitcount-mono-single-square, monospace;\n    font-size: 2rem;\n    letter-spacing: 0.1rem;\n    color: white;\n    visibility: ", ";\n    & #game_over {\n        font-size: 2.5rem;\n        font-weight: 600;\n        filter: drop-shadow(2px 2px 0 black);\n        margin-bottom: -0.2rem;\n    }\n    & #score {\n        font-size: 1.5rem;\n        font-weight: 500;\n        filter: drop-shadow(1px 1px 0 black);\n        letter-spacing: 0;\n        margin-bottom: -0.5rem;\n    }\n    & #puff_points {\n        font-size: 1.5rem;\n        font-weight: 500;\n        filter: drop-shadow(1px 1px 0 black);\n        letter-spacing: 0;\n        color: #fadf4f;\n    }\n    & #restart_button {\n        background-image: url(\"./img/restart.png\");\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n        width: 30%;\n        height: 10%;\n        cursor: pointer;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CAR_SIZE = 40;
var GAME_WIDTH = 375;
var GAME_HEIGHT = 375;
var OBSTACLE_SIZE = 40;
var CAR_TOP = 2 * GAME_HEIGHT / 3 - CAR_SIZE / 2;

var laneOnePosition = GAME_WIDTH / 5 - CAR_SIZE / 2;
var laneTwoPosition = GAME_WIDTH / 2 - CAR_SIZE / 2;
var laneThreePosition = 4 * GAME_WIDTH / 5 - CAR_SIZE / 2;

var randomLane = Math.floor(Math.random() * 3) + 1;
var carLeft = 0;

// Helper to get the pixel position of the lane number
var getLanePosition = function getLanePosition(laneNumber) {
    if (laneNumber === 1) {
        return laneOnePosition;
    } else if (laneNumber === 2) {
        return laneTwoPosition;
    } else if (laneNumber === 3) {
        return laneThreePosition;
    } else {
        return 0;
    }
};

function App() {
    // Getting hooks from the global variable "React"
    var _React$useState = React.useState(laneTwoPosition),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        carPosition = _React$useState2[0],
        setCarPosition = _React$useState2[1];

    var _React$useState3 = React.useState(2),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        carLane = _React$useState4[0],
        setCarLane = _React$useState4[1];

    var _React$useState5 = React.useState(0),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        carAngle = _React$useState6[0],
        setCarAngle = _React$useState6[1];

    var _React$useState7 = React.useState(false),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        isMovingLeft = _React$useState8[0],
        setIsMovingLeft = _React$useState8[1];

    var _React$useState9 = React.useState(false),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        isMovingRight = _React$useState10[0],
        setIsMovingRight = _React$useState10[1];

    var _React$useState11 = React.useState(true),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        hasGameStarted = _React$useState12[0],
        setHasGameStarted = _React$useState12[1];

    var _React$useState13 = React.useState(0),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        score = _React$useState14[0],
        setScore = _React$useState14[1];

    var _React$useState15 = React.useState(4),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        velocity = _React$useState16[0],
        setVelocity = _React$useState16[1];

    var _React$useState17 = React.useState(2.66),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        obstacleVelocity = _React$useState18[0],
        setObstacleVelocity = _React$useState18[1];

    var _React$useState19 = React.useState(getLanePosition(randomLane)),
        _React$useState20 = _slicedToArray(_React$useState19, 2),
        obstaclePosition = _React$useState20[0],
        setObstaclePosition = _React$useState20[1];

    var _React$useState21 = React.useState(-OBSTACLE_SIZE),
        _React$useState22 = _slicedToArray(_React$useState21, 2),
        obstacleTop = _React$useState22[0],
        setObstacleTop = _React$useState22[1];

    randomLane = Math.floor(Math.random() * 3) + 1;

    var _React$useState23 = React.useState(getLanePosition(randomLane)),
        _React$useState24 = _slicedToArray(_React$useState23, 2),
        obstaclePositionTwo = _React$useState24[0],
        setObstaclePositionTwo = _React$useState24[1];

    var _React$useState25 = React.useState(-OBSTACLE_SIZE - GAME_HEIGHT / 3),
        _React$useState26 = _slicedToArray(_React$useState25, 2),
        obstacleTopTwo = _React$useState26[0],
        setObstacleTopTwo = _React$useState26[1];

    randomLane = Math.floor(Math.random() * 3) + 1;

    var _React$useState27 = React.useState(getLanePosition(randomLane)),
        _React$useState28 = _slicedToArray(_React$useState27, 2),
        obstaclePositionThree = _React$useState28[0],
        setObstaclePositionThree = _React$useState28[1];

    var _React$useState29 = React.useState(-OBSTACLE_SIZE - 2 * GAME_HEIGHT / 3),
        _React$useState30 = _slicedToArray(_React$useState29, 2),
        obstacleTopThree = _React$useState30[0],
        setObstacleTopThree = _React$useState30[1];

    randomLane = Math.floor(Math.random() * 3) + 1;

    var _React$useState31 = React.useState(getLanePosition(randomLane)),
        _React$useState32 = _slicedToArray(_React$useState31, 2),
        obstaclePositionFour = _React$useState32[0],
        setObstaclePositionFour = _React$useState32[1];

    var _React$useState33 = React.useState(-OBSTACLE_SIZE - 2 * GAME_HEIGHT / 3),
        _React$useState34 = _slicedToArray(_React$useState33, 2),
        obstacleTopFour = _React$useState34[0],
        setObstacleTopFour = _React$useState34[1];

    randomLane = Math.floor(Math.random() * 3) + 1;

    var _React$useState35 = React.useState(-OBSTACLE_SIZE - GAME_HEIGHT / 6),
        _React$useState36 = _slicedToArray(_React$useState35, 2),
        coinTop = _React$useState36[0],
        setCoinTop = _React$useState36[1];

    var _React$useState37 = React.useState(getLanePosition(randomLane)),
        _React$useState38 = _slicedToArray(_React$useState37, 2),
        coinPosition = _React$useState38[0],
        setCoinPosition = _React$useState38[1];

    var _React$useState39 = React.useState(false),
        _React$useState40 = _slicedToArray(_React$useState39, 2),
        coinCollected = _React$useState40[0],
        setCoinCollected = _React$useState40[1];

    randomLane = Math.floor(Math.random() * 3) + 1;

    var _React$useState41 = React.useState(-OBSTACLE_SIZE - 5 * GAME_HEIGHT / 6 - 15),
        _React$useState42 = _slicedToArray(_React$useState41, 2),
        coinTopTwo = _React$useState42[0],
        setCoinTopTwo = _React$useState42[1];

    var _React$useState43 = React.useState(getLanePosition(randomLane)),
        _React$useState44 = _slicedToArray(_React$useState43, 2),
        coinPositionTwo = _React$useState44[0],
        setCoinPositionTwo = _React$useState44[1];

    var _React$useState45 = React.useState(false),
        _React$useState46 = _slicedToArray(_React$useState45, 2),
        coinCollectedTwo = _React$useState46[0],
        setCoinCollectedTwo = _React$useState46[1];

    var _React$useState47 = React.useState(0),
        _React$useState48 = _slicedToArray(_React$useState47, 2),
        coinCount = _React$useState48[0],
        setCoinCount = _React$useState48[1];

    var _React$useState49 = React.useState(-GAME_HEIGHT),
        _React$useState50 = _slicedToArray(_React$useState49, 2),
        backgroundPosition = _React$useState50[0],
        setBackgroundPosition = _React$useState50[1];

    // Focuses on the game Container by default.


    var focusElement = React.useRef(null);
    React.useEffect(function () {
        if (focusElement.current) {
            focusElement.current.focus();
        }
    }, []);

    // Handles arrow key presses
    React.useEffect(function () {
        var timeId = void 0;
        if (hasGameStarted && isMovingLeft && carPosition > laneOnePosition) {
            setCarAngle(-35);
            timeId = setInterval(function () {
                setCarPosition(function (carPosition) {
                    return carPosition - velocity;
                });
            }, 4);
            checkLane(carPosition);
        }

        if (hasGameStarted && isMovingRight && carPosition < laneThreePosition) {
            setCarAngle(35);
            timeId = setInterval(function () {
                setCarPosition(function (carPosition) {
                    return carPosition + velocity;
                });
            }, 4);
            checkLane(carPosition);
        }
        return function () {
            clearInterval(timeId);
        };
    }, [carPosition, isMovingLeft, isMovingRight, hasGameStarted]);

    // Obstacle one movement
    React.useEffect(function () {
        var obstacleTimeId = void 0;
        if (hasGameStarted && obstacleTop < GAME_HEIGHT) {
            obstacleTimeId = setInterval(function () {
                setObstacleTop(function (obstacleTop) {
                    return obstacleTop + obstacleVelocity;
                });
                setScore(function (score) {
                    return score + obstacleVelocity * 0.025;
                });
            }, 16.66);

            return function () {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePosition(getLanePosition(randomLane));
            setObstacleTop(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTop]);

    // Obstacle two movement
    React.useEffect(function () {
        var obstacleTimeId = void 0;
        if (hasGameStarted && obstacleTopTwo < GAME_HEIGHT) {
            obstacleTimeId = setInterval(function () {
                setObstacleTopTwo(function (obstacleTopTwo) {
                    return obstacleTopTwo + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionTwo(getLanePosition(randomLane));
            setObstacleTopTwo(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopTwo]);

    // Obstacle three movement
    React.useEffect(function () {
        var obstacleTimeId = void 0;
        if (hasGameStarted && obstacleTopThree < GAME_HEIGHT) {
            obstacleTimeId = setInterval(function () {
                setObstacleTopThree(function (obstacleTopThree) {
                    return obstacleTopThree + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionThree(getLanePosition(randomLane));
            setObstacleTopThree(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopThree]);

    // Obstacle four movement
    React.useEffect(function () {
        var obstacleTimeId = void 0;
        if (hasGameStarted && obstacleTopFour < GAME_HEIGHT) {
            obstacleTimeId = setInterval(function () {
                setObstacleTopFour(function (obstacleTopFour) {
                    return obstacleTopFour + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionFour(getLanePosition(randomLane));
            setObstacleTopFour(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopFour]);

    // Coin movement
    React.useEffect(function () {
        var coinTimeId = void 0;
        if (hasGameStarted && coinTop < GAME_HEIGHT) {
            coinTimeId = setInterval(function () {
                setCoinTop(function (coinTop) {
                    return coinTop + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(coinTimeId);
            };
        } else if (coinCollected || coinTop >= GAME_HEIGHT) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setCoinPosition(getLanePosition(randomLane));
            setCoinTop(-OBSTACLE_SIZE);
            setCoinCollected(false);
        }
    }, [hasGameStarted, coinTop]);

    // Coin two movement
    React.useEffect(function () {
        var coinTimeId = void 0;
        if (hasGameStarted && coinTopTwo < GAME_HEIGHT) {
            coinTimeId = setInterval(function () {
                setCoinTopTwo(function (coinTopTwo) {
                    return coinTopTwo + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(coinTimeId);
            };
        } else if (coinCollectedTwo || coinTopTwo >= GAME_HEIGHT) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setCoinPositionTwo(getLanePosition(randomLane));
            setCoinTopTwo(-OBSTACLE_SIZE);
            setCoinCollectedTwo(false);
        }
    }, [hasGameStarted, coinTopTwo]);

    // Collision detection
    // The only elements of the dependency array are for obstacle one since all
    // the obstacles update at the same time.
    React.useEffect(function () {
        var hasCollidedOne = collisionBoolean(obstacleTop, obstaclePosition);
        var hasCollidedTwo = collisionBoolean(obstacleTopTwo, obstaclePositionTwo);
        var hasCollidedThree = collisionBoolean(obstacleTopThree, obstaclePositionThree);
        var hasCollidedFour = collisionBoolean(obstacleTopFour, obstaclePositionFour);
        var hasCollidedCoinOne = collisionBoolean(coinTop, coinPosition);
        var hasCollidedCoinTwo = collisionBoolean(coinTopTwo, coinPositionTwo);

        if (hasCollidedOne || hasCollidedTwo || hasCollidedThree || hasCollidedFour) {
            setHasGameStarted(false);
        }
        if (hasCollidedCoinOne && !coinCollected) {
            setCoinCollected(true);
            setCoinCount(function (coinCount) {
                return coinCount + 1;
            });
        }
        if (hasCollidedCoinTwo && !coinCollectedTwo) {
            setCoinCollectedTwo(true);
            setCoinCount(function (coinCount) {
                return coinCount + 1;
            });
        }
    }, [obstacleTop, obstaclePosition, carPosition]);

    // Velocity increase based on score
    React.useEffect(function () {
        if (Math.floor(score) % 50 === 0 && Math.floor(score) !== 0) {
            setVelocity(function (velocity) {
                return velocity + 0.066;
            });
            setObstacleVelocity(function (obstacleVelocity) {
                return obstacleVelocity + 0.025;
            });
        }
    }, [score]);

    // Move background
    React.useEffect(function () {
        var backgroundTimeId = void 0;
        if (hasGameStarted && backgroundPosition < 0) {
            backgroundTimeId = setInterval(function () {
                setBackgroundPosition(function (backgroundPosition) {
                    return backgroundPosition + obstacleVelocity;
                });
            }, 16.66);

            return function () {
                clearInterval(backgroundTimeId);
            };
        } else if (hasGameStarted) {
            setBackgroundPosition(-GAME_HEIGHT);
        }
    }, [hasGameStarted, obstacleVelocity, backgroundPosition]);

    // Handle arroy keys
    var handleKey = function handleKey(e) {
        if (e.key === "ArrowLeft") {
            setIsMovingLeft(true);
            setIsMovingRight(false);
        } else if (e.key === "ArrowRight") {
            setIsMovingRight(true);
            setIsMovingLeft(false);
        }
    };

    var restart = function restart() {
        setHasGameStarted(true);
        setCoinCount(0);
        setScore(0);
        setVelocity(4);
        setObstacleVelocity(2.66);
        setCarPosition(laneTwoPosition);
        setCarLane(2);
        setCarAngle(0);
        setIsMovingLeft(false);
        setIsMovingRight(false);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setObstaclePosition(getLanePosition(randomLane));
        setObstacleTop(-OBSTACLE_SIZE);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setObstaclePositionTwo(getLanePosition(randomLane));
        setObstacleTopTwo(-OBSTACLE_SIZE - GAME_HEIGHT / 3);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setObstaclePositionThree(getLanePosition(randomLane));
        setObstacleTopThree(-OBSTACLE_SIZE - 2 * GAME_HEIGHT / 3);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setObstaclePositionFour(getLanePosition(randomLane));
        setObstacleTopFour(-OBSTACLE_SIZE - 2 * GAME_HEIGHT / 3);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setCoinPosition(getLanePosition(randomLane));
        setCoinTop(-OBSTACLE_SIZE - GAME_HEIGHT / 6);
        setCoinCollected(false);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setCoinPositionTwo(getLanePosition(randomLane));
        setCoinTopTwo(-OBSTACLE_SIZE - 5 * GAME_HEIGHT / 6 - 15);
        setCoinCollectedTwo(false);

        setBackgroundPosition(-GAME_HEIGHT);
    };

    // Handle swipe gestures
    var handlers = swipeable.useSwipeable({
        onSwipedLeft: function onSwipedLeft() {
            setIsMovingLeft(true);
            setIsMovingRight(false);
        },
        onSwipedRight: function onSwipedRight() {
            setIsMovingRight(true);
            setIsMovingLeft(false);
        },
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    // check car position to see if it has reached a lane,
    // and if so, set the car lane to that lane and the position to the center of that lane
    var checkLane = function checkLane(carPosition) {
        if (carLane != 1 && carPosition < laneOnePosition + velocity && carPosition > laneOnePosition - velocity) {
            setCarLane(1);
            setCarAngle(0);
            setIsMovingLeft(false);
            setIsMovingRight(false);
            setCarPosition(laneOnePosition);
            // console.log('done moving to lane 1');
            // console.log(carLane);
        } else if (carLane != 2 && carPosition < laneTwoPosition + velocity && carPosition > laneTwoPosition - velocity) {
            setCarLane(2);
            setCarAngle(0);
            setIsMovingLeft(false);
            setIsMovingRight(false);
            setCarPosition(laneTwoPosition);
            // console.log('done moving to lane 2');
            // console.log(carLane);
        } else if (carLane != 3 && carPosition < laneThreePosition + velocity && carPosition > laneThreePosition - velocity) {
            setCarLane(3);
            setCarAngle(0);
            setIsMovingLeft(false);
            setIsMovingRight(false);
            setCarPosition(laneThreePosition);
            // console.log('done moving to lane 3');
            // console.log(carLane);
        }
    };

    // hacky collison detection for the car,
    // but I can't be bothered to account for the cone shape and rotation
    var collisionBoolean = function collisionBoolean(top, positon) {
        return top + OBSTACLE_SIZE >= CAR_TOP + obstacleVelocity && top <= CAR_TOP + CAR_SIZE - obstacleVelocity && positon + OBSTACLE_SIZE / 3 >= carPosition - velocity && positon <= carPosition + CAR_SIZE / 3 + velocity;
    };

    // Add leading zeros to the score
    var addLeadingZeros = function addLeadingZeros(score, num) {
        score = score.toString();
        while (score.length < num) {
            score = "0" + score;
        }
        return score;
    };

    return React.createElement(
        Container,
        Object.assign({ ref: focusElement, tabIndex: "0", onKeyDown: handleKey }, handlers),
        React.createElement(
            Arena,
            { height: GAME_HEIGHT, width: GAME_WIDTH },
            React.createElement(Background, {
                src: "./img/bg.png",
                top: backgroundPosition
            }),
            React.createElement(Obstacle, {
                id: "1",
                lane: obstaclePosition,
                size: OBSTACLE_SIZE,
                top: obstacleTop
            }),
            React.createElement(Obstacle, {
                id: "2",
                lane: obstaclePositionTwo,
                size: OBSTACLE_SIZE,
                top: obstacleTopTwo
            }),
            React.createElement(Obstacle, {
                id: "3",
                lane: obstaclePositionThree,
                size: OBSTACLE_SIZE,
                top: obstacleTopThree
            }),
            React.createElement(Obstacle, {
                id: "4",
                lane: obstaclePositionFour,
                size: OBSTACLE_SIZE,
                top: obstacleTopFour
            }),
            React.createElement(Coin, {
                lane: coinPosition,
                size: OBSTACLE_SIZE,
                top: coinTop,
                isCollected: coinCollected
            }),
            React.createElement(Coin, {
                lane: coinPositionTwo,
                size: OBSTACLE_SIZE,
                top: coinTopTwo,
                isCollected: coinCollectedTwo
            }),
            React.createElement(Car, {
                className: "car",
                size: CAR_SIZE,
                lane: carPosition,
                top: CAR_TOP,
                angle: carAngle
            }),
            React.createElement(
                "span",
                null,
                addLeadingZeros(Math.floor(score), 4)
            ),
            React.createElement("span", { id: "icon" }),
            React.createElement(
                "span",
                { id: "coin_coint" },
                addLeadingZeros(coinCount, 3)
            ),
            React.createElement(
                GameEndScreen,
                { isGameEnd: !hasGameStarted, onClick: restart },
                React.createElement(
                    "div",
                    { id: "game_over" },
                    "Game Over"
                ),
                React.createElement(
                    "div",
                    { id: "score" },
                    "Score: ",
                    addLeadingZeros(Math.floor(score), 4)
                ),
                React.createElement(
                    "div",
                    { id: "puff_points" },
                    "Puff Points: ",
                    addLeadingZeros(coinCount, 3)
                ),
                React.createElement("div", { id: "restart_button" })
            )
        )
    );
}

var Car = styled.div(_templateObject, function (props) {
    return props.angle;
}, function (props) {
    return props.size * 1.2;
}, function (props) {
    return props.size;
}, function (props) {
    return props.lane;
}, function (props) {
    return props.top;
});

var Container = styled.div(_templateObject2);

var Arena = styled.div(_templateObject3, function (props) {
    return props.height;
}, function (props) {
    return props.width;
});

var Obstacle = styled.div(_templateObject4, function (props) {
    return props.size;
}, function (props) {
    return props.size;
}, function (props) {
    return props.top;
}, function (props) {
    return props.lane;
});

var Coin = styled.div(_templateObject5, function (props) {
    return props.size;
}, function (props) {
    return props.size;
}, function (props) {
    return props.top;
}, function (props) {
    return props.lane;
}, function (props) {
    return props.isCollected ? "hidden" : "visible";
});

var Background = styled.div(_templateObject6, function (props) {
    return props.top;
});

var GameEndScreen = styled.div(_templateObject7, function (props) {
    return props.isGameEnd ? "visible" : "hidden";
});

var domContainer = document.querySelector("#game_container");
var root = ReactDOM.createRoot(domContainer);
ReactDOM.render(React.createElement(App), domContainer);