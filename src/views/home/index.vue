<!-- 首页 -->
<template>
  <div class="home-container">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item" />
    </el-carousel>

    <div>
      <h2 style="padding-top: 15px">{{ $t('home.popularPro') }}</h2>
      <ul class="product-list">
        <li v-for="row in 8" :key="row" class="item">
          <item :good-row="row" />
        </li>
      </ul>

      <p style="text-align: right; color: #666; line-height: 50px;">
        <router-link to="/allGoods">{{ $t('home.allProduct') }} </router-link>
        <i class="el-icon-arrow-right" />
      </p>
    </div>
  </div>
</template>

<script>
import Item from '@/components/ProductItem/index.vue'

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
      padding: 20px;
      padding: 0; margin: 0;

      .item {
        width: calc(25% - 40px);
        min-width: 250px;
        height: 360px;
        margin: 20px;
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
