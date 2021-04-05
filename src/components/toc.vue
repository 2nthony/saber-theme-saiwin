<template>
  <section class="my-5 border border-gray-200 py-4 px-5" v-if="headings.length">
    <span class="uppercase inline-block font-bold">索引</span>
    <ul class="mt-4 ml-5">
      <template v-for="head in headings">
        <li :key="head.slug" v-if="head.level === 2">
          <a :href="`#${head.slug}`">{{ head.text }}</a>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['headings'],
}
</script>

<style scoped>
a {
  color: rgb(59, 130, 246) !important;
  box-shadow: none !important;
  border-bottom: none !important;
}
</style>
