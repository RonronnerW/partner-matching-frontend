<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="editUser.editName"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import MyAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../services/person";

const route = useRoute();
const router = useRouter();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})
const onSubmit = async () => {
  // 异步方法必须添加 await 才可以拿到数据, 否则拿到的是 promise 对象
  const currentUser = await getCurrentUser();
  if(!currentUser) {
    router.push('person/login');
  }
  const res = await MyAxios.post("user/update",
      {'id': currentUser.id,
      [editUser.value.editKey]: editUser.value.currentValue}
  )
  if(res.code === 200 && res.data > 0) {
    // showSuccessToast("修改成功");
    router.back();
  }
  else {
    // showFailToast("修改失败");
  }
}

</script>
<style scoped>

</style>