import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesByArticlesId, fetchCommentsByArticlesId, addComments } from '../actions/articles'
import '../css/Articles.css';

class ArticlesById extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            comment : '',
            allComments: []
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event) {
        event.preventDefault()
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange(event) {
        event.preventDefault()
        this.setState({
            comment: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        let comment = {
            comment: this.state.comment,
            username: this.state.username,
            id: this.props.match.params.articles_id
        }
        this.props.addComments(comment)
        this.props.fetchCommentsByArticlesId(comment.id)
        
        this.setState(
            {
                comment : '',
                username : ''
            }
        )
    }

    componentDidMount() {
        this.props.fetchArticlesByArticlesId(this.props.match.params.articles_id)
        this.props.fetchCommentsByArticlesId(this.props.match.params.articles_id)

    }

    render() {
        if (this.props.articles.articles == null) return <p>Loading...</p>
        return (
            <div className="body container">
                <div className="col-md-12">
                    <h1> Northcoders News </h1>
                </div>
                <div className="article ">
                <h2>{this.props.articles.articles.title}</h2>

                <ul>
                    <li>{this.props.articles.articles.body} </li> <br />
                    <li> By {this.props.articles.articles.created_by} </li>
                    <li> Votes {this.props.articles.articles.votes} </li>
                </ul>
                </div>
                <form className="article" onSubmit={this.handleSubmit}>
                <h3> Add comments here </h3>
                    <input name="username" type="text" placeholder="Username.." className="username form-control" value={this.state.username} 
                    onChange={this.handleUsernameChange.bind(this)}
                    />
                    <br/>

                    <textarea name="comment" type="text" placeholder="Post a comment.." className="submitComment form-control"  value={this.state.comment}
                    onChange={this.handleCommentsChange.bind(this)}/>
                    <input type='hidden' value={this.props.match.params.articles_id} name='id'/>
                    <input type="submit" className="submitButton btn btn-dark" value="Submit" />
                    <input type="reset" className="submitButton btn btn-dark" value="Reset"/>
                   
                </form>
                <div className="article">
                <h3>Comments</h3>

                {this.props.comments && this.props.comments.map((comment, i) => {
                    return (
                        <div key={i} className="comment">
                            <ul>
                                <li> {comment.body}</li>
                                <li> By: {comment.created_by}</li>
                                <li> Votes: {comment.votes}</li>
                            </ul>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.articles.loading,
        error: state.articles.articleError,
        articles: state.articles.articlePayload,
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
        },
        addComments:(comments) => {
            dispatch(addComments(comments))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesById);
