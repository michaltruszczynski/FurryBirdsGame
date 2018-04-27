import React from 'react';
import {Bomb} from './bomb.jsx';


class BoxBomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: [],
            bombsNumber: this.props.bombsNo,
            value: 0,
            hit: false,
            sendInfoLives: this.props.sendInfoLives
        }
    }

componentDidMount() {
        let styleList = [];
        for (let i = 0; i < this.props.bombsNo; i++) {
            
            //pozycjs startowa
            let minP = 10;
            let maxP = 360;
            let randomPos = Math.floor(Math.random()*(maxP-minP+1)+minP)
            let birdPos = randomPos + 'px';
            console.log(birdPos)

            //zIndex
            //zIndex = 360 - bottomPos;

            //szykość poruszania
            let minS = 2;
            let maxS = 4;
            let randomSpeed = Math.floor(Math.random()*(maxS-minS+1)+minS)
            let flySpeed = randomSpeed;

            //opożnienie
            let minD = 0;
            let maxD = 5;
            let randomDelay = Math.floor(Math.random()*(maxD-minD+1)+minD)
            let delay = randomDelay;
        
            let animationStyle = {
                background: '',
                position: 'absolute',
                top: birdPos,
                left: '-80px',
                animationName: 'bombFly' + (Math.floor(Math.random()*(3-1)+1)),
                //animationName: 'birdOneFly1',
                animationDuration: flySpeed+parseFloat(delay)+'s',
                animationDelay: delay+'s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                display: 'block'
            };

            //wrzucanie lementów do pętli
            styleList.push(animationStyle);
        }

        this.setState({
            style: [...styleList],
        });
        console.log("componentDidMount");
    };


    render() {

        // return null

        let bombs = [];
        console.log(this.state.style);
        console.log(this.state.value);

        bombs = this.state.style.map( (elem, i) => {
            
            const bomb = <div key={i} style={elem}><Bomb sendInfoLives={this.state.sendInfoLives} /></div>

            return bomb
            
        })
        
        return  <div>
            {bombs}
        </div>
    }
}

export {BoxBomb}