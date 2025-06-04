<script setup>
// 可以在这里添加组件逻辑
</script>

<template>
  <div class="about">
    <h1>关于我</h1>
    
    <div class="about-content">
      <div class="profile">
        <div class="avatar-placeholder">
          <!-- 这里可以放置头像 -->
          <div class="avatar-text">头像</div>
        </div>
        <h2>博主名称</h2>
        <p class="bio">前端开发工程师 | Vue爱好者 | 开源贡献者</p>
      </div>
      
      <div class="description">
        <h3>个人简介</h3>
        <p>
          欢迎来到我的个人博客！我是一名热爱前端技术的开发者，专注于Vue.js生态系统。
          通过这个博客，我希望能够分享我在前端开发过程中的经验、技巧和见解。
        </p>
        
        <h3>技能</h3>
        <ul class="skills">
          <li>JavaScript / TypeScript</li>
          <li>Vue.js / React</li>
          <li>HTML5 / CSS3</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
        
        <h3>联系方式</h3>
        <div class="contact">
          <p>
            <strong>Email:</strong> example@example.com
          </p>
          <p>
            <strong>GitHub:</strong> 
            <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }
  
  .profile {
    flex: 1;
  }
  
  .description {
    flex: 2;
  }
}

.profile {
  text-align: center;
}

.avatar-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-text {
  color: #666;
  font-size: 1.2rem;
}

.bio {
  color: #666;
  margin-bottom: 20px;
}

.description h3 {
  margin-top: 25px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 5px;
}

.description p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 0;
  list-style: none;
}

.skills li {
  background-color: #f0f0f0;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.contact {
  margin-top: 15px;
}

.contact p {
  margin-bottom: 10px;
}

.contact a {
  color: #42b883;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}
</style>