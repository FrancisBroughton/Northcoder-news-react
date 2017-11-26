import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesByArticlesId } from '../actions/articles'

class ArticlesById extends Component {
  constructor(props) {
    super(props)
}

componentDidMount() {
    this.props.fetchArticlesByArticlesId(this.props.match.params.articles_id)
}

render() {
    console.log("******",this.props)
    return (
        <div className="body">

        <h1>{this.props.articles.title}</h1>
        
        <p> <br/>
            
            {this.props.articles.body} </p>
            By {this.props.articles.created_by} <br/> 
            Votes {this.props.articles.votes} <br/> 
        </div>    
    )
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
    fetchArticlesByArticlesId: (id) => {
        dispatch(fetchArticlesByArticlesId(id));
    }
};
}

            
export default connect(mapStateToProps,mapDispatchToProps)(ArticlesById);
