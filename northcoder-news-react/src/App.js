import React from 'react';
import './css/App.css';
import Articles from './components/Articles'; 
import Topics from './components/Topics'; 
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
          
          <div className="pic col-3">
          <img src={pic} alt="background image" /> 
          </div>        
          
          <div className="links col-5">
          <i className="material-icons">favorite_border</i> 
          <Link to='/Home'> Home </Link>
          <i class="material-icons">description</i>
          <Link to='/Articles'> Articles </Link>
          <i class="material-icons">message</i>
          <Link to='/Topics'> Topics </Link>
          </div> 

          <div className="searchbox col-4">
          <form>
            <input type='text' placeholder="Search..." />
            <input type='submit' value='search' />
          </form>
          </div>
          </nav>


          <div className="body">

          </div>

          <Switch>
            <Route path='/Home' component={App} />
            <Route path='/Articles' component={Articles} />
            <Route path='/Topics' component={Topics} />
          </Switch>
      </div> 
      </BrowserRouter>
    );
  }
}

export default App;
