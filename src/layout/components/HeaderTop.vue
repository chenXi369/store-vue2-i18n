<template>
  <div class="header-top">
    <img class="logo" src="https://www.chinagads.com/img/chinagads-logo-1566632623.jpg" alt="">
    <ul class="menus">
      <li v-for="menu in $t('navbar.menus')" :key="menu" class="menu-item" @click="linkTo(menu)">{{ menu }}</li>
    </ul>
    <div class="input-area">
      <el-input />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    linkTo(name) {
      console.log(name)
      if (name === '移动产品' || name === 'MOBILE PHONES') {
        this.$router.push({
          name: 'MobilePhone'
        })
      }
    }
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
    right: 16%;
  }

  .menus {
    width: 55%;
    text-align: right;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
      cursor: pointer;

      &:hover {
        color: #24b9d7;
      }
    }
  }
}
</style>
