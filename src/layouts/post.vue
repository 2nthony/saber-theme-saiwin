<template>
  <article class="post-content">
    <h1>{{ page.title }}</h1>
    <span class="text-gray-500 text-xs font-semibold">
      {{ formatDate(page.date || page.createdAt) }}
    </span>

    <TOC v-if="page.toc" :headings="page.markdownHeadings"></TOC>

    <slot></slot>
  </article>
</template>

<script>
import TOC from '../components/toc'

export default {
  name: 'Post',
  props: ['page'],
  components: { TOC },
  head: require('../utils').head,
  methods: {
    formatDate: require('../utils').formatDate,
  },
}
</script>
