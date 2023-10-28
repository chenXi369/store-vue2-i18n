<template>
  <div class="header-top">
    <img class="logo" src="https://www.chinagads.com/img/chinagads-logo-1566632623.jpg" alt="">
    <ul class="menus">
      <li v-for="menu in menus" :key="menu" class="menu-item">{{ menu }}</li>
    </ul>
    <div class="input-area">
      <el-input></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: ['MOBILE PHONES', 'TABLETS', 'COMPUTER HARDWARE', 'OTHER']
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.header-top {
  padding: 20px 15%;
  height: 120px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: flex;
  justify-content: space-between;

  .logo {
    width: 160px;
    height: 80px;
  }

  .input-area {
    position: absolute;
    bottom: 10px;
    right: 20%;
  }

  .menus {
    text-align: right;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 30px;
    line-height: 30px;

    .menu-item {
      font-weight: 600;
      font-size: 18px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: #7a7a7a;
      padding: 0 20px;

      &:hover {
        color: #24b9d7;
      }
    }
  }
}
</style>
