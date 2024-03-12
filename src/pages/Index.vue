<!--
User:Shier
CreateTime:10:10
-->
<template>
  <user-card-list :userList="userList" :loading="loading"></user-card-list>
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Toast} from "vant";

import qs from 'qs'
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";
import {CurrentUser} from "../models/person";


const userList = ref([]);//存放用户列表
const loading = ref();
// 使用钩子函数
onMounted(async () => {
  loading.value = true;
  // 为给定 ID 的 user 创建请求
  const userListData = await myAxios.get('/user/match', {
    withCredentials: true,
    params: {
      num: 10,
    },
    //序列化
    paramsSerializer: {
      serialize: params => qs.stringify(params, {indices: false}),
    },
  })
      .then(function (response) {
        console.log('/user/match succeed', response);
        return response?.data; //返回数据  ?.可选链操作符，避免数据为null或undefined时报错
      })
      .catch(function (error) {
        console.log('/user/match error', error);
        Toast.fail('请求失败');
      });
  if (userListData) {
    userListData.forEach((user: CurrentUser) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
    loading.value = false;
  }
})
</script>

<style scoped>

</style>