<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>页面未找到</h2>
    <p>抱歉，您访问的页面不存在。</p>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #42b883;
}

h2 {
  font-size: 2rem;
  margin: 10px 0 20px;
}

p {
  margin-bottom: 30px;
  color: #666;
  max-width: 500px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}
</style>