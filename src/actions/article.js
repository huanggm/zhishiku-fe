import * as api from '../api'

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE'

export const DELETE_ARTICLE_BEGIN = 'DELETE_ARTICLE_BEGIN'
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS'
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE'

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN,
})

export const fetchArticlesSuccess = (articles, hasMore) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles, hasMore },
})

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error },
})

export const deleteArticleBegin = () => ({
  type: DELETE_ARTICLE_BEGIN,
})

export const deleteArticleSuccess = (article) => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload: { article },
})

export const deleteArticleFailure = error => ({
  type: DELETE_ARTICLE_FAILURE,
  payload: { error },
})

export function fetchArticles(query) {
  return dispatch => {
    dispatch(fetchArticlesBegin())
    return api
      .getArticles(query)
      .then(res => dispatch(fetchArticlesSuccess(res.articles, res.hasMore)))
      .catch(error => dispatch(fetchArticlesFailure(error)))
  }
}

export function deleteArticle(article) {
  return dispatch => {
    dispatch(deleteArticleBegin())
    return api
      .deleteArticle(article)
      .then(() => dispatch(deleteArticleSuccess(article)))
      .catch(error => dispatch(deleteArticleFailure(error)))
  }
}
