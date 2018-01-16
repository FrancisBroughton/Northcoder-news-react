import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesByArticlesId, fetchCommentsByArticlesId, addComments, deleteComments } from '../actions/articles'
import '../css/Articles.css';
import { editVoteCountByCommentId } from '../actions/comments';

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
        let comment = {
            comment: this.state.comment,
            username: this.state.username,
            id: this.props.match.params.articles_id
        }
        this.props.addComments(comment);
        
        this.setState({
            comment : '',
            username : ''
        })
    }
    handleDeleteComment (event, comment_id) {
        event.preventDefault()
        this.props.deleteComments(comment_id,this.props.match.params.articles_id)
    }

    handleVoteCount (event, id, voteCount){
        event.preventDefault()
        this.props.editVoteCountByCommentId(this.props.match.params.articles_id, id, voteCount)
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
                <h3>{this.props.articles.articles.title}</h3>

                <ul>
                    <li> <span> By </span> {this.props.articles.articles.created_by} </li>
                    <li>{this.props.articles.articles.body} </li> <br />
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
                            <div className='col-12 row'>
                                <div className='col-6'>
                            <a href="#" onClick ={(event) => this.handleVoteCount(event, comment._id, "up")} >
                                <i className="fa fa-thumbs-up"></i> 
                            </a>

                            <a href="#" onClick ={(event) => this.handleVoteCount(event, comment._id, "down")} >
                                <i className="fa fa-thumbs-down"></i> 
                            </a> 
                            </div>
                            <div className='col-6 deleteComment'>
                            <input type="submit" className="submitButton btn btn-dark" value="Delete" onClick ={(event) => this.handleDeleteComment(event, comment._id)} />
                            </div>
                            </div>
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
            dispatch(addComments(comments));
        },
        deleteComments: (id,articles_id) => {
            dispatch(deleteComments(id, articles_id))
        },
        editVoteCountByCommentId: (art_id, id, voteCount) =>{
            dispatch(editVoteCountByCommentId(art_id,id,voteCount))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesById);
