<!-- 商品列表页 -->
<template>
  <div class="mobile-list">
    <div class="title">
      <!-- <h3>{{ $t('') }}</h3> -->
    </div>
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
export default {

}
</script>

<style lang="scss" scoped>

</style>
