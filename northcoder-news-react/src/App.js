import React from 'react';
import './css/App.css';
import Articles from './components/Articles';
import ArticlesById from './components/ArticlesById' 
import Topics from './components/Topics'; 
import Home from './components/Home';
import pic from './css/image.jpg';

import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container ">

          <nav className="navbar col-12">

          <div className="pic col-2">
          <img src={pic} alt="background pic" /> 
          </div>        
         
          <div className="links col-6">
            <h1> Northcoders News </h1>
            <ul>
              <li>
              <i className="material-icons">favorite_border</i> 
              <Link to='/'> Home </Link> 
              </li>

              <li>
              <i className="material-icons">description</i>
              <Link to='/Articles'> Articles </Link>
              </li>

              <li>
              <i className="material-icons">message</i>
              <Link to='/Topics'> Topics </Link>
              </li>

            </ul>
          </div> 

          <div className="searchbox col-4">
            <form>
              <input type='text' placeholder="Search..." /> 
              <input type='submit' value='search' /> 
            </form>
          </div>

          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Articles' component={Articles} />
            <Route exact path='/Articles/:articles_id' component={ArticlesById} />
            <Route exact path='/Topics' component={Topics} />
          </Switch>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
