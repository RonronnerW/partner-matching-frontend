<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPwd"
          type="password"
          name="userPwd"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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
import myAxios from "../plugins/myAxios.ts";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const userAccount = ref('');
const userPwd = ref('');

const onSubmit = async () => {
  const res = await myAxios.post("user/login",
      {userAccount: userAccount.value,
      userPwd: userPwd.value}
  );
  if (res.code == 200 && res.data != null) {
    // showSuccessToast("登录成功");
    router.replace("/")
  } else {
    // showFailToast("登录失败");
  }
};
</script>
<style scoped>

</style>