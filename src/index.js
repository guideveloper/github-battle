import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';
import Header from './Components/Header/Header';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import Ranking from './Routes/Ranking';
import Battle from './Routes/Battle';
import Footer from './Components/Footer/Footer';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="grid">
              <Header />
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/ranking" component={Ranking}/>
                <Route path="/battle" component={Battle}/>
              <Footer />
            </div>
          </Router>
        );
    }
}

export default App;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
