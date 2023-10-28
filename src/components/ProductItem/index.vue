<template>
  <div class="product-item" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <img class="avatar" :src="goodRow.avatar" alt="">
    <p class="intro">{{ goodRow.intro }}</p>
    <p class="price">{{ goodRow.price }}</p>

    <transition name="el-zoom-in-bottom">
      <div v-if="showDetailBox" class="detail" @click="toGoodDetail(goodRow)">
        <el-button type="text" icon="el-icon-search">详情</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    goodRow: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showDetailBox: false
    }
  },
  methods: {
    mouseenter() {
      this.showDetailBox = true
    },
    mouseleave() {
      this.showDetailBox = false
    },
    // 跳转商品详情页
    toGoodDetail(row) {
      this.$router.push({
        path: '/goods/detail',
        query: {
          id: row.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fff;
  position: relative;

  .detail {
    width: calc(100% - 40px);
    margin: 0 20px;
    position: absolute;
    top: 210px;
    left: 0;
    text-align: center;
    border-bottom: 1px solid #999;
  }

  .avatar {
    width: 250px;
    height: 250px;
  }

  .price {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
  }

  .intro {
    color: #999;
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
  }
}
</style>