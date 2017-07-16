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
            <h3>{this.state.timeUpdated} </h3>
            <h3>{this.state.scores.length}</h3>
            <div>
                {this.state.scores.map((player, i) => {
                    return <div>
                        <div key={i}>
                            <div>{player.name}</div>
                            <div>{player.score}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    }
}

render(<App />, document.getElementById('app'));

// for help later https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr