import React, { Component } from 'react';
import Home from './screens/Home';
import Resume from './screens/Resume';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';


const Header = () => (
  <header>
    <div className="navbar">
      <nav>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/projects'>PROJECTS</Link>
        <Link to='/resume'>RESUME</Link>
      </nav>
    </div>
  </header>
)

// Keep forgetting if I use {} it is js and requires a return. () is expression.
const Main = () => (
  <main>
    <Switch>
      <Route path='/resume' component={Resume}/>
      <Route exact path='/:id' component={Home}/>
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
