import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './containers/login/login';
import Header from './components/Header/header';
import {Provider} from 'react-redux';
import store from './reduxSetup/store';
import TaskManager from './containers/Task_Manager/taskManager';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header/>
      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/manager' component={TaskManager}/> 
      </Router>
      </Provider>
    </div>
  );
}

export default App;
