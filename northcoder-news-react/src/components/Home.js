import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllArticles } from '../actions/articles';
import '../css/Home.css';

class Home extends Component {

    componentDidMount() {
        this.props.fetchAllArticles()
    }

    render() {
        return (
            <div className="body container">
            <div className="col-md-12">
                <h1> Northcoders News </h1>
                <div className="title">
                <h2>Latest Articles</h2>
            </div>
            </div>

                {this.props.articles.slice(0,10).map((article, i) => {
                        return (
                            <div key={i} className="article">
                                <ul>
                                    <li> <span>Article: </span><Link to={`/Articles/${article._id}/comments`}>{article.title}</Link></li>
                                    <li> <span>Created By: </span>{article.created_by}</li> 
                                    <li> <span>Votes: </span>{article.votes}</li><br />
                                    <li> {article.body}</li>
                                </ul>
                            </div>
                        )
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.articles.loading,
        error: state.articles.error,
        articles: state.articles.payload
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchAllArticles: (data) => {
            dispatch(fetchAllArticles());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
