<template>
  <van-image
      round
      width="7rem"
      height="7rem"
      position="top"
      src="user.avatarUrl"
      @click="toEdit('avatarUrl', '头像', user.avatarUrl)"
  />

  <van-cell title="昵称" is-link to='/person/edit' :value="user.username"
            @click="toEdit('userName', '昵称', user.username)"/>
  <van-cell title="账号" :value="user.userCount"/>
  <van-cell title="性别" is-link to='/person/edit' :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link to='/person/edit' :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to='/person/edit' :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: '鱼皮',
  userCount: 'dogYupi',
  avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJmFexgpFh7JQ1FUpSMyLywqh2uNNXDlU76n3rwNXvUgqEsnDzichH6QcVr2Jj90ZnMoZK3mJrJmjRGTYL1bq7m9yrGAGLZ1BVk92synibz6HJw/132',
  gender: '男',
  phone: '12131133313',
  email: '23432444@qq.com',
  planetCode: '2220',
  createTime: new Date(),
};
const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/person/edit',
    params: {
      a: 1
    },
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>
