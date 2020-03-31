import React from 'react';
import './tweety.css';


class GameTweety extends React.Component {

    state = {
        tickTime: 130,
        rows: 25,
        cols: 25,
        grid: [],
        food: {},
        snake: {
            head: {},
            tail: [],
        },
        currentDirection: 'right',
        die: false,
        score: 0,
        scoreFactor: 10,
    };

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    getRandomGrid() {
        return {
            row: Math.floor((Math.random() * this.state.rows)),
            col: Math.floor((Math.random() * this.state.cols))
        }
    }

    // TODO: snake and food begins at the center
    getCenterOfGrid() {
        return {
            row: Math.floor((this.state.rows - 1) / 2),
            col: 0,
        }
    }

    updateGrid(state = {}, sendBack = false) {

        if (!Object.keys(state).length) {
            state = this.state;
        }

        const grid = [];
        const {
            rows,
            cols,
            food,
            snake
        } = state;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const isFood = (food.row === row && food.col === col);
                const isHead = (snake.head.row === row && snake.head.col === col);
                let isTail = false;

                snake.tail.forEach(t => {
                    if (t.row === row && t.col === col) {
                        isTail = true;
                    }
                })

                grid.push({
                    row,
                    col,
                    isFood,
                    isHead,
                    isTail,
                })
            }
        }

        if (sendBack) {
            return grid;
        } else {
            this.setState({
                grid
            })
        }
    }

    gameTick() {
        this.setState((state) => {
            let {
                currentDirection,
                snake,
                food,
                tickTime
            } = state;
            let {
                tail
            } = snake;

            const {
                row,
                col
            } = state.snake.head;
            let head = {
                row,
                col
            };

            if (state.score === 50 ){
console.log('fg');
                tickTime = 200;
            }

            // When game ove is shown, stop the tick
            if (state.die) {
                clearInterval(window.fnInterval);
            }

            // Snake eats

            // setstate score+10

            tail.unshift({
                row: head.row,
                col: head.col,
            })

            // Snake does potty, only when not eating
            if (head.row === state.food.row && head.col === state.food.col) {
                food = this.getRandomGrid();
                // iets met score doen
            } else {
                tail.pop();
            }

            // Snake moves head
            switch (currentDirection) {
                case 'left':
                    head.col--;
                    break;

                case 'up':
                    head.row--;
                    break;

                case 'down':
                    head.row++;
                    break;

                case 'right':
                default:
                    head.col++;
                    break;
            }

            const newState = {
                ...state,
                food,
                tickTime,
                snake: {
                    head,
                    tail
                }
            }

            // In new state, check if die conditions are met
            let die = false;
            if (newState.snake.head.row < 0 ||
                newState.snake.head.row >= this.state.rows ||
                newState.snake.head.col < 0 ||
                newState.snake.head.col >= this.state.rows
            ) {
                die = true;
            }

            const grid = this.updateGrid(newState, true);
            const score = newState.snake.tail.length * newState.scoreFactor;

            return {
                ...newState,
                die,
                grid,
                score,
                // tickTime
            }
        });

    }

    handleKeyPress(e) {
        let {
            currentDirection
        } = this.state;

        switch (e.keyCode) {
            case 37:
                currentDirection = 'left';
                break;

            case 38:
                currentDirection = 'up';
                break;

            case 39:
            default:
                currentDirection = 'right';
                break;

            case 40:
                currentDirection = 'down';
                break;
        }

        const newState = {
            ...this.state,
            currentDirection,
        }
        const grid = this.updateGrid(newState, true);


        this.setState(state => {
            return {
                ...newState,
                grid
            }
        })
    }

    componentDidMount() {

        document.body.addEventListener('keydown', this.handleKeyPress);

        this.setState((state) => {
            const newState = {
                ...state,
                food: this.getRandomGrid(),
                snake: {
                    head: this.getCenterOfGrid(),
                    tail: state.snake.tail
                }
            };
            const grid = this.updateGrid(newState, true);
            return {
                ...newState,
                grid,
            }
        });

        // this.updateGrid();

        // Set tick
        window.fnInterval = setInterval(() => {
            this.gameTick();
        }, this.state.tickTime);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyPress);
        clearInterval(window.fnInterval);

    }

    // const newArray;
    // for (let i=0; i<grid.length; i++) {
    //     let value = grid[i];
    //     if (value !=== "bla") {
    //         newArray = [];
    //     }
    //     // logica uitvoeren
    // }

    // function bla() {
    //     return [];
    // }
    // () => {
    //     return [];
    // }
    // const newArray = grid.map((value) => {
    //     // logica uitvoeren
    //     if (value !=="bla") {
    //         return [];
    //     }
    // })

    render() {
        let gridContent = this.state.grid.map((grid) => {
            return <div
                key={grid.row.toString() + '-' + grid.col.toString()}
                className={
                    grid.isHead && this.state.currentDirection==='right'
                        ? 'gridItem is-head' : grid.isHead && this.state.currentDirection === 'up'
                            ? 'gridItem is-head-up' : grid.isHead && this.state.currentDirection === 'down'
                                ? 'gridItem is-head-down' : grid.isHead && this.state.currentDirection === 'left'
                                    ? 'gridItem is-head-left' : grid.isTail
                                        ? 'gridItem is-tail' : grid.isFood
                                            ? 'gridItem is-food' : 'gridItem'
                }></div>
        });
        if (this.state.die) {
            gridContent = <div className="grid-message">
                {/* <h1>Game Over</h1> */}
            </div>;
        };
        return (
            <div className="snake-container wrapper">
                <div className="grid-header">
                    <h1>SCORE <span>{this.state.score}</span></h1>
                </div>
                <div className={this.state.score >= 600 ? "grid-level4" : this.state.score >= 300 ? "grid-level3" : this.state.score >= 100 ? "grid-level2" : "grid"}>{gridContent}</div>
            </div>
        );
    }
}

export default GameTweety;