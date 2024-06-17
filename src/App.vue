<script setup lang="ts">
import Socials from'./components/Socials.vue'
import Footer from './components/Footer.vue'
</script>
<template>
    <header>
    <img alt="hpware" class="logo" style="border-radius: 50%;" src="https://storage.hpware.hwtw.cc/img/index-pfp.png" />
    <div class="wrapper">
      <Socials />
    </div>

  </header>
    <router-view></router-view>
    <footer>
    <Footer />
  </footer>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 1em;
}
nav a {
  margin-right: 1em;
}
</style>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
</style>
