import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesByArticlesId, fetchCommentsByArticlesId } from '../actions/articles'
import '../css/Articles.css';

class ArticlesById extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArticlesByArticlesId(this.props.match.params.articles_id)
        this.props.fetchCommentsByArticlesId(this.props.match.params.articles_id)
    }

    render() {
        return (
            <div className="body">

                <h1>{this.props.articles.title}</h1>

                <ul>
                    <li>{this.props.articles.body} </li> <br />
                    <li> By {this.props.articles.created_by} </li>
                    <li> Votes {this.props.articles.votes} </li>
                </ul>

                <h3>Comments</h3>

                {this.props.comments && this.props.comments.map((comment, i) => {
                    return (
                        <div className="comment">
                            <ul>
                                <li> {comment.body}</li>
                                <li> By: {comment.created_by}</li>
                                <li> Votes: {comment.votes}</li>
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
        loading: state.articles.loading,
        error: state.articles.error,
        articles: state.articles.payload,
        comments: state.articles.comments,
        commentsError: state.articles.commentsError
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchArticlesByArticlesId: (id) => {
            dispatch(fetchArticlesByArticlesId(id));
        },
        fetchCommentsByArticlesId: (id) => {
            dispatch(fetchCommentsByArticlesId(id));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesById);
