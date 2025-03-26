<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

onMounted(() => {
  // Any initialization logic if needed
});
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #161317;
  --secondary-color: #f8f7f8;
  --accent-color: #2693e4;
  --text-color: #333;
  --light-gray: #c4c4c6;
  --border-color: #e1e1e1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--secondary-color);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e7cc7;
  }
}
</style>
