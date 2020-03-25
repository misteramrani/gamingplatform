import React from 'react';
import './gamedashboard.scss';
import logo from '../../assets/mvidia-playground-white.png';
import banner from '../../assets/ac_banner.jpg';


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
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Donkey Kong</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">2092</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Tikkertje</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">192</h1>
                        </div>
                        <div className="dashboard_hub_stats_scoreofgame">
                            <h1 className="dashboard_hub_stats_scoreofgame-game">Halo III</h1>
                            <h1 className="dashboard_hub_stats_scoreofgame-score">3442</h1>
                        </div>

                    </div>
                </aside>
                <main className="dashboard_main">
                    <div className="dashboard_main_header">
                        <div className="dashboard_main_header_banner">
                            {/* maak een carrousel */}
                            <img className="dashboard_main_header_banner-image" src={banner} alt="" />
                        </div>
                        <div className="dashboard_main_header_search">
                            <input className="dashboard_main_header_search-searchfield" type="text" name="search_field" id="" />
                        </div>
                    </div>
                    <div className="dashboard_main_gameboard">

                        <div className="dashboard_main_game">
                            <div className="dashboard_main_game-thumb"></div>
                            <div className="dashboard_main_game-title"></div>
                            <div className="dashboard_main_game-scores"></div>
                        </div>

                    </div>
                </main>

            </div >
        )

    }
}
export default gameDashboard;
