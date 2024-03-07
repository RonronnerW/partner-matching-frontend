<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>
<script setup lang="ts">

import {CurrentUser} from "../models/person";

interface UserCardListProps{
  userList: CurrentUser[];
}
// 给父组件设置默认值，保证数据不为空
const props= withDefaults(defineProps<UserCardListProps>(),{
  //@ts-ignore
  userList: [] as UserType[]
});

</script>
<style scoped>

</style>