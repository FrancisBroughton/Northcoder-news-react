import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllTopics} from '../actions/topics';

class Topics extends Component {

  componentDidMount() {
    this.props.fetchAllTopics()
  }

  render() {
    return (
      <div className="body container">
      <div className="col-md-12">
        <h1> Northcoders News </h1>
        <div className="title">
        <h2>Topics</h2>
      </div>
      </div>

        {this.props.topics.map((topic, i) => {
          return (
            <div key={i} className="article">
              <ul>
                <li> <Link to={`/Topics/${topic._id}/${topic.slug}/articles`}>{topic.title}</Link></li>
                </ul>
            </div>
          )
        })}
  </div>
)};
}

function mapStateToProps(state) {
  return {
    loading: state.topics.loading,
    error: state.topics.error,
    topics: state.topics.payload
  };
}
function mapDispatchToProps(dispatch) {
  return {
      fetchAllTopics: (data) => {
        dispatch(fetchAllTopics());
      }
      }
  };

export default connect (mapStateToProps, mapDispatchToProps)(Topics);
