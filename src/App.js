import React from 'react'
import './App.css';
import Header from './Component/Header'
import Card from './Component/Card'
import Footer from './Component/Footer'
import Chats from './Component/Chats'
import Setting from './Component/Setting'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ChatScreen from './Component/ChatScreen'
// you might use <Header/> several times in App
// ":" in ":person" means any variable
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/chats/:person'>
            <Header backButton='/chats'/>
            <ChatScreen/>
          </Route>
          <Route path='/chats'>
            <Header backButton='/'/>
            <Chats/>
          </Route>
          <Route path='/setting'>
            <Header />
            <Setting/>
          </Route>
          <Route path='/'>
            <Header/>
            <Card />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
