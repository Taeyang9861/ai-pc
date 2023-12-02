<!-- 布局文件 -->
<template>
    <div class="layout">
        <Header />
        <div class="content">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script setup>
import Header from "./header.vue";
import Footer from "./footer.vue";
</script>
<style scoped>
.layout {
    min-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: #fff;
    position: relative;
}
.content {
    flex: 1;
    max-width: 1440px;
    min-width: 1440px;
    margin: 24px auto 0;
    padding: 0 16px 32px;
    box-sizing: border-box;
}
</style>
