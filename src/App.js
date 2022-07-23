"use strict";

const CAR_SIZE = 40;
const GAME_WIDTH = 375;
const GAME_HEIGHT = 375;
const OBSTACLE_SIZE = 40;
const CAR_TOP = (2 * GAME_HEIGHT) / 3 - CAR_SIZE / 2;

const laneOnePosition = GAME_WIDTH / 5 - CAR_SIZE / 2;
const laneTwoPosition = GAME_WIDTH / 2 - CAR_SIZE / 2;
const laneThreePosition = (4 * GAME_WIDTH) / 5 - CAR_SIZE / 2;

let randomLane = Math.floor(Math.random() * 3) + 1;
let carLeft = 0;

// Helper to get the pixel position of the lane number
const getLanePosition = (laneNumber) => {
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
    const [carPosition, setCarPosition] = React.useState(laneTwoPosition);
    const [carLane, setCarLane] = React.useState(2);
    const [carAngle, setCarAngle] = React.useState(0);

    const [isMovingLeft, setIsMovingLeft] = React.useState(false);
    const [isMovingRight, setIsMovingRight] = React.useState(false);
    const [hasGameStarted, setHasGameStarted] = React.useState(true);
    const [score, setScore] = React.useState(0);
    const [velocity, setVelocity] = React.useState(4);
    const [obstacleVelocity, setObstacleVelocity] = React.useState(2.66);

    const [obstaclePosition, setObstaclePosition] = React.useState(getLanePosition(randomLane));
    const [obstacleTop, setObstacleTop] = React.useState(-OBSTACLE_SIZE);
    randomLane = Math.floor(Math.random() * 3) + 1;
    const [obstaclePositionTwo, setObstaclePositionTwo] = React.useState(
        getLanePosition(randomLane)
    );
    const [obstacleTopTwo, setObstacleTopTwo] = React.useState(-OBSTACLE_SIZE - GAME_HEIGHT / 3);
    randomLane = Math.floor(Math.random() * 3) + 1;
    const [obstaclePositionThree, setObstaclePositionThree] = React.useState(
        getLanePosition(randomLane)
    );
    const [obstacleTopThree, setObstacleTopThree] = React.useState(
        -OBSTACLE_SIZE - (2 * GAME_HEIGHT) / 3
    );
    randomLane = Math.floor(Math.random() * 3) + 1;
    const [obstaclePositionFour, setObstaclePositionFour] = React.useState(
        getLanePosition(randomLane)
    );
    const [obstacleTopFour, setObstacleTopFour] = React.useState(
        -OBSTACLE_SIZE - (2 * GAME_HEIGHT) / 3
    );

    randomLane = Math.floor(Math.random() * 3) + 1;
    const [coinTop, setCoinTop] = React.useState(-OBSTACLE_SIZE - GAME_HEIGHT / 6);
    const [coinPosition, setCoinPosition] = React.useState(getLanePosition(randomLane));
    const [coinCollected, setCoinCollected] = React.useState(false);

    randomLane = Math.floor(Math.random() * 3) + 1;
    const [coinTopTwo, setCoinTopTwo] = React.useState(-OBSTACLE_SIZE - (5 * GAME_HEIGHT) / 6 - 15);
    const [coinPositionTwo, setCoinPositionTwo] = React.useState(getLanePosition(randomLane));
    const [coinCollectedTwo, setCoinCollectedTwo] = React.useState(false);
    const [coinCount, setCoinCount] = React.useState(0);

    const [backgroundPosition, setBackgroundPosition] = React.useState(-GAME_HEIGHT);

    // Focuses on the game Container by default.
    const focusElement = React.useRef(null);
    React.useEffect(() => {
        if (focusElement.current) {
            focusElement.current.focus();
        }
    }, []);

    // Handles arrow key presses
    React.useEffect(() => {
        let timeId;
        if (hasGameStarted && isMovingLeft && carPosition > laneOnePosition) {
            setCarAngle(-35);
            timeId = setInterval(() => {
                setCarPosition((carPosition) => carPosition - velocity);
            }, 4);
            checkLane(carPosition);
        }

        if (hasGameStarted && isMovingRight && carPosition < laneThreePosition) {
            setCarAngle(35);
            timeId = setInterval(() => {
                setCarPosition((carPosition) => carPosition + velocity);
            }, 4);
            checkLane(carPosition);
        }
        return () => {
            clearInterval(timeId);
        };
    }, [carPosition, isMovingLeft, isMovingRight, hasGameStarted]);

    // Obstacle one movement
    React.useEffect(() => {
        let obstacleTimeId;
        if (hasGameStarted && obstacleTop < GAME_HEIGHT) {
            obstacleTimeId = setInterval(() => {
                setObstacleTop((obstacleTop) => obstacleTop + obstacleVelocity);
                setScore((score) => score + obstacleVelocity * 0.025);
            }, 16.66);

            return () => {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePosition(getLanePosition(randomLane));
            setObstacleTop(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTop]);

    // Obstacle two movement
    React.useEffect(() => {
        let obstacleTimeId;
        if (hasGameStarted && obstacleTopTwo < GAME_HEIGHT) {
            obstacleTimeId = setInterval(() => {
                setObstacleTopTwo((obstacleTopTwo) => obstacleTopTwo + obstacleVelocity);
            }, 16.66);

            return () => {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionTwo(getLanePosition(randomLane));
            setObstacleTopTwo(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopTwo]);

    // Obstacle three movement
    React.useEffect(() => {
        let obstacleTimeId;
        if (hasGameStarted && obstacleTopThree < GAME_HEIGHT) {
            obstacleTimeId = setInterval(() => {
                setObstacleTopThree((obstacleTopThree) => obstacleTopThree + obstacleVelocity);
            }, 16.66);

            return () => {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionThree(getLanePosition(randomLane));
            setObstacleTopThree(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopThree]);

    // Obstacle four movement
    React.useEffect(() => {
        let obstacleTimeId;
        if (hasGameStarted && obstacleTopFour < GAME_HEIGHT) {
            obstacleTimeId = setInterval(() => {
                setObstacleTopFour((obstacleTopFour) => obstacleTopFour + obstacleVelocity);
            }, 16.66);

            return () => {
                clearInterval(obstacleTimeId);
            };
        } else if (hasGameStarted) {
            randomLane = Math.floor(Math.random() * 3) + 1;
            setObstaclePositionFour(getLanePosition(randomLane));
            setObstacleTopFour(-OBSTACLE_SIZE);
        }
    }, [hasGameStarted, obstacleTopFour]);

    // Coin movement
    React.useEffect(() => {
        let coinTimeId;
        if (hasGameStarted && coinTop < GAME_HEIGHT) {
            coinTimeId = setInterval(() => {
                setCoinTop((coinTop) => coinTop + obstacleVelocity);
            }, 16.66);

            return () => {
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
    React.useEffect(() => {
        let coinTimeId;
        if (hasGameStarted && coinTopTwo < GAME_HEIGHT) {
            coinTimeId = setInterval(() => {
                setCoinTopTwo((coinTopTwo) => coinTopTwo + obstacleVelocity);
            }, 16.66);

            return () => {
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
    React.useEffect(() => {
        const hasCollidedOne = collisionBoolean(obstacleTop, obstaclePosition);
        const hasCollidedTwo = collisionBoolean(obstacleTopTwo, obstaclePositionTwo);
        const hasCollidedThree = collisionBoolean(obstacleTopThree, obstaclePositionThree);
        const hasCollidedFour = collisionBoolean(obstacleTopFour, obstaclePositionFour);
        const hasCollidedCoinOne = collisionBoolean(coinTop, coinPosition);
        const hasCollidedCoinTwo = collisionBoolean(coinTopTwo, coinPositionTwo);

        if (hasCollidedOne || hasCollidedTwo || hasCollidedThree || hasCollidedFour) {
            setHasGameStarted(false);
        }
        if (hasCollidedCoinOne && !coinCollected) {
            setCoinCollected(true);
            setCoinCount((coinCount) => coinCount + 1);
        }
        if (hasCollidedCoinTwo && !coinCollectedTwo) {
            setCoinCollectedTwo(true);
            setCoinCount((coinCount) => coinCount + 1);
        }
    }, [obstacleTop, obstaclePosition, carPosition]);

    // Velocity increase based on score
    React.useEffect(() => {
        if (Math.floor(score) % 50 === 0 && Math.floor(score) !== 0) {
            setVelocity((velocity) => velocity + 0.066);
            setObstacleVelocity((obstacleVelocity) => obstacleVelocity + 0.025);
        }
    }, [score]);

    // Move background
    React.useEffect(() => {
        let backgroundTimeId;
        if (hasGameStarted && backgroundPosition < 0) {
            backgroundTimeId = setInterval(() => {
                setBackgroundPosition(
                    (backgroundPosition) => backgroundPosition + obstacleVelocity
                );
            }, 16.66);

            return () => {
                clearInterval(backgroundTimeId);
            };
        } else if (hasGameStarted) {
            setBackgroundPosition(-GAME_HEIGHT);
        }
    }, [hasGameStarted, obstacleVelocity, backgroundPosition]);

    // Handle arroy keys
    const handleKey = (e) => {
        if (e.key === "ArrowLeft") {
            setIsMovingLeft(true);
            setIsMovingRight(false);
        } else if (e.key === "ArrowRight") {
            setIsMovingRight(true);
            setIsMovingLeft(false);
        }
    };

    const restart = () => {
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
        setObstacleTopThree(-OBSTACLE_SIZE - (2 * GAME_HEIGHT) / 3);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setObstaclePositionFour(getLanePosition(randomLane));
        setObstacleTopFour(-OBSTACLE_SIZE - (2 * GAME_HEIGHT) / 3);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setCoinPosition(getLanePosition(randomLane));
        setCoinTop(-OBSTACLE_SIZE - GAME_HEIGHT / 6);
        setCoinCollected(false);

        randomLane = Math.floor(Math.random() * 3) + 1;
        setCoinPositionTwo(getLanePosition(randomLane));
        setCoinTopTwo(-OBSTACLE_SIZE - (5 * GAME_HEIGHT) / 6 - 15);
        setCoinCollectedTwo(false);

        setBackgroundPosition(-GAME_HEIGHT);
    };

    // Handle swipe gestures
    const handlers = swipeable.useSwipeable({
        onSwipeStart: (eventData) => {
            if (eventData.dir === "Right") {
                setIsMovingRight(true);
                setIsMovingLeft(false);
            } else if (eventData.dir === "Left") {
                setIsMovingLeft(true);
                setIsMovingRight(false);
            }
        },
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    // check car position to see if it has reached a lane,
    // and if so, set the car lane to that lane and the position to the center of that lane
    const checkLane = (carPosition) => {
        if (
            carLane != 1 &&
            carPosition < laneOnePosition + velocity &&
            carPosition > laneOnePosition - velocity
        ) {
            setCarLane(1);
            setCarAngle(0);
            setIsMovingLeft(false);
            setIsMovingRight(false);
            setCarPosition(laneOnePosition);
            // console.log('done moving to lane 1');
            // console.log(carLane);
        } else if (
            carLane != 2 &&
            carPosition < laneTwoPosition + velocity &&
            carPosition > laneTwoPosition - velocity
        ) {
            setCarLane(2);
            setCarAngle(0);
            setIsMovingLeft(false);
            setIsMovingRight(false);
            setCarPosition(laneTwoPosition);
            // console.log('done moving to lane 2');
            // console.log(carLane);
        } else if (
            carLane != 3 &&
            carPosition < laneThreePosition + velocity &&
            carPosition > laneThreePosition - velocity
        ) {
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
    const collisionBoolean = (top, positon) => {
        return (
            top + OBSTACLE_SIZE >= CAR_TOP + obstacleVelocity &&
            top <= CAR_TOP + CAR_SIZE - obstacleVelocity &&
            positon + OBSTACLE_SIZE / 3 >= carPosition - velocity &&
            positon <= carPosition + CAR_SIZE / 3 + velocity
        );
    };

    // Add leading zeros to the score
    const addLeadingZeros = (score, num) => {
        score = score.toString();
        while (score.length < num) {
            score = "0" + score;
        }
        return score;
    };

    return (
        <Container ref={focusElement} tabIndex="0" onKeyDown={handleKey} {...handlers}>
            <Arena height={GAME_HEIGHT} width={GAME_WIDTH}>
                <Background src={"./img/bg.png"} top={backgroundPosition} />
                <Obstacle id="1" lane={obstaclePosition} size={OBSTACLE_SIZE} top={obstacleTop} />
                <Obstacle
                    id="2"
                    lane={obstaclePositionTwo}
                    size={OBSTACLE_SIZE}
                    top={obstacleTopTwo}
                />
                <Obstacle
                    id="3"
                    lane={obstaclePositionThree}
                    size={OBSTACLE_SIZE}
                    top={obstacleTopThree}
                />
                <Obstacle
                    id="4"
                    lane={obstaclePositionFour}
                    size={OBSTACLE_SIZE}
                    top={obstacleTopFour}
                />
                <Coin
                    lane={coinPosition}
                    size={OBSTACLE_SIZE}
                    top={coinTop}
                    isCollected={coinCollected}
                />
                <Coin
                    lane={coinPositionTwo}
                    size={OBSTACLE_SIZE}
                    top={coinTopTwo}
                    isCollected={coinCollectedTwo}
                />
                <Car
                    className="car"
                    size={CAR_SIZE}
                    lane={carPosition}
                    top={CAR_TOP}
                    angle={carAngle}
                />
                <span>{addLeadingZeros(Math.floor(score), 4)}</span>
                <span id="icon"></span>
                <span id="coin_coint">{addLeadingZeros(coinCount, 3)}</span>
                <GameEndScreen isGameEnd={!hasGameStarted} onClick={restart}>
                    <div id="game_over">Game Over</div>
                    <div id="score">Score: {addLeadingZeros(Math.floor(score), 4)}</div>
                    <div id="puff_points">Puff Points: {addLeadingZeros(coinCount, 3)}</div>
                    <div id="restart_button"></div>
                </GameEndScreen>
            </Arena>
        </Container>
    );
}

const Car = styled.div`
    position: relative;
    background-image: url("./img/car.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(${(props) => props.angle}deg);
    // background-color: red;
    height: ${(props) => props.size * 1.2}px;
    width: ${(props) => props.size}px;
    left: ${(props) => props.lane}px;
    top: ${(props) => props.top}px;
    // border-radius: 50%;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    outline: none;
    & #coin_coint {
        position: absolute;
        left: 83.5%;
        top: 4%;
        text-align: center;
        font-family: bitcount-mono-single-square, monospace;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0.1rem;
        color: #fadf4f;
        font-size: 1.5rem;
        display: inline-block;
    }
    & #icon {
        position: absolute;
        background-image: url("./img/coin.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        left: 76%;
        top: 6%;
        width: 20px;
        height: 20px;
    }
    & span {
        position: absolute;
        left: 7%;
        top: 2%;
        text-align: center;
        font-family: bitcount-mono-single-square, monospace;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0.2rem;
        color: white;
        font-size: 2rem;
        filter: drop-shadow(2px 2px 0 black);
    }
`;

const Arena = styled.div`
    position: relative;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
    overflow: hidden;
`;

const Obstacle = styled.div`
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    left: ${(props) => props.lane}px;
    background-image: url("./img/obstacle.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Coin = styled.div`
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    left: ${(props) => props.lane}px;
    visibility: ${(props) => (props.isCollected ? "hidden" : "visible")};
    background-image: url("./img/coin.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Background = styled.div`
    position: absolute;
    background-image: url("./img/bg.png");
    top: ${(props) => props.top}px;
    width: 100%;
    height: 200%;
`;

const GameEndScreen = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: bitcount-mono-single-square, monospace;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    color: white;
    visibility: ${(props) => (props.isGameEnd ? "visible" : "hidden")};
    & #game_over {
        font-size: 2.5rem;
        font-weight: 600;
        filter: drop-shadow(2px 2px 0 black);
        margin-bottom: -0.2rem;
    }
    & #score {
        font-size: 1.5rem;
        font-weight: 500;
        filter: drop-shadow(1px 1px 0 black);
        letter-spacing: 0;
        margin-bottom: -0.5rem;
    }
    & #puff_points {
        font-size: 1.5rem;
        font-weight: 500;
        filter: drop-shadow(1px 1px 0 black);
        letter-spacing: 0;
        color: #fadf4f;
    }
    & #restart_button {
        background-image: url("./img/restart.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 30%;
        height: 10%;
        cursor: pointer;
`;

let domContainer = document.querySelector("#game_container");
const root = ReactDOM.createRoot(domContainer);
ReactDOM.render(React.createElement(App), domContainer);
