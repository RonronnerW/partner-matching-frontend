<template>
  <div id="teamCreatePage">
    <van-search v-model="searchText" placeholder="请输入搜索关键词"  @search="onSearch"/>
    <team-card-list :teamList="teamList"></team-card-list>
    <van-empty v-if="teamList.length<1" description="数据为空"></van-empty>
    <van-floating-bubble v-model:offset="offset" icon="add" @click="doCreateTeam" />
  </div>


</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";

const router = useRouter()
const teamList = ref([]);
const searchText = ref();

const offset = ref({ x: 300, y: 560 });

const doCreateTeam = () => {// 创建队伍
  router.push({
    path: "/team/add"
  })
}
onMounted(() => {
  listTeam('');
})
const onSearch = (val) => {
  listTeam(val); //按搜索关键词搜索
}
const listTeam = async (val = '') => {
  const res = await myAxios.get("/team/getBuildTeam", {
    params: {
      searchText: val,
    },
  });
  if (res?.code === 200) {
    teamList.value = res.data;
  } else {
    Toast.fail('加载队伍失败，请刷新重试');
  }
}
</script>

<style scoped>

</style>