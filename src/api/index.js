import fetch from './fetch'

/**
 * 通过code换取token
 * @param {string} code Github回调的code，可以换取token
 */
export function loginWithCode(code) {
  return fetch(`/api/user/loginWithCode?code=${code}`)
}

/**
 * 获取用户信息
 */
export function getUser() {
  return fetch(`/api/user/getUser`)
}

/**
 * 获取项目列表
 */
export function getRepos() {
  return fetch(`/api/user/getRepos`)
}

/**
 * 关联项目，即把该项目设置为博客项目
 */
export function connectRepo(repo) {
  return fetch('/api/user/connectRepo', {
    method: 'POST',
    body: { repo },
  })
}

/**
 * 取消关联项目
 */
export function unconnectRepo(repo) {
  return fetch('/api/user/unconnectRepo', {
    method: 'POST',
    body: { repo },
  })
}

/**
 * 获取所有文章列表
 */
export function getArticles(query) {
  return fetch('/api/article/getArticles', {
    method: 'POST',
    body: { query },
  })
}

/**
 * 保存文章
 * @param {Object} file 待保存的文章
 */
export function saveFile(file) {

}