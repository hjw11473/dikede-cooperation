<template>
  <div class="login-container app">
    <div class="backgorund">
      <div class="img">
        <img src="@/assets/img/common/logo.png" alt="" width="96px" height="96px" />
      </div>

      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
        label-position="left">
        <div class="box" />
        <!-- 用户名框 -->
        <el-form-item prop="loginName">
          <i class="el-icon-mobile-phone" style="margin-left: 15px" />
          <el-input ref="loginName" v-model="loginForm.loginName" placeholder="请输入用户名" name="loginName" type="text"
            tabindex="1" auto-complete="on" />
        </el-form-item>

        <!-- 密码框 -->
        <el-form-item prop="password">
          <i class="el-icon-lock" style="margin-left: 15px" />
          <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
            placeholder="请输入密码" name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <!-- 验证码 -->
        <div style="display: flex">
          <!-- item每一项 -->
          <el-form-item style="flex: 3">
            <!-- <span class="svg-container el-icon-user-solid" /> -->
            <span class="svg-container el-icon-s-tools" />
            <!-- 输入框 -->
            <el-input ref="pwd" v-model="loginForm.code" placeholder="输入验证码" />
            <!-- <span class="svg-container el-icon-user-solid" /> -->
          </el-form-item>
          <div style="height: 50px; flex: 1" @click="Verifi">
            <img :src="imgUrl" />
          </div>
        </div>

        <el-button :loading="loading" type="primary" style="width: 100%; margin-bottom: 30px" @click="handleLogin">登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        loginName: "",
        password: "",
        clientToken: "",
        code: "",
        loginType: 0,
      },
      imgUrl: "",
      random: Math.floor(Math.random() * 500),
      loginRules: {
        loginName: [
          { required: true, trigger: "blur", message: "用户名不能为空" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 2, max: 11, message: "密码格式不对", trigger: "blur" },
        ],
        code: [{ required: true, trigger: "blur", message: "验证码不能为空" }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
    this.Verifi();
    console.log(this);
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    // 登录账号
    async handleLogin() {
      this.$refs.loginForm.validate(async (viaRules) => {
        if (viaRules) {
          try {
            this.loading = true
            // 调用vuex中的setLogin
            await this.$store.dispatch('user/loginAction', this.loginForm)
            // 判断success的状态
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
            this.$router.push('/')
          } finally {
            this.loading = false
          }
        }
      })
    },
    // 获取验证码
    async Verifi() {
      try {
        await this.$store.dispatch("user/getCodeAPI", this.random);
        console.log(this.$store.state.user.Verifica);
        this.imgUrl = window.URL.createObjectURL(this.$store.state.user.Verifica);
        this.loginForm.clientToken = this.random;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.backgorund {
  width: 518px;
  height: 384px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 75px 35px 0;
  border-radius: 10px;
}

#VerificationCode {
  display: flex;
  align-self: auto;
}

.img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #e5e5e5;
$light_gray: transform;
$cursor: #000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    // color:transform
  }
}

.el-button--primary {
  height: 50px;
  background-color: #4f6ae7;
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #000;
$light_gray: #000;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(~@/assets/img/backgroundbe4fae7d.png);
  background-repeat: no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    // padding: 250px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
