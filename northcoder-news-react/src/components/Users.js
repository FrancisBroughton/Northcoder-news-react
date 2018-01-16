import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllUsers} from '../actions/users';
import '../css/Users.css';

class Users extends Component {

  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    console.log(this.props.users)
    return (
      <div className="body container">
      <div className="col-md-12">
        <h1> Northcoders News </h1>
        <div className="title">
        <h2> All Users</h2>
      </div>
      </div>
      
        {this.props.users && this.props.users.map((user, i) => {
          return (
            <div key={i} className="article">
              <ul>
                <li> 
                  <img src={user.avatar_url} alt="profile pic"/>
                  <Link to={`/Users/${user.username}`}>{user.name}</Link>
                </li>
              </ul>
            </div>
          )
        })}
    </div>
)};
}

function mapStateToProps(state) {
  return {
    loading: state.users.loading,
    error: state.users.usersError,
    users: state.users.usersPayload
  };
}
function mapDispatchToProps(dispatch) {
  return {
      fetchAllUsers: (data) => {
        dispatch(fetchAllUsers(data));
      }
      }
  };

export default connect (mapStateToProps, mapDispatchToProps)(Users);
