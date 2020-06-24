<template>
<div>
    <section class="et-hero-tabs">
      <img src="/images/Q.jpg " style="width: 100%; height: 100%" />

      <div class="et-hero-tabs-container">
        <a class="et-hero-tab" href="#tab-es6">首页</a>
        <a class="et-hero-tab" href="#tab-flexbox">下载</a>
        <a class="et-hero-tab" href="#tab-react">登录</a>
        <a class="et-hero-tab" href="#tab-angular">特色</a>
        <a class="et-hero-tab" href="#tab-other">关于</a>
        <span class="et-hero-tab-slider"></span>
      </div>
    </section>
    <!-- Main -->
    <main class="et-main">
      <section class="et-slide" id="tab-es6">
        <h1>
          <video src="漫威-未来之战.mp4 " style="width: 100%; height: 100%" />
        </h1>
      </section>
      <section class="et-slide" id="tab-flexbox">
        <h1>安卓下载</h1>
        <h2>
          <a href="漫威-未来之战.mp4">
            <img src="/images/anzhuo.jpg" width="400" height="400" alt />
          </a>
        </h2>
      </section>
      <section class="et-slide" id="tab-react">
        <h1>登录账户</h1>
        <h3>这里 这里</h3>
      </section>
      <section class="et-slide" id="tab-angular">
        <h1>Angular</h1>
        <h3>something about angular</h3>
      </section>
      <section class="et-slide" id="tab-other">
        <h1>Other</h1>
        <h3>something about other</h3>
      </section>
    </main>
</div>
</template>

<script>
export default {
    mounted () {
        require('./assets/js/script.js')
    }
};
</script>

<style>
</style>