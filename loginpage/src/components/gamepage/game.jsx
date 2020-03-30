import React from 'react';
import './game.scss'
import logo from '../../assets/mvidia-playground-white.png';
import goback from '../../assets/goback.png';
import GameSnake from '../games/snake' 


class game extends React.Component {

    handleKeysUpAndDown = (event) => {
        //... rest of your code
        event.preventDefault();
        event.stopPropagation()
    }

    render() {


        // template / dynamic page voor game - pages
        //     - thumb, desc, title, score ? difficulty ?, scoreboard user en algemeen
        //     - voeg info via json handmatig ? of via cms adminpage ?


        return (
            <div onKeyDown={this.handleKeysUpAndDown} onKeyUp={this.handleKeysUpAndDown}>
                <div className="game" onKeyDown={this.handleKeysUpAndDown} onKeyUp={this.handleKeysUpAndDown}>
                    <div className="game_header">
                        <div className="game_header_logo"><img src={logo} alt=""/></div>

                        <div className="game_header_title">
                            <h1>game title</h1></div>
                        <a href="./gamedashboard">
                            <div className="game_header_goback">
                                <img src={goback} alt="" />
                                <p>back to game</p> <p>dashboard</p>
                            </div>
                        </a>
                    </div>
                    <div className="game_main">
                        <div className="game_main_description"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                        {/* <div className="game_main_game">placeholder game</div> */}
                        <GameSnake />

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
