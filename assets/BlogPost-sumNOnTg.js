import{r as d,j as h,c as s,a as e,t as n,u as m,h as i}from"./index-CNhde20U.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"blog-post-container"},b={class:"container"},f={key:0,class:"blog-post"},_={class:"post-content"},V={class:"post-header"},y={class:"post-meta"},P={class:"post-date"},H={class:"post-author"},E=["innerHTML"],j={key:1,class:"not-found"},k={__name:"BlogPost",props:{id:{type:String,required:!0}},setup(p){const c=p,r=m(),a=d([{id:1,title:"开始使用Vue3",date:"2023-06-15",author:"博主",content:`
      <h2>Vue3的新特性</h2>
      <p>Vue3带来了许多令人兴奋的新特性，包括组合式API、更好的TypeScript支持、更小的包体积等。</p>
      
      <h3>组合式API</h3>
      <p>组合式API是Vue3最重要的全新特性之一，它允许我们使用函数式的方式组织组件逻辑，使代码更加模块化和可重用。</p>
      
      <pre><code>
      import { ref, computed, onMounted } from 'vue'
      
      export default {
        setup() {
          // 响应式状态
          const count = ref(0)
          
          // 计算属性
          const doubleCount = computed(() => count.value * 2)
          
          // 方法
          function increment() {
            count.value++
          }
          
          // 生命周期钩子
          onMounted(() => {
            console.log('组件已挂载')
          })
          
          // 暴露给模板
          return {
            count,
            doubleCount,
            increment
          }
        }
      }
      </code></pre>
      
      <h3>Teleport组件</h3>
      <p>Teleport是一个新的内置组件，它可以将组件的一部分DOM"传送"到组件DOM树之外的位置。这对于创建模态框、通知等非常有用。</p>
      
      <h3>Fragments</h3>
      <p>Vue3组件现在可以有多个根节点，这使得组件模板更加灵活。</p>
    `},{id:2,title:"Vite构建工具介绍",date:"2023-07-20",author:"博主",content:`
      <h2>什么是Vite？</h2>
      <p>Vite是一个由Vue.js的创建者尤雨溪开发的前端构建工具，它利用浏览器原生ES模块导入功能，提供了极快的开发服务器启动和热模块替换（HMR）。</p>
      
      <h3>Vite的主要特点</h3>
      <ul>
        <li><strong>极速的服务器启动</strong>：Vite不需要在启动开发服务器时捆绑整个应用程序，而是利用浏览器的原生ES模块导入。</li>
        <li><strong>快速的热模块替换</strong>：Vite的HMR实现保持应用程序状态，同时更新修改的模块。</li>
        <li><strong>优化的构建</strong>：生产构建使用Rollup，它比基于webpack的构建通常更快，并产生更小的包。</li>
      </ul>
      
      <h3>使用Vite创建项目</h3>
      <p>使用以下命令可以快速创建一个Vite项目：</p>
      
      <pre><code>
      # npm
      npm create vite@latest my-project -- --template vue
      
      # yarn
      yarn create vite my-project --template vue
      
      # pnpm
      pnpm create vite my-project -- --template vue
      </code></pre>
      
      <h3>Vite配置</h3>
      <p>Vite的配置文件是<code>vite.config.js</code>，你可以在其中自定义构建行为：</p>
      
      <pre><code>
      import { defineConfig } from 'vite'
      import vue from '@vitejs/plugin-vue'
      
      export default defineConfig({
        plugins: [vue()],
        server: {
          port: 3000
        },
        build: {
          outDir: 'dist'
        }
      })
      </code></pre>
    `},{id:3,title:"GitHub Pages部署指南",date:"2023-08-10",author:"博主",content:`
      <h2>使用GitHub Pages部署Vue应用</h2>
      <p>GitHub Pages是GitHub提供的一项静态网站托管服务，可以免费托管你的个人、组织或项目页面。</p>
      
      <h3>配置Vue项目</h3>
      <p>要将Vue项目部署到GitHub Pages，首先需要正确配置项目：</p>
      
      <ol>
        <li>
          <p>在项目根目录创建<code>vue.config.js</code>文件（Vue CLI项目）或修改<code>vite.config.js</code>（Vite项目）：</p>
          <pre><code>
          // vue.config.js (Vue CLI)
          module.exports = {
            publicPath: process.env.NODE_ENV === 'production'
              ? '/your-repo-name/'
              : '/'
          }
          
          // vite.config.js (Vite)
          export default defineConfig({
            plugins: [vue()],
            base: process.env.NODE_ENV === 'production'
              ? '/your-repo-name/'
              : '/'
          })
          </code></pre>
        </li>
        
        <li>
          <p>创建部署脚本<code>deploy.sh</code>：</p>
          <pre><code>
          #!/usr/bin/env sh
          
          # 当发生错误时终止脚本运行
          set -e
          
          # 打包
          npm run build
          
          # 进入构建文件夹
          cd dist
          
          # 如果你要部署到自定义域名
          # echo 'www.example.com' > CNAME
          
          git init
          git add -A
          git commit -m 'deploy'
          
          # 如果你要部署在 https://<USERNAME>.github.io/<REPO>
          git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
          
          cd -
          </code></pre>
        </li>
      </ol>
      
      <h3>使用GitHub Actions自动部署</h3>
      <p>你也可以使用GitHub Actions实现自动部署：</p>
      
      <ol>
        <li>
          <p>在项目根目录创建<code>.github/workflows/deploy.yml</code>文件：</p>
          <pre><code>
          name: Deploy to GitHub Pages
          
          on:
            push:
              branches: [ main ]
          
          jobs:
            build-and-deploy:
              runs-on: ubuntu-latest
              steps:
                - name: Checkout
                  uses: actions/checkout@v3
          
                - name: Setup Node.js
                  uses: actions/setup-node@v3
                  with:
                    node-version: '16'
          
                - name: Install and Build
                  run: |
                    npm ci
                    npm run build
          
                - name: Deploy
                  uses: JamesIves/github-pages-deploy-action@v4
                  with:
                    folder: dist
                    branch: main
          </code></pre>
        </li>
      </ol>
      
      <h3>设置GitHub仓库</h3>
      <p>最后，在GitHub仓库的Settings > Pages中，将Source设置为gh-pages分支，这样当你推送代码或GitHub Actions运行成功后，你的网站就会自动部署。</p>
    `}]),o=h(()=>a.value.find(t=>t.id===parseInt(c.id))||null),u=()=>{r.push("/")};return(l,t)=>(i(),s("div",v,[e("div",b,[o.value?(i(),s("div",f,[e("button",{class:"back-button",onClick:u},"← 返回首页"),e("article",_,[e("header",V,[e("h1",null,n(o.value.title),1),e("div",y,[e("span",P,n(o.value.date),1),e("span",H,"作者: "+n(o.value.author),1)])]),e("div",{class:"content",innerHTML:o.value.content},null,8,E)])])):(i(),s("div",j,[t[0]||(t[0]=e("h2",null,"文章未找到",-1)),t[1]||(t[1]=e("p",null,"抱歉，您请求的文章不存在。",-1)),e("button",{class:"back-button",onClick:u},"返回首页")]))])]))}},M=g(k,[["__scopeId","data-v-b0f0f805"]]);export{M as default};
