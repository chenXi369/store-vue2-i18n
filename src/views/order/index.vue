<!-- 订单页 -->
<template>
  <div style="display: flex;">
    <!-- 左 -->
    <div style="width:60%;padding-left: 5%; height: 650px;">
      <el-steps direction="vertical" :active="active">
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤 4" description="这是一段很长很长很长的描述性文字" />
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
    <!-- 右 -->
    <div style="width:35%;padding-left: 2%;">
      <!-- card -->
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="margin-top: 20px;font-weight: bold;font-size: 16px; color:#24b9d7">  {{ $t('order.shoppingCart') }}</span>
          </div>
          <div style="margin-top: 20px;font-size: 16px; color:#7a7a7a"> <span>1 {{ $t('order.cartItem') }}</span>
          </div>
          <div style="margin-top: 20px;font-size: 16px; color:#24b9d7">
            <span>{{ $t('order.showDetails') }}</span>
          </div>
          <div style="margin-top: 20px;">
            <el-divider />
          </div>
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span>
              {{ $t('order.subtotal') }}
            </span>
            <span style="font-weight: bold;">
              $294.26
            </span>
          </div>
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span>
              {{ $t('order.shipping') }}
            </span>
            <span style="font-weight: bold;">
              {{ $t('order.free') }}
            </span>
          </div>
          <div style="margin-top: 20px;">
            <el-divider />
          </div>

          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span>
              {{ $t('order.totalTaxExcl') }}
            </span>
            <span style="font-weight: bold;">
              $294.26
            </span>
          </div>
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span style="font-weight: bold;">
              {{ $t('order.totalTaxIncl') }}
            </span>
            <span style="font-weight: bold;">
              $294.26
            </span>
          </div>

          <div style="margin-top: 40px;">
            <span>
              {{ $t('order.taxes') }}: <span style="font-weight: bold;">$294.26</span>
            </span>
          </div>
          <div style="margin-top: 20px; width: 100%; text-align: center;">
            <span style="color:#24b9d7">
              {{ $t('order.promoCode') }}
            </span>
          </div>

        </el-card>
        <div style="margin-left: 20px;margin-top: 20px;">
          <p style="margin-left: 20px;margin-top: 40px;">{{ $t('order.securityPolicy') }}</p>
          <p style="margin-left: 20px;margin-top: 40px;">{{ $t('order.deliveryPolicy') }}</p>
          <p style="margin-left: 20px;margin-top: 40px;">{{ $t('order.returnPolicy') }}</p>
        </div>

        <div style="margin-top: 20px;margin-left: 20px;">
          <p style="color:#7a7a7a"> {{ $t('order.tips') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
