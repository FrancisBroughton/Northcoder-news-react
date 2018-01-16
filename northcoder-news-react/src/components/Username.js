import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchUserData} from '../actions/users';
import '../css/Users.css';

class Username extends Component {

  componentDidMount() {
    this.props.fetchUserData(this.props.match.params.username)
  }

  render() {
    console.log(this.props.users)
    return (
      <div className="body container">
      <div className="col-md-12">
        <h1> Northcoders News </h1>
      </div>

        {this.props.user && this.props.user.map((userData, i) => {
          return (
            <div key={i} className="article">
            <ul>
                <li> 
                  <img src={userData.avatar_url} alt="profile pic"/>
                </li>
                <li>{userData.username}</li>
                <li>{userData.name}</li>
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
    error: state.users.userError,
    user: state.users.userPayload
  };
}
function mapDispatchToProps(dispatch) {
    return {
      fetchUserData: (data) => {
        dispatch(fetchUserData(data));
    }
    }
  };

export default connect (mapStateToProps, mapDispatchToProps)(Username);
