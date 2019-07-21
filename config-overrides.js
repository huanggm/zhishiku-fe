const path = require('path')

const {
  override,
  fixBabelImports,
  addBabelPlugin,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addBabelPlugin('babel-plugin-styled-components'),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  })
)
