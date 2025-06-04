<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟博客文章数据
const blogPosts = ref([
  {
    id: 1,
    title: '开始使用Vue3',
    date: '2023-06-15',
    summary: 'Vue3的组合式API为我们提供了更灵活的组件逻辑组织方式...',
    content: '这是一篇关于Vue3的详细介绍文章，包含组合式API的使用方法和示例。'
  },
  {
    id: 2,
    title: 'Vite构建工具介绍',
    date: '2023-07-20',
    summary: 'Vite是一个现代前端构建工具，它显著提升了开发体验...',
    content: '这篇文章详细介绍了Vite的特性和优势，以及如何在项目中使用Vite。'
  },
  {
    id: 3,
    title: 'GitHub Pages部署指南',
    date: '2023-08-10',
    summary: '使用GitHub Pages可以免费托管你的静态网站...',
    content: '本文介绍了如何将Vue项目部署到GitHub Pages，包括配置和自动化部署流程。'
  }
])

const navigateToBlog = (id) => {
  router.push({ name: 'BlogPost', params: { id } })
}
</script>

<template>
  <div class="home">
    <header class="header">
      <h1>我的个人博客</h1>
      <p>分享前端开发的知识和经验</p>
    </header>
    
    <main class="content">
      <section class="blog-list">
        <h2>最新文章</h2>
        <div 
          v-for="post in blogPosts" 
          :key="post.id" 
          class="blog-card"
          @click="navigateToBlog(post.id)"
        >
          <h3>{{ post.title }}</h3>
          <div class="blog-meta">
            <span class="date">{{ post.date }}</span>
          </div>
          <p class="summary">{{ post.summary }}</p>
          <div class="read-more">阅读更多 →</div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
  color: #666;
}

.blog-list h2 {
  margin-bottom: 20px;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
}

.blog-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.blog-card h3 {
  margin-top: 0;
  color: #333;
}

.blog-meta {
  margin: 10px 0;
  font-size: 0.9rem;
  color: #666;
}

.summary {
  margin: 10px 0;
  line-height: 1.5;
}

.read-more {
  color: #42b883;
  font-weight: bold;
  margin-top: 10px;
}
</style>