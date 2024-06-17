<script setup lang="ts">
import One from '../blogfiles/one.vue'
const BlogID = new URLSearchParams(window.location.search).get('id');
</script>
<template>
  <main>
    <div>
      <button style="border-radius:12px;background-color:#2a82c5;color:white;border: 1px solid transparent;padding: 0.6em 1.2em; font-size: 1em; font-weight: 500; font-family: inherit;cursor: pointer;transition: border-color 0.25s;" onclick="window.location.href='/bloglist'">返回</button>
        <div v-if="BlogID == '1'">
            <One />
        </div>
        <div v-else>
            <h1>404</h1>
            <p>找不到這篇文章</p>
            </div>
    </div>
</main>
</template>

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
</style>