module.exports = {
  // 如果是 username.github.io 仓库，可以使用 '/'
  // 如果是项目仓库，需要使用 '/仓库名/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-blog/' // 替换为你的仓库名
    : '/'
}