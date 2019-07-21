import * as api from '../api'

export const FETCH_REPOS_BEGIN = 'FETCH_REPOS_BEGIN'
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS'
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE'

export const CONNECT_REPO_BEGIN = 'CONNECT_REPO_BEGIN'
export const CONNECT_REPO_SUCCESS = 'CONNECT_REPO_SUCCESS'
export const CONNECT_REPO_FAILURE = 'CONNECT_REPO_FAILURE'

export const UNCONNECT_REPO_BEGIN = 'UNCONNECT_REPO_BEGIN'
export const UNCONNECT_REPO_SUCCESS = 'UNCONNECT_REPO_SUCCESS'
export const UNCONNECT_REPO_FAILURE = 'UNCONNECT_REPO_FAILURE'

export const fetchReposBegin = () => ({
  type: FETCH_REPOS_BEGIN,
})

export const fetchReposSuccess = repos => ({
  type: FETCH_REPOS_SUCCESS,
  payload: { repos },
})

export const fetchReposFailure = error => ({
  type: FETCH_REPOS_FAILURE,
  payload: { error },
})

export const connectRepoBegin = repo => ({
  type: CONNECT_REPO_BEGIN,
  payload: { repo },
})

export const connectRepoSuccess = repo => ({
  type: CONNECT_REPO_SUCCESS,
  payload: { repo },
})

export const connectRepoFailure = (error, repo) => ({
  type: CONNECT_REPO_FAILURE,
  payload: { error, repo },
})

export const unconnectRepoBegin = repo => ({
  type: UNCONNECT_REPO_BEGIN,
  payload: { repo },
})

export const unconnectRepoSuccess = repo => ({
  type: UNCONNECT_REPO_SUCCESS,
  payload: { repo },
})

export const unconnectRepoFailure = (error, repo) => ({
  type: UNCONNECT_REPO_FAILURE,
  payload: { error, repo },
})

export function fetchRepos() {
  return dispatch => {
    dispatch(fetchReposBegin())
    return api
      .getRepos()
      .then(repos => dispatch(fetchReposSuccess(repos)))
      .catch(error => dispatch(fetchReposFailure(error)))
  }
}

export function connectRepo(repo) {
  return dispatch => {
    dispatch(connectRepoBegin(repo))
    return api
      .connectRepo(repo)
      .then(() => dispatch(connectRepoSuccess(repo)))
      .catch(error => dispatch(connectRepoFailure(error, repo)))
  }
}

export function unconnectRepo(repo) {
  return dispatch => {
    dispatch(unconnectRepoBegin(repo))
    return api
      .unconnectRepo(repo)
      .then(() => dispatch(unconnectRepoSuccess(repo)))
      .catch(error => dispatch(unconnectRepoFailure(error, repo)))
  }
}
