export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
})

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
})

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
})

