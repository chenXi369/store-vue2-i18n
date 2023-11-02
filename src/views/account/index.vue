<!-- 我的账户页 -->
<template>
  <div class="account-page">
    <h3>{{ $t('account.title') }}</h3>

    <ul class="account-list">
      <li class="account-item">
        <img src="@/assets/image/user-icon.png">
        <span>{{ $t('account.name1') }}</span>
      </li>
      <li class="account-item">
        <img src="@/assets/image/address-icon.png">
        <span>{{ $t('account.name2') }}</span>
      </li>
      <li class="account-item">
        <img src="@/assets/image/order-icon.png">
        <span>{{ $t('account.name3') }}</span>
      </li>
    </ul>
    <p class="logout" @click="logout">{{ $t('account.logoutName') }}</p>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'

export default {
  data() {
    return {
      dialogTitle: this.$t('account.dialogTitle')
    }
  },
  methods: {
    // 退出登录
    logout() {
      this.$confirm(this.$t('account.dialogTitle'), this.$t('account.dialogStatus'), {
        confirmButtonText: this.$t('account.confirm'),
        cancelButtonText: this.$t('account.cancel'),
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: this.$t('account.logoutSuccess')
        })
        removeToken()
        this.$router.push('/home')
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.account-page {
  width: 100%;

  .account-list {
    margin-top: 30px;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    justify-content: space-around;

    .account-item {
      width: 32%;
      height: 130px;
      border-radius: 10px;
      background: #fff;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        border: 1px solid #eee;
        box-shadow: 6px 8px 6px #eaeaea;
        opacity: 0.6;
      }

      img {
        width: 42px;
        height: 42px;
        margin-bottom: 12px;
      }
    }
  }

  .logout {
    text-align: center;
    line-height: 80px;
    font-size: 16px;
    color: #1890ff;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
