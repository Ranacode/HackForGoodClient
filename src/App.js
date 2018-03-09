import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
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
