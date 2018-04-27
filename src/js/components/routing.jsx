import React from 'react';
import {App} from './app.jsx';
import {NotFound} from './notFound.jsx';
import {Game} from './game.jsx';
import {
    HashRouter,
    Route,
    NavLink as Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import Sound from 'react-sound';

const Routing = () => {
    return  <HashRouter>
            <div>
            <Sound url="Angry-Birds-Theme-Song.mp3" playStatus={Sound.status.PLAYING} loop={true} />
             <Switch>
                <Route exact path='/' component={App} />
                <Route path='/game/:birds' component={Game} />
                <Route path='*' component={NotFound} />
           </Switch>
           </div>
       </HashRouter>;
}

export {Routing}