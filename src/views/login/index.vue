<template>
  <div class="login-page">
    <h3>{{ $t('login.title') }}</h3>
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >

        <el-form-item prop="username">
          <span class="svg-container">{{ $t('login.email') }}</span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            size="small"
            :placeholder="$t('login.email')"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <span class="svg-container">{{ $t('login.password') }}</span>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            size="small"
            :type="passwordType"
            :placeholder="$t('login.password')"
          >
            <el-button slot="append" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </el-button>
          </el-input>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          style="width:100%; margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >{{ $t('login.logIn') }}</el-button>

        <div class="tips">
          <router-link to="/register">{{ $t('login.noAccount') }}</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* reset element-ui css */
.login-container {
  width: 500px;
  height: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 40px 60px;
  box-sizing: border-box;
  margin-top: 20px;

  .svg-container {
    min-width: 80px;
    max-width: 120px;
    display: inline-block;
  }

  .el-input {
    width: 300px;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
}
</style>
