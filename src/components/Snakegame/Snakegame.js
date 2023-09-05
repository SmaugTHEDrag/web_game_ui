import React, { Component,useState } from 'react';
import './Snakegame.css';
class SnakeGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas: null,
      context: null,
      foodPos: [
        Math.floor(Math.random() * 100) * 10,
        Math.floor(Math.random() * 60) * 10,
      ],
      snakePos: [100, 50],
      snakeBody: [[100, 50], [90, 50], [80, 50]],
      direction: "ArrowRight",
      speed: null,
      block: 10,
      over: false,
      score: 0,
      framesPerSecond: 1000 / 30,
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    this.setState({ canvas, context });

    setInterval(() => {
      this.drawObjects();
      this.snakeAnimation();
      this.eatFood();
    }, this.state.framesPerSecond);

    document.addEventListener('keydown', this.snakeDirection, false);
    document.addEventListener('mousedown', () => {
      if (this.state.over) {
        this.resetGame();
      }
    });
  };

  createRectangle = (posX, posY, width, height, color) => {
    this.state.context.fillStyle = color;
    this.state.context.fillRect(posX, posY, width, height);
  };

  drawObjects = () => {
    const { canvas, context, foodPos, snakePos, snakeBody, block, over, score } = this.state;

    if (!canvas || !context) {
      return;
    }

    // Background
    this.createRectangle(0, 0, canvas.width, canvas.height, 'black');

    // Food
    this.createRectangle(foodPos[0], foodPos[1], block, block, 'aqua');

    // Render body
    snakeBody.splice(0, 0, [snakePos[0], snakePos[1]]);
    for (let i = 0; i < snakeBody.length; i++) {
      const body = snakeBody[i];
      this.createRectangle(body[0], body[1], block, block, 'white');
    }

    // Render score
    context.font = "25px sans-serif";
    context.fillText("Score: " + score, 20, 30);

    if (over) {
      this.displayMessage("Game Over");
    }
  };

  snakeDirection = (event) => {
    const { direction } = this.state;
    const changeTo = event.key;

    switch (changeTo) {
      case "ArrowDown":
        if (direction !== "ArrowUp") {
          this.setState({ direction: "ArrowDown" });
        }
        break;
      case "ArrowUp":
        if (direction !== "ArrowDown") {
          this.setState({ direction: "ArrowUp" });
        }
        break;
      case "ArrowLeft":
        if (direction !== "ArrowRight") {
          this.setState({ direction: "ArrowLeft" });
        }
        break;
      case "ArrowRight":
        if (direction !== "ArrowLeft") {
          this.setState({ direction: "ArrowRight" });
        }
        break;
      default:
        console.log("No matching direction");
        return;
    }
  };

  snakeAnimation = () => {
    const { direction, over } = this.state;

    if (over) {
      return;
    }

    switch (direction) {
      case "ArrowDown":
        this.moveSnake(0, 10);
        break;
      case "ArrowUp":
        this.moveSnake(0, -10);
        break;
      case "ArrowLeft":
        this.moveSnake(-10, 0);
        break;
      case "ArrowRight":
        this.moveSnake(10, 0);
        break;
      default:
        console.log("Didn't animate");
        return;
    }

    this.gameOver();
  };

  moveSnake = (x, y) => {
    const { snakePos } = this.state;
    const newSnakePos = [snakePos[0] + x, snakePos[1] + y];
    this.setState({ snakePos: newSnakePos });
  };

  eatFood = () => {
    const { snakePos, foodPos, snakeBody, score } = this.state;
    if (snakePos[0] === foodPos[0] && snakePos[1] === foodPos[1]) {
      const newFoodPos = [
        Math.floor(Math.random() * 72) * 10,
        Math.floor(Math.random() * 48) * 10,
      ];
      const newScore = score + 10;
      this.setState({ foodPos: newFoodPos, score: newScore });
    } else {
      snakeBody.pop();
    }
  };

  gameOver = () => {
    const { snakePos, canvas, over, snakeBody } = this.state;

    if (snakePos[0] > canvas.width - 10 || snakePos[0] < 0) {
      this.setState({ over: true });
    } else if (snakePos[1] > canvas.height - 10 || snakePos[1] < 0) {
      this.setState({ over: true });
    }

    for (let i = 3; i < snakeBody.length; i++) {
      const body = snakeBody[i];
      if (snakePos[0] === body[0] && snakePos[1] === body[1]) {
        this.setState({ over: true });
      }
    }
    
  };

  resetGame = () => {
    const newFoodPos = [
      Math.floor(Math.random() * 72) * 10,
      Math.floor(Math.random() * 48) * 10,
    ];

    this.setState({
      foodPos: newFoodPos,
      snakePos: [100, 50],
      snakeBody: [[100, 50], [90, 50], [80, 50]],
      over: false,
      score: 0,
      direction: "ArrowRight",
    });
  };

  displayMessage = (message) => {
    const { context } = this.state;
    if (!context) {
      return;
    }

    context.fillStyle = "red";
    context.font = "70px sans-serif";
    context.fillText(message, 550, 250);
    context.font = "40px sans-serif";
    context.fillText("Click to continue", 575, 300);
  };

  render() {
    return (
      <div>
        <canvas id="canvas" width="1400" height="800"></canvas>
      </div>
    );
  }
}

export default SnakeGame;
