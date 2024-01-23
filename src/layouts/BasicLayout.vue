<template>
    <!-- 顶部导航栏 -->
    <van-nav-bar
        title="标题"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
    <!-- 通过插槽自定义导航栏右侧的查找。 -->
    <template #right>
        <van-icon name="search" size="18" />    
    </template>
    </van-nav-bar>

    <!-- 监听切换事件-->
    <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/Team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/Person" icon="friends-o" name="person">个人</van-tabbar-item>
    </van-tabbar>

    <div id="content">
        <router-view />
    </div>

</template>

<script setup lang="ts">
    const onClickLeft = () => alert('左');
    const onClickRight = () => alert('右');

</script>

<style scoped>
    
</style>