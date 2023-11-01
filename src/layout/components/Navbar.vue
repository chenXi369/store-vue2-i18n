<template>
  <div class="navbar">
    <span>{{ $t('navbar.callme') }}：+852 38950974</span>

    <div class="right-menu">
      <div class="menu-item">
        <lang-select />
      </div>
      <router-link to="/login" class="menu-item">
        <svg-icon icon-class="user" />
        <span>{{ $t('navbar.loginName') }}</span>
      </router-link>
      <div class="menu-item">
        <svg-icon icon-class="goodCar" />
        <span>{{ $t('navbar.goodCar') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect/index'

export default {
  components: {
    LangSelect
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 15%;
  height: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .right-menu {
    display: flex;
    flex-direction: row;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .menu-item {
      cursor: pointer;
      display: inline-block;
      padding: 0 12px;
      height: 100%;
      font-size: 15px;
      color: #666;
      vertical-align: text-bottom;

      span {
        margin-left: 4px;
      }

      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
