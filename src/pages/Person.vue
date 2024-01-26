<template>
<!--  用户存在时才展示页面-->
  <template v-if="user">
    <van-image
        round
        width="7rem"
        height="7rem"
        position="top"
        src="user.avatarUrl"
        @click="toEdit('avatarUrl', '头像', user.avatarUrl)"
    />

    <van-cell title="昵称" is-link to='/person/edit' :value="user.username"
              @click="toEdit('username', '昵称', user.username)"/>
    <van-cell title="账号" :value="user.userCount"/>
    <van-cell title="性别" is-link to='/person/edit' :value="user.gender == 1 ? '男' : '女'"
              @click="toEdit('gender', '性别', user.gender)"/>
    <van-cell title="电话" is-link to='/person/edit' :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link to='/person/edit' :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode"/>
    <van-cell title="注册时间" :value="user.createTime"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/person";

const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/person/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

const user = ref();
// 在User页面中，使用勾子函数，勾子函数会在页面加载前触发
onMounted(async () => {
  // const res = await myAxios.get('/user/current');
  // if (res.code === 200) {
  //   user.value = res.data;
  //   // showSuccessToast('获取用户信息成功');
  // } else {
  //   // showFailToast('获取用户信息成功');
  // }
  const res = await getCurrentUser();
  // console.log(user.value)
  if(res) {
    user.value = res;
  }
  else {
    router.push('/person/login');
  }
})
</script>

<style scoped>

</style>
