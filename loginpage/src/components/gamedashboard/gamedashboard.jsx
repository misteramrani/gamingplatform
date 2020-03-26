import React from 'react';
import './gamedashboard.scss';
import logo from '../../assets/mvidia-playground-white.png';
import banner from '../../assets/ac_banner.jpg';
import thumb_one from '../../assets/thumb_sing.jpg';
import thumb_two from '../../assets/thumb_ttt.jpg';
import thumb_three from '../../assets/thumb_tg.jpg';
import thumb_four from '../../assets/thumb_snake.jpg';
import thumb_five from '../../assets/thumb_flappygoat.jpg';


class gameDashboard extends React.Component {
    render() {

        // - landingpage
        //     - header: scores, naam, avatar (of side, net als My Dell)
        //     - main: met thumbnails etc met games(ook soon coming)
        //     - socials latest

        return (
            <div className="dashboard">
                <aside className="dashboard_hub">
                    <div className="dashboard_hub_logowrapper">

                        <img className="dashboard_hub_logowrapper-logo" src={logo} alt="" />

                    </div>
                    <div className="dashboard_hub_profile">
                        <h1 className="dashboard_hub_profile-welcome">WELCOME BACK</h1>
                        {/* onclick dropdown met logout! */}
                        <h1 className="dashboard_hub_profile-username">Amrani</h1>

                    </div>
                    <div className="dashboard_hub_stats">
                        <h1 className="dashboard_hub_stats-title">YOUR SCORES</h1>

                        {/* hieronder loopen ipv repeating code */}
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">TG - The Rise Of The Donkeys</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">14356</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Let's Sing Like Kim Sing</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">3567</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Tic Tac Toe</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">1200</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Flappy Goat</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">908</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Snake</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">377</h1>
                        </div>

                    </div>
                </aside>
                <main className="dashboard_main">
                    <div className="dashboard_main_header">
                        <div className="dashboard_main_header_banner">
                            {/* maak een carrousel */}
                            <img className="dashboard_main_header_banner-image" src={banner} alt="" />
                        </div>
                        {/* Maak Search werkend. Later ook een andere filter-functie toevoegen om games te filteren */}
                        <div className="dashboard_main_header_search">
                            <input className="dashboard_main_header_search-searchfield" type="text" name="search_field" id="" />
                        </div>
                    </div>
                    <div className="dashboard_main_gameboard">

{/* importing multiple images
https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react */}
                        <div className="dashboard_main_gameboard_game">
                            <div className="dashboard_main_gameboard_game_thumb">
                                <img src={thumb_four} alt=""/>
                            </div>
                            <div className="dashboard_main_gameboard_game_title">Snake</div>
                            <div className="dashboard_main_gameboard_game_score">Your Top Score <span>377</span></div>
                        </div>

                        <div className="dashboard_main_gameboard_game">
                            <div className="dashboard_main_gameboard_game_thumb">
                                <img src={thumb_two} alt="" />
                            </div>
                            <div className="dashboard_main_gameboard_game_title">Tic Tac Toe</div>
                            <div className="dashboard_main_gameboard_game_score">Your Top Score <span>1200</span></div>
                        </div>

                        <div className="dashboard_main_gameboard_game">
                            <div className="dashboard_main_gameboard_game_thumb">
                                <img src={thumb_three} alt="" />
                            </div>
                            <div className="dashboard_main_gameboard_game_title">TG - The Rise Of The Donkeys</div>
                            <div className="dashboard_main_gameboard_game_score">Your Top Score <span>14356</span></div>
                        </div>

                        <div className="dashboard_main_gameboard_game">
                            <div className="dashboard_main_gameboard_game_thumb">
                                <img src={thumb_five} alt="" />
                            </div>
                            <div className="dashboard_main_gameboard_game_title">Flappy Goat</div>
                            <div className="dashboard_main_gameboard_game_score">Your Top Score <span>908</span></div>
                        </div>

                        <div className="dashboard_main_gameboard_game">
                            <div className="dashboard_main_gameboard_game_thumb">
                                <img src={thumb_one} alt="" />
                            </div>
                            <div className="dashboard_main_gameboard_game_title">Let's Sing Like Kim Sing</div>
                            <div className="dashboard_main_gameboard_game_score">Your Top Score <span>3567</span></div>
                        </div>

                    </div>
                </main>

            </div >
        )

    }
}
export default gameDashboard;
