import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
