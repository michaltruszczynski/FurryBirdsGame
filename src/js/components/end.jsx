import React from 'react';


class End extends React.Component {
    render() {
        return <div className="end"> <div className="showscore">Twój wynik: {this.props.score} </div> </div>
    }
}

export {End}