import React from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hit: false,
            update: 0
        }
    }


    handleClick = (e) => {
        
        //wysyłanie informacji
        const x = -1;
        this.props.sendInfoLives(x);
        console.log(e);
        

        //ustawianie statusu że trafiony
        this.setState({
             hit: true
        })
    }

    render() {
        if (this.state.hit == false) {
    	   return  <div onClick={e => this.handleClick(e)}  className='bomb'></div>
        } else {
            return  <div className='explosionBomb'></div>
        }
    }
}

export {Bomb}