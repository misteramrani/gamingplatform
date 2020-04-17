import React from 'react';
import './game.scss'
import logo from '../../assets/mvidia-playground-white.png';
import goback from '../../assets/goback.png';
import GameSnake from '../games/snake';
import GameTweety from '../games/tweety';
import GameComingSoon from '../games/comingsoon';
import ReactDOM from 'react-dom'
import '../games/snake.jsx'


class game extends React.Component {
    // const Map = {
    //     "GameSnake": GameSnake
    // }
    constructor(props) {
        super(props);

        console.log(this.props.location.state)
        this.state = {
            gameTitle: this.props.location.state.title,
            gameDesc: this.props.location.state.description,
            gameName: this.props.location.state.game_name
        }


        console.log(this.state)
    }

    // getComponent() {
    //     console.log(this.state.gameName)
    //     let component;
    //     switch (this.state.gameName) {
    //         case 'GameSnake':
    //             component = <GameSnake />;
    //             break;
    //         case 'GameTweety':
    //             component = <GameTweety />;
    //             break;
    //         case 'GameTG':
    //             component = <GameComingSoon />;
    //             break;
    //         case 'GameTicTacToe':
    //             component = <GameComingSoon />;
    //             break;
    //         case 'GameSing':
    //             component = <GameComingSoon />;
    //             break;
    //         case 'GameFlappyGoat':
    //             component = <GameComingSoon />;
    //             break;
    //         default:
    //             break;
    //     }
    //     return component;
    // }

    // function2() {
    //     const TestComponent = Components[this.state.gameLink];
    //     return React.createElement(TestComponent, {})

    //     switch(this.state.gameLink) {
    //         case "GameSnake": return  <GameSnake />
    //         default: return <GameSnake />
    //     }
    //     console.log(this.state.gameLink)
    //     // return <this.state.gameLink />
    // }

    componentDidMount() {
        this.focusDiv();
    }


    focusDiv() {
        ReactDOM.findDOMNode(this.refs.theDiv).focus();
    }

    handleKeysUpAndDown = (e) => {
        e.preventDefault();
    }



    render() {

        // template / dynamic page voor game - pages
        //     - thumb, desc, title, score ? difficulty ?, scoreboard user en algemeen
        //     - voeg info via json handmatig ? of via cms adminpage ?


        return (
            <div tabIndex="0" onKeyDown={this.handleKeysUpAndDown} onKeyUp={this.handleKeysUpAndDown} ref="theDiv">
                <div className="game" onKeyDown={this.handleKeysUpAndDown} onKeyUp={this.handleKeysUpAndDown}>
                    <div className="game_header">
                        <div className="game_header_logo"><img src={logo} alt="" /></div>

                        <div className="game_header_title">
                            <h1>{this.state.gameTitle}</h1></div>
                        <a href="./gamedashboard">
                            <div className="game_header_goback">
                                <img src={goback} alt="" />
                                <p>back to game</p> <p>dashboard</p>
                            </div>
                        </a>
                    </div>
                    <div className="game_main">
                        <div className="game_main_description"><p>{this.state.gameDesc}</p></div>
                        {/* <div className="game_main_game">placeholder game</div> */}

                        {/* {this.getComponent()} */}
                        <GameSnake />
                        {/* {this.function2()} */}
                        {/* {React.createElement(this.state.gameLink)} */}

                    </div>
                    <div className="game_footer">
                        <div className="game_footer_scores">
                            hier komen de scores
                            {/* your scores
                            overall scores */}
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}
export default game;
