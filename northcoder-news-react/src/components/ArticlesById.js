import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesByArticlesId, fetchCommentsByArticlesId } from '../actions/articles'
import '../css/Articles.css';

class ArticlesById extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            comment : ''
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
        this.setState({
            username: this.state.username,
            comment:this.state.comment
             
        })
    }

    componentDidMount() {
        this.props.fetchArticlesByArticlesId(this.props.match.params.articles_id)
        this.props.fetchCommentsByArticlesId(this.props.match.params.articles_id)

    }

    render() {
        return (
            <div className="body">

                <div className="artById">
                <h2>{this.props.articles.title}</h2>

                <ul>
                    <li>{this.props.articles.body} </li> <br />
                    <li> By {this.props.articles.created_by} </li>
                    <li> Votes {this.props.articles.votes} </li>
                </ul>
                </div>
                <form className="commentBox">
                <h3> Add comments here </h3>
                    Username:<br/>
                    <input type="text" className="username" onSubmit={this.handleUsernameSubmit} value={this.state.username} 
                    onChange={this.handleUsernameChange.bind(this)}
                    />
                    <br/><br/>

                    <textarea type="text" className="submitComment" onSubmit={this.handleCommentsSubmit} value={this.state.comment}
                    onChange={this.handleCommentsChange.bind(this)}/>
                    <br/>
                    
                    <input type="submit" className="submitButton" value="Submit" />
                    <input type="reset" className="submitButton" value="Reset"/>
                   
                </form>
                <div className="commentSection">
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
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesById);
