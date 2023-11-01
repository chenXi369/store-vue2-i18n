<template>
  <div class="footer">
    <ul class="footer-list">
      <li v-for="item in $t('footer.listKeys')" :key="item" class="item">
        <h4>{{ item }}</h4>
        <p v-for="name in curMenuItem($t('footer.itemList'), item)" :key="name">
          {{ name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    curMenuItem(arr, type) {
      return (arr, type) => {
        const curArr = arr.filter(i => i.key === type)
        return curArr[0].values
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 15%;

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    .item {
      width: 25%;

      p {
        cursor: pointer;
        color: #666;
        font-weight: 600;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
