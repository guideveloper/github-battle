import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './index.css';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Ranking from './Pages/Ranking';
import Battle from './Pages/Battle';
import Footer from './Layout/Footer';

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
