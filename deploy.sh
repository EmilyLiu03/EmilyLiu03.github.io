#!/usr/bin/env sh

# 当发生错误时终止脚本运行
set -e

# 打包
npm run build

# 移动到打包后的dist目录 
cd dist

# 创建.nojekyll 防止Github Pages忽略以_开头的文件
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# 请替换为你的GitHub用户名和仓库名
git push -f git@github.com:<USERNAME>/vue-blog.git master:gh-pages

cd -