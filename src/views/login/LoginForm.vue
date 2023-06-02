<template>
  <div class="login">
    <b-row class="mt-5"> <!-- 定义行 -->
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      > <!-- 定义列  中等屏幕 8格,左偏移2格
      在大屏幕上 6格 左偏移3格-->
        <b-card title="登录"> <!-- 新增card表单 -->
          <b-form>
            <b-form-group label="手机号">
              <b-form-input
                v-model="$v.user.telephone.$model"
                type="number"
                placeholder="输入手机号（必填）"
                :state="validateState('telephone')"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('telephone')">
                手机号必须符合规范
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="密码">
              <b-form-input
                v-model="$v.user.password.$model"
                type="password"
                placeholder="输入密码（必填）"
                :state="validateState('password')"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('password')">
                密码不能少于6位
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <b-button
                @click="login"
                variant="outline-primary"
                block
              >登录</b-button> <!-- 新增按钮 -->
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// 导入验证器
import { required, minLength } from 'vuelidate/lib/validators';
// 引入自定义验证器
import customValidator from '@/helper/validator';

export default {
  // 新增属性
  data() {
    return {
      user: {
        telephone: '',
        password: '',
      },
    };
  },
  // vuelidate
  validations: {
    user: {
      telephone: { // user.telephone required为必填，最大最小都是11位
        required,
        telephone: customValidator.telephoneValidator,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  // 提交注册
  methods: {
    validateState(name) {
      // 这里是 es6 解构赋值
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    login() {
      console.log('login');
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
