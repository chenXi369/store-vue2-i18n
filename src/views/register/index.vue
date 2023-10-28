<template>
  <div class="register">
    <el-form
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="register-form"
    >
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="areaDeptId">
        <el-select
          v-model="registerForm.areaDeptId"
          placeholder="请选择服务地市"
          @change="selectDivisionVlue"
        >
          <el-option
            v-for="(dict, i) in redirectUrlOptions"
            :key="i"
            :label="dict.name"
            :value="dict.dictLabel"
          />
        </el-select>
      </el-form-item>
      <el-form-item prop="divisionCode">
        <el-select
          v-model="registerForm.divisionCode"
          placeholder="请选择服务区县"
          :disabled="canSelect"
        >
          <el-option
            v-for="(dict, i) in divisionpe"
            :key="i"
            :label="dict.name"
            :value="dict.dictLabel"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="cheboxList.length > 0" style="margin-bottom:0;!important">
        <el-radio-group v-model="registerForm.dynamic.businessType" max="1">
          <el-radio
            v-for="i in cheboxList"
            :key="i.id"
            style="margin-bottom: 5px"
            :label="i.dictLabel"
          >{{ i.dictLabel }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="userName">
        <el-input
          v-model="registerForm.userName"
          type="text"
          auto-complete="off"
          placeholder="账号"
          :maxlength="30"
          :minlength="2"
          @keyup.native="btKeyUp"
        >
          <svg-icon
            slot="prefix"
            icon-class="user"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="phonenumber">
        <el-input
          v-model="registerForm.phonenumber"
          type="text"
          placeholder="请输入电话号码"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          :maxlength="16"
          :minlength="6"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          type="password"
          auto-complete="off"
          placeholder="确认密码"
          :maxlength="16"
          :minlength="6"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>

      <el-form-item prop="userType">
        <el-select
          v-model="registerForm.userType"
          disabled
          placeholder="请选择账号类型"
        >
          <el-option
            v-for="dict in userTypeOptions"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <!-- <el-form-item prop="code" v-if="captchaOnOff">
        <el-input
          v-model="registerForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="validCode"
            class="el-input__icon input-icon"
          />
        </el-input>
        <div class="register-code">
          <img :src="codeUrl" @click="getCode" class="register-code-img" />
        </div>
      </el-form-item> -->
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleRegister"
        >
          <span v-if="!loading">注 册</span>
          <span v-else>注 册 中...</span>
        </el-button>
        <div style="float: right">
          <router-link
            class="link-type"
            :to="'/login'"
          >使用已有账户登录</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-register-footer">
      <span>Copyright © All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    var validatePass = (rule, value, callback) => {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{6,15}$/.test(value)) {
        callback(new Error('密码必须包含大写字母，小写字母，数字！'))
      }
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.confirmPassword !== '') {
          this.$refs.registerForm.validateField('confirmPwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{6,15}$/.test(value)) {
        callback(new Error('密码必须包含大写字母，小写字母，数字！'))
      }
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      divisionpe: null,
      canSelect: true,
      codeUrl: '',
      // 账号类型
      userTypeOptions: [
        { label: '民政', value: 'civil' },
        { label: '机构', value: 'organization' },
        { label: '老人或家属', value: 'family' }
      ],
      redirectUrlOptions: [],
      registerForm: {
        userName: '',
        password: '',
        confirmPassword: '',
        phonenumber: '',
        userType: 'organization',
        nickName: '',
        // code: "",
        // uuid: "",
        areaDeptId: '',
        deptId: '100',
        status: '1',
        roleIds: [103],
        dataSource: '机构注册',
        divisionCode: '',
        dynamic: {
          businessType: null
        }
      },
      registerRules: {
        userName: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入您的账号'
          },
          {
            min: 2,
            max: 30,
            message: '用户账号长度必须介于 2 和 30 之间',
            trigger: ['blur', 'change']
          }
        ],
        phonenumber: [
          {
            required: true,
            message: '手机号码不能为空',
            trigger: ['blur', 'change']
          },
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: '请输入正确的手机号码',
            trigger: ['blur', 'change']
          }
        ],
        areaDeptId: [
          {
            required: true,
            trigger: ['blur', 'change'],
            message: '请选择服务地市'
          }
        ],
        divisionCode: [
          {
            required: true,
            trigger: ['blur', 'change'],
            message: '请选择服务区县'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: ['blur', 'change']
          },
          { validator: validatePass, trigger: ['blur', 'change'] }
        ],
        confirmPassword: [
          {
            required: true,
            message: '请确认密码',
            trigger: ['blur', 'change']
          },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: ['blur', 'change']
          },
          {
            validator: validatePass2,
            trigger: ['blur', 'change'],
            required: true
          }
        ],
        code: [{ required: true, trigger: 'change', message: '请输入验证码' }]
      },
      loading: false,
      captchaOnOff: true,
      divisionPlaceholder: '请先选在服务地市',
      cheboxList: []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
::v-deep .el-radio {
  width: 80px !important;
  margin-bottom: 15px !important;
}
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.register-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.register-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.register-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-register-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.register-code-img {
  height: 38px;
}
</style>
