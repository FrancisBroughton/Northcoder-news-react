import React from 'react';
import './css/App.css';
import Articles from './components/Articles';
import ArticlesById from './components/ArticlesById' 
import Topics from './components/Topics'; 
import Home from './components/Home';
import TopicById from './components/TopicById'


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
         
          <div className="links col-6">
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
            <form className="form-inline">
              <div className="form-group">
              <input type='text' placeholder="Search..." className="form-control" /> 
              <input type='submit' value='search' className="btn btn-dark" /> 
              </div>
            </form>
          </div>

          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Articles' component={Articles} />
            <Route exact path='/Articles/:articles_id/comments' component={ArticlesById} />
            <Route exact path='/Topics' component={Topics} />
            <Route exact path='/Topics/:topics_id/:slug/articles' component={TopicById} />
          </Switch>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
