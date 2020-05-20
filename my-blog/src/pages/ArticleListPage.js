import React from 'react';
import articleContent from "./article-content";
import ArticleList from '../components/ArticleList';


const ArticleListPage = () =>(
    <>
        <h1>Articles</h1>
        <ArticleList article={articleContent}/>
    </>
);

export default ArticleListPage;