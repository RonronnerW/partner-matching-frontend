<template>
  <div id="teamCardList">

    <van-card
        v-for="team in props.teamList"
        :thumb="mouse"
        :desc="team.description"
        :title="`${team.name}`"
    >
      <template #tags>
        <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px">
          {{
            teamStatusEnum[team.status]
          }}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{ '队伍人数: ' + team.nums +' / ' + team.maxNum }}
        </div>
        <div v-if="team.expireTime">
          {{ '过期时间: ' + team.expireTime }}
        </div>
        <div>
          {{ '创建时间: ' + team.createTime }}
        </div>
      </template>
      <template #footer>
        <van-button v-if="team.userId!=currentUser?.id && !team.hasJoin" size="small" type="primary" plain @click="preJoinTeam(team)">加入队伍
        </van-button>
        <van-button v-if="team.userId==currentUser?.id" size="small" type="primary" plain @click="doUpdateTeam(team.id)">更新队伍</van-button>
        <van-button v-if="team.hasJoin && team.userId!=currentUser?.id" size="small" type="danger" plain @click="doQuitTeam(team.id)">退出队伍</van-button>
        <van-button v-if="team.userId==currentUser?.id" size="small" type="danger" plain @click="doDeleteTeam(team.id)">解散队伍</van-button>
      </template>
    </van-card>
    <van-dialog v-model:show="showPasswordDialog" title="请输入密码" show-cancel-button @confirm="doJoinTeam" @cancel="doJoinCancel">
      <van-field v-model="password" type="password" placeholder="请输入密码"/>
    </van-dialog>
  </div>


</template>

<script setup lang="ts">
import {TeamType} from "../models/team";
import {teamStatusEnum} from "../constants/team";
import mouse from '../assets/1.jpg';
import myAxios from "../plugins/myAxios";
import {showNotify} from 'vant';
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/person.ts";
import {useRouter} from "vue-router";
const router = useRouter();


interface TeamCardListProps {
  teamList: TeamType[];
}

const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType[],
});

/**
 * 加入队伍
 */
const showPasswordDialog = ref(false);
const password = ref('');
const joinTeamId = ref(0);
const currentUser = ref();

onMounted(async () => {
  currentUser.value = await getCurrentUser();
})
const preJoinTeam = (team: TeamType) => {
  joinTeamId.value = team.id;
  if (team.status === 0) {
    doJoinTeam()
  } else {
    showPasswordDialog.value = true;
  }
}

const doJoinTeam = async () => {
  const res = await myAxios.post('/team/join', {},
      {
        params: {
          // password: password,
          teamId: joinTeamId.value,
          password: password.value,
        }
      }
  );
  if (res?.code === 200) {
    showNotify({type: 'success', message: '加入成功'});
  } else {
    showNotify({type: 'danger', message: '加入失败, ' + res.msg});
  }
  doJoinCancel();
}
const doJoinCancel = () => {
  joinTeamId.value = 0;
  password.value = '';
}

const doQuitTeam = async (id: number) => {
  const res = await myAxios.post('/team/quit', {},
      {
        params: {
          teamId: id,
        }
      }
  );
  if (res?.code === 200) {
    showNotify({type: 'success', message: '退出成功'});
  } else {
    showNotify({type: 'danger', message: `退出失败, ${res.msg}`});
  }
}
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post('/team/delete', {},
      {
        params: {
          teamId: id,
        }
      }
  );

  if (res?.code === 200) {
    showNotify({type: 'success', message: '解散成功'});
  } else {
    showNotify({type: 'danger', message: `解散失败, ${res.msg}`});
  }
}
/**
 * 更新队伍信息
 * @param id
 * @param password
 */
const doUpdateTeam = async (id:number) => {
  router.push({
    path: '/team/update',
    query:{
      id,
    }
  })
}
</script>

<style scoped>
#teamCardList :deep(.van-image__img) {
  height: 128px;
  object-fit: unset;
}
</style>