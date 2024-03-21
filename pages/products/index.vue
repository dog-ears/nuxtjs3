<template>
  <div class="page-products">
    <h2>Page: products</h2>
    <div
      v-if="data"
      class="list"
    >
      <ul>
        <li
          v-for="product in data"
          :key="product.id"
        >
          <NuxtLink :to="`/products/${product.id}`">
            {{ product.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch('/api/products')
</script>

<style scoped></style>
