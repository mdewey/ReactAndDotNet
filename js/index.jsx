import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            scores: []
        };
    };

    componentDidMount() {
        fetch("/api/highscores")
            .then((response) => {
                console.log("repsonse", response)
                return response.json()
            })
            .then((json) => {
                console.log("json", json)
                this.setState({ scores: json });
            });
    };


    render() {
        return this.state.scores.map((score) => {
            return <div>
                <div>{score.person}</div>
                <div>{score.points}</div>
            </div>
        });
    }
}

render(<App />, document.getElementById('app'));

// for help later https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr