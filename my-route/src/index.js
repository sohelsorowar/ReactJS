import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About'
import Contact from './pages/Contact'
import Protfolio from './pages/Protfolio'
import { BrowserRouter as Router, Route, Link } from '../node_modules/react-router-dom';
import * as serviceWorker from './serviceWorker';
import styles from './Mycss.module.css';


const myrouter=(

     <Router>
     <div>
      <ul >
        <Link className={styles.TextStyle1} to="/">Home </Link>
        <Link className={styles.TextStyle1} to="/about">About </Link>
        <Link className={styles.TextStyle1} to="/contact">Contact </Link>
        <Link className={styles.TextStyle1} to="/protfolio">Protfolio </Link>
      </ul>

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/protfolio" component={Protfolio} />
     </div>
    </Router>

)


ReactDOM.render(myrouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
