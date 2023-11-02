<!-- 商品列表页 -->
<template>
  <div class="mobile-list">
    <div class="title">
      <h2>{{ $t('mobilePhone.title') }}</h2>
    </div>
    <div class="product-main">
      <section class="top-tool">
        <span style="text-indent: 20px">{{ $t('mobilePhone.totalText').replace('{0}', total) }}</span>
        <div>
          <span>{{ $t('mobilePhone.sort') }}：</span>
          <el-select v-model="value" size="small" :placeholder="$t('mobilePhone.sortText')">
            <el-option
              v-for="item in $t('mobilePhone.filterParam')"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </section>

      <ul class="product-list">
        <li v-for="row in total" :key="row" class="item">
          <item :good-row="row" />
        </li>
      </ul>

      <div class="footer">
        <div class="leftText">{{ $t('mobilePhone.pageText').replace('{0}', total).replace(
          '[0-1]', (queryParams.pageSize * (queryParams.pageNum - 1) + 1) + '-' + queryParams.pageSize * queryParams.pageNum) }}</div>
        <div class="pagination">
          <el-pagination layout="prev, pager, next" :page-size="queryParams.pageSize" :total="total" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/ProductItem/index.vue'

export default {
  components: {
    Item
  },
  data() {
    return {
      options: [{
        value: '1',
        label: 'Sales, highest to lowest'
      }, {
        value: '2',
        label: 'Relevance'
      }, {
        value: '3',
        label: 'Name, A to Z'
      }, {
        value: '4',
        label: 'Name, Z to A'
      },
      {
        value: '5',
        label: 'Price, low to high'
      },
      {
        value: '6',
        label: 'Price, high to low'
      }
      ],
      value: '',
      queryParams: {
        pageNum: 1,
        pageSize: 3
      },
      total: 3
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-list {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .title {
    width: 300px;
    height: 100px;
    border-radius: 12px;
  }

  .product-main {
    width: calc(100% - 350px);
    margin-left: 50px;

    .top-tool {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #686868;
    }
  }

  .footer {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftText {
      text-indent: 20px;
      color: #666666;
      min-width: 250px;
    }
  }
}

.product-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  .item {
    width: calc(33% - 40px);
    min-width: 250px;
    height: 360px;
    margin: 0 20px;
  }
}

.pagination {
  width: 100%;
  font-size: 1rem;
  text-align: right;
}
</style>
