import React from 'react';
import { Link } from 'react-router-dom';
import './gamedashboard.scss';
import logo from '../../assets/mvidia-playground-white.png';
import banner from '../../assets/ac_banner.jpg';

// import thumb_sing from '../../assets/thumb_sing.jpg';
// import thumb_two from '../../assets/thumb_ttt.jpg';
// import thumb_three from '../../assets/thumb_tg.jpg';
// import { thumb_snake.jpg } from '../../assets/thumb_snake.jpg';
// import thumb_five from '../../assets/thumb_flappygoat.jpg';
// import thumb_six from '../../assets/thumb_tweety.jpg';


class gameDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [{}],
            images: {},
            currentUser: this.props.location.state.user
        };
    }


    componentWillMount() {
        fetch("http://localhost:8000/gamedashboard",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then(async response => {
            var gamedata = await response.json();
            this.setState({ games: gamedata });
        })
        .then(importThumbnail => {
            const imagesList = this.importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
            
            this.setState({
                images: imagesList,
            })
        });

        console.log(this.props);
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { 
            images[item.replace('./', '')] = r(item); 
        });
        return images;
    }

    renderGames() {
        // let games = [];

        // for(let i=0; i<this.state.games.length; i++) {
        //     const game = this.state.games[i]
        //     games.push(<li key={game.title}>{game.game_id}</li>)
        // }
        // console.log(this.state.images["GameOver.jpg"]);
        // const image = require('../../assets/thumb_snake.jpg')
        // console.log(this.state.images["GameOver.jpg"]);
        const games = this.state.games.map((game) =>


            <Link
                to={{
                    pathname: "../game",                    
                    state: game,
                    param: this.state.currentUser
                }}
            >

                <div className="dashboard_main_gameboard_game">

                    <div className="dashboard_main_gameboard_game_thumb">
                        <img src={this.state.images[game.thumbnail]} alt="" />
                    </div>
                    <div className="dashboard_main_gameboard_game_title">{game.title}</div>
                    <div className="dashboard_main_gameboard_game_score">Your Top Score <span>377</span></div>
                </div>
            </ Link>
        );
        return <div className="dashboard_main_gameboard">{games}</div>
    }
    render() {

        // - landingpage
        //     - header: scores, naam, avatar (of side, net als My Dell)
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
                        <h1 className="dashboard_hub_profile-username">{this.state.currentUser}</h1>

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

                    {this.renderGames()}

                </main>
            </div >
        )

    }
}
export default gameDashboard;
