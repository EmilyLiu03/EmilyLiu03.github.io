# Vue个人博客

这是一个使用Vue.js构建的个人博客项目，可以部署在GitHub Pages上。

## 特性

- 使用Vue 3和Vite构建
- 响应式设计，适配各种设备
- 博客文章展示
- 关于页面
- 自动部署到GitHub Pages

## 项目设置

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 部署到GitHub Pages

### 方法一：使用部署脚本

1. 修改`deploy.sh`文件中的GitHub仓库URL为你自己的仓库
2. 运行部署命令

```bash
npm run deploy
```

### 方法二：使用GitHub Actions自动部署

1. 将代码推送到GitHub仓库
2. GitHub Actions会自动构建并部署到gh-pages分支
3. 在GitHub仓库设置中启用GitHub Pages，选择gh-pages分支作为源

## 自定义

### 修改博客内容

编辑`src/views/Home.vue`和`src/views/BlogPost.vue`文件中的博客文章数据。

### 修改关于页面

编辑`src/views/About.vue`文件，更新个人信息。

### 修改样式

全局样式在`src/App.vue`和`src/style.css`中定义，各组件的样式在各自的`.vue`文件中。

## 许可证

[MIT](LICENSE)
