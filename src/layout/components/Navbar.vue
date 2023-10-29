<template>
  <div class="navbar">
    <span>联系电话：+852 38950974</span>

    <div class="right-menu">
      <div class="menu-item">
        <lang-select></lang-select>
      </div>
      <router-link to="/login" class="menu-item">
        <svg-icon icon-class="user"></svg-icon>
        <span>登录</span>
      </router-link>
      <div class="menu-item">
        <svg-icon icon-class="goodCar"></svg-icon>
        <span>购物车</span>
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
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
