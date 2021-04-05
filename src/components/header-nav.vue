<template>
  <div class="flex items-center text-sm">
    <div v-for="(item, k) in nav" :key="k" class="not-first:ml-6">
      <saber-link :to="item.link">{{ item.title }}</saber-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      required: true,
    },
  },
}
</script>
