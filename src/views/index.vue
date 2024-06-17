<script setup lang="ts">
//IMPORT COMPONENTS
// REDIRECT LINKS
const golink = new URLSearchParams(window.location.search).get('go');
if (golink == "ig") {window.location.href = "https://www.instagram.com/yh_.5_26/"; }
else if (golink == "gh") {window.location.href = "https://github.com/hpware";}
else if (golink == "th") {window.location.href = "https://threads.net/yh_.5_26";}
else if (golink == "blog") {window.location.href = "https://blog.hpware.hwtw.cc"}
else if (golink == "pgp") {window.location.href = "pgp.txt"}
else if (golink == "res") {window.location.href = "https://github.com/hpware/site-v2"}
else if (golink == "em") {window.location.href = "mailto:hw@hwtw.cc"}
</script>
<template>
  <main>
    <div>
        <h1>自我介紹</h1>
        <p>我是一個學生，準備在臺灣就讀有關資訊工程的五專。</p>
        <p>熟悉 HTML, CSS , Vercel , Debian CLI 與 MacOS CLI </p>
        <p>國中畢業後，正要學習 Vuejs , .NET Core , Python , TypeScript 開發語言 :)</p>

        <br>
        <hr>
        <h1>檢定通過</h1>
        <h2>GEPT</h2>
        <ul>
            <li>初級</li>
            <li>中級聽讀</li>
        </ul>
        <br>
        <hr>
        <h1>我的簡單 Projects</h1>
        <ul>
            <li>testconnectcenter (<a style="color:aquamarine" href="https://github.com/hpware/testconnectcenter">Source Code</a>) (<a href="https://testconnectcenter.azurewebsites.net">網站</a>)
            </li>
            <li>Site-V1 (<a style="color:aquamarine" href="https://github.com/hpware/hpware.github.io">Source Code</a>)(<a href="https://3002.hwtw.cc">網站</a>)</li>
            <li>Site-V2 (<a style="color:aquamarine" href="https://github.com/hpware/site-v2">Source Code</a>)(<a href="https://hpware.hwtw.cc">網站</a>)</li>
            <li>lovemusic.asia (<a style="color:aquamarine" href="/sourcecodena.html">Source Code</a>)(<a href="https://www.lovemusic.asia">網站</a>)</li>
        </ul>
        <br>
        <hr>
        <h1>社群連結</h1>
        <ul style="list-style-type: none;"> 
            <li>Instagram <a href="/?go=ig">yh_.5_26</a></li>
            <li>Threads <a href="/?go=th">yh_.5_26</a></li>
            <li>GitHub <a href="/?go=gh">hpware</a></li>
        </ul>
        <br>
        <hr>
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