<!-- 首页 -->
<template>
  <div class="home-container">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
    </el-carousel>

    <div>
      <h3>POPULAR PRODUCTS</h3>
      <ul class="product-list">
        <li class="item" v-for="row in 8" :key="row">
          <item :goodRow="row"></item>
        </li>
      </ul>

      <p style="text-align: right; color: #666; line-height: 50px;">
        <router-link to="/allGoods">所有商品</router-link>
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>
  </div>
</template>

<script>
import Item from "@/components/ProductItem/index.vue"

export default {
  name: 'Home',
  components: {
      Item
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px 0;

    .product-list {
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0; margin: 0;

      .item {
        width: 250px;
        height: 360px;
        margin-top: 40px;
      }
    }
  }
}
</style>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
