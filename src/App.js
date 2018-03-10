import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home/Home';
import Activities from './components/Activities/Activities';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Form from './components/Forms/Form';
import LoginForm from './components/Forms/LoginForm';
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
              <Route exact path="/actividades" component={Activities} />
              <Route exact path="/inscripcion" component={Form} />
              <Route exact path="/entrar" component={LoginForm} />
              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
