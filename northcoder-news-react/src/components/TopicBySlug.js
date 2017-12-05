import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticlesBySlug } from '../actions/topics';

class TopicBySlug extends Component{

    componentDidMount() {
        this.props.fetchArticlesBySlug(this.props.match.params.slug)
      }

    render(){
        console.log("*******",this.props)
        return (
            <div className="body container">

            <div className="col-md-12">
            <h1>Northcoders News</h1>
                <div className="title">
                <h2>Articles related to {this.props.match.params.slug} </h2>
                </div>
            </div>

            {this.props.topics.articles && this.props.topics.articles.map((topic,i)=> {
                return (
                    <div key={i} className="article">
                        <ul>
                            <li> <span>Article: </span> <Link to={`/Articles/${topic._id}/comments`}>{topic.title}</Link> </li>
                            <li> <span>Created By: </span>{topic.created_by}</li> 
                            <li> <span>Votes: </span>{topic.votes}</li><br />
                            <li> {topic.body}</li>
                        </ul>
                    </div>
                )
            })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.topics.loading,
        topicError: state.topics.topicError,
        topics: state.topics.topicPayload
    };
    }
    function mapDispatchToProps(dispatch) {
    return {
        fetchArticlesBySlug: (data) => {
            dispatch(fetchArticlesBySlug(data));
        }
    };
    }
    
                
    export default connect(mapStateToProps,mapDispatchToProps)(TopicBySlug);