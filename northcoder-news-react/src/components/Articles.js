import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from '../actions/articles';
import {Link} from 'react-router-dom';
import '../css/Articles.css';
import { editVotesByArtId } from '../actions/articles';

class Articles extends Component {

handleVoteCount (event, id, voteCount) {
    event.preventDefault();
    this.props.editVotesByArtId(id, voteCount)
}

componentDidMount() {
this.props.fetchAllArticles()
}

render() {
    return (
        <div className="body container">
        <div className="col-md-12">
        <h1>Northcoders News</h1>
        <div className="title">
        <h2>All Articles</h2>
        </div>
        </div>

            {this.props.articles.map((article, i) => {
                    return (
                        <div key={i} className="article">
                            <ul>
                                <li> <span>Article: </span> <Link to={`/Articles/${article._id}/comments`}>{article.title}</Link> </li>
                                <li> <span>Created By: </span>{article.created_by}</li> 
                                <li> {article.body}</li><br/>
                                <li> <span>Votes: </span>{article.votes}</li>
                            </ul>

                            <a href="#" onClick ={(event) => this.handleVoteCount(event, article._id, "up")} >
                                <i className="fa fa-thumbs-up"></i> 
                            </a>

                            <a href="#" onClick ={(event) => this.handleVoteCount(event, article._id, "down")} >
                                <i className="fa fa-thumbs-down"></i> 
                            </a>  
                                    
                        </div>
                    )
                }
            )}
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
    },
    editVotesByArtId: (id, voteCount) =>{
        dispatch(editVotesByArtId(id,voteCount))
    }
};
}

            
export default connect(mapStateToProps,mapDispatchToProps)(Articles);
