import React from 'react';
import {Box} from './box.jsx';
import {BoxBomb} from './boxBomb.jsx';
import {End} from './end.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            lives: 2
        }
    }

    sendInfo = (newInfo) => {  
        let v = this.state.score;
        let x = v + newInfo;      
        this.setState({
            score: x
        })
    }

    sendInfoLives = (newInfo) => {  
        let v = this.state.lives;
        let x = v + newInfo;      
        this.setState({
            lives: x
        })
    }


    render() {
        const birdsNo = this.props.match.params.birds
        if (this.state.lives > 0) {
    	    return  <div className="game">
            	<div className="score"> Wynik: {this.state.score}</div>
            	<div className="lives"> Życia: {this.state.lives}</div>
            	<Box birdsNo={birdsNo} sendInfo={this.sendInfo}/>
                <BoxBomb bombsNo={3} sendInfoLives={this.sendInfoLives}/>
            	<div className="birdTwo1"> </div>
                <div className="birdTwo2"> </div>
                <div className="birdTwo3"> </div>
            </div>
        } else {
                return <div> 
                    <End score={this.state.score}/>
                </div>
            }
    }
}

export {Game}