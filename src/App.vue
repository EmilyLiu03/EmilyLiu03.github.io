<script setup>
// 不需要导入HelloWorld组件，因为我们将使用路由
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <router-link to="/">个人博客</router-link>
        </div>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
          <a href="https://github.com/yourusername/vue-blog" target="_blank" class="nav-link">GitHub</a>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} 个人博客. 使用 Vue.js 构建.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全局样式 */
:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --text-color: #2c3e50;
  --light-gray: #f5f5f5;
  --border-color: #eaeaea;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo a {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
}

.nav-link:hover,
.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  padding: 40px 0;
}

/* 页脚样式 */
.footer {
  background-color: var(--light-gray);
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.footer p {
  margin: 0;
  color: #666;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
