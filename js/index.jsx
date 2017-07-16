import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            scores: [],
            timeUpdated: "loading..",
            newPlayerName: '',
            newPlayerScore: ''
        };
        this.handleClick = this.handleClick.bind(this);
    };


    handleClick() {
        console.log("posting", this.state.newPlayerName, this.state.newPlayerScore);
        fetch('/api/highscores', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.newPlayerName, score: this.state.newPlayerScore })
        }).then((resp) => {
            console.log('resp', resp)
            return resp.json();
        }).then((json) => {
            console.log('json', json);
            this.setState({
                newPlayerName: '',
                newPlayerScore: ''
            });
            this.setState((prevState, props) => {
                return {
                    timeUpdated: json.timeUpdated,
                    scores: json.scores
                }
            });
        });

    }

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

    updatePlayerName(e) {
        this.setState({
            newPlayerName: e.target.value
        })
    }
    updatePlayerScore(e) {
        this.setState({
            newPlayerScore: e.target.value
        })
    }

    render() {
        return <div>
            <div>
                <h4>last updated @ {this.state.timeUpdated} </h4>
            </div>
            <div>
                <h3>Number of players : {this.state.scores.length}</h3>
            </div>
            <div>
                <input type="text" placeholder="Name" value={this.state.newPlayerName} onChange={evt => this.updatePlayerName(evt)} />
                <input type="number" placeholder="Score" value={this.state.newPlayerScore} onChange={evt => this.updatePlayerScore(evt)} />
                <button onClick={this.handleClick}>Add Player</button>
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