import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            scores: [],
            timeUpdated: "loading.."
        };
    };


    updateScores() {
        fetch("/api/highscores")
            .then((response) => {
                console.log("repsonse", response)
                return response.json()
            })
            .then((json) => {
                console.log("json", json.scores)

                this.setState((prevState, props) => {
                    return {
                        timeUpdated: json.timeUpdated,
                        scores: json.scores
                    }
                });
            });
    };

    componentDidMount() {
        this.updateScores();
    };

    render() {
        return <div>
            <div>
                <h4>last updated @ {this.state.timeUpdated} </h4>
            </div>
            <div>
                <h3>Number of players : {this.state.scores.length}</h3>
            </div>
            <div>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Score" />
                <button>Add Player</button>
            </div>
            <div>
                <table>
                    <tbody>
                        {this.state.scores.map((player, i) => {
                            return <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>

        </div>

    }
}

render(<App />, document.getElementById('app'));

// for help later https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr