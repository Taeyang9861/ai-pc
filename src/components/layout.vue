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
}
.content {
    flex: 1;
}
</style>
