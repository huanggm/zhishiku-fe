import * as api from '../api'

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE'

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

export function fetchArticles(query) {
  return dispatch => {
    dispatch(fetchArticlesBegin())
    return api
      .getArticles(query)
      .then(res => dispatch(fetchArticlesSuccess(res.articles, res.hasMore)))
      .catch(error => dispatch(fetchArticlesFailure(error)))
  }
}
