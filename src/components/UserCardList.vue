<template>
  <van-skeleton title avatar :row="3" :loading="props.loading" v-for="user in userList">
  <van-card
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
  </van-skeleton>
</template>
<script setup lang="ts">

import {CurrentUser} from "../models/person";

interface UserCardListProps {
  loading: boolean;
  userList: CurrentUser[];
}

// 给父组件设置默认值，保证数据不为空
const props = withDefaults(defineProps<UserCardListProps>(), {
  //@ts-ignore
  loading: true,
  userList: [] as UserType[],
});

</script>
<style scoped>

</style>