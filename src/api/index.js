import fetch from './fetch'

/**
 * 通过code换取token
 * @param {string} code Github回调的code，可以换取token
 */
export function loginWithCode(code) {
  return fetch(`/api/user/loginWithCode?code=${code}`)
}

/**
 * 获取所有项目
 */
export function listAllRepos() {

}

/**
 * 激活项目，即把该项目设置为博客项目
 */
export function activeRepo(repo) {

}

/**
 * 保存文章
 * @param {Object} file 待保存的文章
 */
export function saveFile(file) {

}