<!--
User:Shier
CreateTime:10:10
-->
<template>
  <user-card-list :userList="userList"></user-card-list>
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {Toast} from "vant";

import qs from 'qs'
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);//存放用户列表
// 使用钩子函数
onMounted(async () => {//异步调用
  // 为给定 ID 的 user 创建请求
  const userListData = await myAxios.get('/user/tags', {
    params: {
      tags: tags
    },
    //序列化
    paramsSerializer: {
      serialize: params => qs.stringify(params, {indices: false}),
    },
  })
      .then(function (response) {
        console.log('/user/tags succeed', response);
        return response?.data; //返回数据  ?.可选链操作符，避免数据为null或undefined时报错
      })
      .catch(function (error) {
        console.log('/user/tags error', error);
        Toast.fail('请求失败');
      });
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})
</script>

<style scoped>

</style>