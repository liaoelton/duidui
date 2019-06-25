import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Start from './container/Start';
import PlayGround from './container/Playground';
import Scoreboard from './container/Scoreboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="outmost-container">
          <div className="background">
            <div className="title">爆胎</div>
            <Switch>
              <Route exact path="/" component={Start}></Route>
              <Route exact path="/playground" component={PlayGround}></Route>
              <Route exact path="/scoreboard" component={Scoreboard}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
