import {
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  CONNECT_REPO_BEGIN,
  CONNECT_REPO_SUCCESS,
  CONNECT_REPO_FAILURE,
  UNCONNECT_REPO_BEGIN,
  UNCONNECT_REPO_SUCCESS,
  UNCONNECT_REPO_FAILURE,
} from '../actions/repo'

import {
  CONNECTING,
  CONNECT_NO,
  CONNECT_FAILED,
  CONNECT_ABORTING,
  CONNECT_SUCCEED,
} from '../constants'

const initialState = {
  repos: [],
  loading: false,
  error: null,
}

function setRepoConnectStatus(arr, repo, status) {
  return arr.map(r => {
    if (r.id === repo.id) {
      return {
        ...r,
        connectStatus: status,
      }
    }
    return r
  })
}

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload.repos || [],
      }
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        repos: [],
        error: action.payload.error,
      }
    case CONNECT_REPO_BEGIN:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECTING
        ),
      }
    case CONNECT_REPO_SUCCESS:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECT_SUCCEED
        ),
      }
    case CONNECT_REPO_FAILURE:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECT_FAILED
        ),
      }
    case UNCONNECT_REPO_BEGIN:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECT_ABORTING
        ),
      }
    case UNCONNECT_REPO_SUCCESS:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECT_NO
        ),
      }
    case UNCONNECT_REPO_FAILURE:
      return {
        ...state,
        repos: setRepoConnectStatus(
          state.repos,
          action.payload.repo,
          CONNECT_FAILED
        ),
      }
    default:
      return state
  }
}
