import React, { Component } from 'react';
import Home from './screens/Home';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>CONTACT</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/projects'>PROJECTS</Link></li>
        <li><Link to='/resume'>RESUME</Link></li>
      </ul>
    </nav>
  </header>
)

// Keep forgetting if I use {} it is js and requires a return. () is expression.
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={Home}/>
      <Route path='/projects' component={Home}/>
      <Route path='/resume' component={Home}/>
    </Switch>
  </main>
)

const Footer = () => (
  <footer>
    <p>Jimmy Zoo</p>
  </footer>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
