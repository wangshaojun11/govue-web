<template>
  <div class="register">
    <b-row class="mt-5"> <!-- 定义行 -->
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      > <!-- 定义列  中等屏幕 8格,左偏移2格
      在大屏幕上 6格 左偏移3格-->
        <b-card title="注册用户"> <!-- 新增card表单 -->
          <b-form>
            <b-form-group label="用户名">
              <b-form-input
                v-model="$v.user.name.$model"
                type="text"
                placeholder="输入用户名（选填）"
              ></b-form-input>
            </b-form-group>
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
                @click="register"
                variant="outline-primary"
                block
              >注册</b-button> <!-- 新增按钮 -->
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
        name: '',
        telephone: '',
        password: '',
      },
    };
  },
  // vuelidate
  validations: {
    user: {
      name: {
      },
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
    register() {
      // 1.验证数据
      // 1.1 用户与表单有交互才会有错误，将dirty制为true。没填写表单的时候也不会提交表单了。
      this.$v.user.$touch();
      // 1.2 判断表单是否有错误，有错误直接返回。
      if (this.$v.user.$anyError) {
        return;
      }
      // 2. 请求api
      const api = 'http://localhost:1016/api/auth/register';
      this.axios.post(api, { ...this.user }).then((res) => {
        // 2.1 保存token
        console.log(res.data);
        localStorage.setItem('token', res.data.data.token);
        // 2.2 跳转到主页
        this.$router.replace({ name: 'home' });
      }).catch((err) => { // 有错误则输出到前端错误信息
        console.log('err:', err.response.data.msg);
        this.$bvToast.toast(err.response.data.msg, {
          title: '数据验证错误',
          variant: 'danger',
          solid: true,
        });
      });
      console.log('register');
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
