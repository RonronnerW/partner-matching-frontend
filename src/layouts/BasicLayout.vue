<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <!-- 通过插槽自定义导航栏右侧的查找。 -->
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <!-- 监听切换事件-->
  <van-tabbar route >
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/person" icon="friends-o" name="person">个人</van-tabbar-item>
  </van-tabbar>

  <div id="content">
    <router-view/>
  </div>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import routes from "../configs/route.ts";
const DEFAULT_TITLE = ref("伙伴匹配");
const title = ref(DEFAULT_TITLE);
const router = useRouter();

router.beforeEach((to, from) => {
    const toPath = to.path;
    const route = routes.find((route) => {
      return toPath == route.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})
const onClickLeft = () => {
  router.back();
}
const onClickRight = () => {
  router.push("/search");
}

</script>

<style scoped>
#content{
  padding-bottom: 50px;
}
</style>