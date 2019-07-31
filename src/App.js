import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Contacts from './components/Contacts'
import {HashRouter as  Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
 
    <div>
      <Router basename='/'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
     <Footer />
    </div>
  );
}

export default App;
