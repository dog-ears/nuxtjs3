<template>
  <div class="page-product">
    <h2>Page: product（{{ $route.params.id }}）</h2>
    <div>商品ID：{{ data?.id }}</div>
    <div>商品名：{{ data?.name }}</div>
  </div>
</template>
  
  <script lang="ts" setup>
    const route = useRoute()
    const { data } = await useFetch(`/api/products/${route.params.id}`)
  </script>
  
  <style scoped></style>
  