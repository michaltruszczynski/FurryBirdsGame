import React from 'react';
import {Game} from './game.jsx';
import {
    HashRouter,
    Route,
    NavLink as Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birdsNumber: 1,
            end: false
        }
    };

    handleChange = (event) => {
        this.setState({
            birdsNumber: event.target.value
        })
    };


    sendInfoEnd = (newInfo) => {  
        this.setState({
            end: newInfo
        })
    }


    render() {
        console.log(this.state.birdsNumber)
        return <div className="startPage">
            <Link to={"/game/" + this.state.birdsNumber} className="startButton">Start</Link>
            <h1>Podaj liczbę: <input type="number" min='1' step='1' value={this.state.birdsNumber} onChange={this.handleChange} placeholder={this.state.birdsNumber}/></h1>
        </div>
    }
}

export {App}