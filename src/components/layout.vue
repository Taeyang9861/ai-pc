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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #141416;
}
.content {
    flex: 1;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
