<template>
  <div class="register-page">
    <h3>{{ $t('register.title') }}</h3>
    <div class="register-container">
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" auto-complete="on"
        label-position="left">

        <el-form-item prop="username">
          <span class="svg-container">{{ $t('register.sex') }}</span>
          <el-radio-group v-model="registerForm.sex">
            <el-radio :label="0">{{ $t('register.sexArr')[0] }}</el-radio>
            <el-radio :label="1">{{ $t('register.sexArr')[1] }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="username">
          <span class="svg-container">{{ $t('register.username') }}</span>
          <el-input size="small" ref="username" v-model="registerForm.username" :placeholder="$t('register.username')"
            name="username" type="text" tabindex="1" auto-complete="on" />
        </el-form-item>

        <el-form-item prop="email">
          <span class="svg-container">{{ $t('register.email') }}</span>
          <el-input size="small" ref="email" v-model="registerForm.email" :placeholder="$t('register.email')"
            name="username" type="text" tabindex="1" auto-complete="on" />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <span class="svg-container">{{ $t('register.password') }}</span>
          </span>
          <el-input size="small" :key="passwordType" ref="password" v-model="registerForm.password" :type="passwordType"
            :placeholder="$t('register.password')">
            <el-button slot="append" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="birthDay">
          <span class="svg-container">{{ $t('register.birthDay') }}</span>
          <el-date-picker size="small" v-model="registerForm.birthDay" type="date" :placeholder="$t('register.birthDay')">
          </el-date-picker>
        </el-form-item>
        <!-- 同意隐私协议 -->
        <el-form-item>
          <el-checkbox v-model="agreement">{{ $t('register.agreement') }}</el-checkbox>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%; margin-bottom:30px;"
          @click.native.prevent="handleregister">{{ $t('register.logIn') }}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
        sex: null,
        birthdate: ''
      },
      registerRules: {
        email: [{ required: true, trigger: 'blur', validator: '' }],
        password: [{ required: true, trigger: 'blur', validator: '' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
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
    handleregister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/register', this.registerForm).then(() => {
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

<style lang="scss">
.register-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* reset element-ui css */
.register-container {
  width: 500px;
  height: 500px;
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
