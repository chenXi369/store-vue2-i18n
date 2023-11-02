<!-- 商品详情页 -->
<template>
  <div style="display: flex;">
    <div style="width:50%;padding-left: 5%;">
      <!-- 左 -->
      <div>
        <el-image
          src="https://www.chinagads.com/1134-medium_default/grap…card-gigabyte-gv-n1650oc-4gd-4-gb-gddr5_99168.jpg"
          :fit="fit"
        />
      </div>
      <div>
        <ul style="display: flex; list-style: none">
          <li> <el-image
            style="width: 100px; height: 100px"
            src="https://www.chinagads.com/1134-medium_default/grap…card-gigabyte-gv-n1650oc-4gd-4-gb-gddr5_99168.jpg"
            :fit="fit"
          /></li>
          <li>
            <el-image
              style="width: 100px; height: 100px"
              src="https://www.chinagads.com/1131-small_default/graph…card-gigabyte-gv-n1650oc-4gd-4-gb-gddr5_99168.jpg"
              :fit="fit"
            />
          </li>
        </ul>
      </div>

    </div>

    <div style=" width:50%">

      <!-- 右 -->
      <!-- 商品名称 -->
      <div style="font-weight: bold;font-size: 26px;">GRAPHICS CARD GIGABYTE GV-N1650OC-4GD 4 GB GDDR5</div>
      <!-- 商品价格 -->
      <div style="margin-top: 20px;font-weight: bold;font-size: 20px; color:#24b9d7">$160.92</div>
      <!-- 不认识 -->
      <div style="margin-top: 20px;color:#7a7a7a">Tax excluded</div>
      <!-- 简介 -->
      <div style="margin-top: 20px;">If you're passionate about IT and electronics, like being up to date on technology
        and don't miss even the slightest details, buy Graphics card Gigabyte GV-N1650OC-4GD 4 GB GDDR5 at an
        unbeatable...</div>
      <!-- 数量 -->
      <div style="margin-top: 20px;">{{ $t('mobilePhone.quantity') }}</div>
      <div style="margin-top: 10px;">
        <span><el-input-number
          v-model="num"
          controls-position="right"
          :min="1"
          :max="100"
          @change="handleChange"
        /></span>
        <el-button style="margin-left: 20px;" type="primary" icon="el-icon-shopping-cart-2" disabled> {{
          $t('mobilePhone.toCart') }}</el-button>
      </div>
      <!-- Share -->
      <div style="margin-top: 40px;">
        {{ $t('mobilePhone.share') }}
        <el-button style="margin-left: 10px;" icon="el-icon-eleme" circle />
        <el-button style="margin-left: 10px;" icon="el-icon-platform-eleme" circle />
        <el-button style="margin-left: 10px;" icon="el-icon-ice-tea" circle />
      </div>

      <!-- 不认识  -->
      <div style="margin-top: 20px;">
        <p style="margin-left: 40px;margin-top: 40px;">{{ $t('order.securityPolicy') }}</p>
        <p style="margin-left: 40px;margin-top: 40px;">{{ $t('order.deliveryPolicy') }}</p>
        <p style="margin-left: 40px;margin-top: 40px;">{{ $t('order.returnPolicy') }}</p>
      </div>

      <!-- 那个啥 -->
      <div style="margin-top: 40px;">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('mobilePhone.description')">
            <p>If you're passionate about IT and electronics, like being up to date on technology and don't miss even the
              slightest details, buy Graphics card Gigabyte GV-N1650OC-4GD 4 GB GDDR5 at an unbeatable price.
            </p>
            <ul style="color:#7a7a7a">
              <li>Type: GDDR5</li>
              <li>Capacity: 4 GB</li>
              <li>Chipset: GeForce® GTX 1650</li>
              <li>Speed: 1665-1710 MHz</li>
              <li>Frequency: 8002 MHz</li>
              <li>Connection: PCI Express 3.0 (x16)</li>
              <li>Connection ports:
                <ul>
                  <li>DisplayPort 1.4 x 1</li>
                  <li>HDMI x 2</li>
                </ul>
              </li>

              <li>Recommended Use: Power supply 300 W</li>
              <li>Approx. dimensions: 19,1 x 11,2 x 3,6 cm</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane :label="$t('mobilePhone.productDetails')" />
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;

}
</style>
