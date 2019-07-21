import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  DELETE_ARTICLE_SUCCESS,
} from '../actions/article'

const initialState = {
  articles: [],
  page: 0,
  hasMore: true,
  loading: false,
  error: null,
}

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        articles: state.articles.concat(action.payload.articles || []),
        hasMore: action.payload.hasMore,
      }
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case DELETE_ARTICLE_SUCCESS:
      const id = action.payload.article._id
      return {
        ...state,
        articles: state.articles.filter(a => a._id !== id)
      }
    default:
      return state
  }
}
