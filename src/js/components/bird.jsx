import React from 'react';


class Bird extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hit: false,
            update: 0
        }
    }


    handleClick = (e) => {
        
        //wysyłanie informacji
        const x = 1;
        this.props.sendInfo(x);
        console.log(e);
        

        //ustawianie statusu że trafiony
        this.setState({
             hit: true
        })
    }

    render() {
        if (this.state.hit == false) {
    	   return  <div onClick={e => this.handleClick(e)}  className='birdOne'></div>
        } else {
            return  <div className='explosion'></div>
        }
    }
}

export {Bird}