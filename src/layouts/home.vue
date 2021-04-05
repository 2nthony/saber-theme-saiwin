<template>
  <section class="post-content">
    <Bio v-if="page.bio" :data="$themeConfig.bio" />

    <slot />
  </section>
</template>

<script>
import Bio from '../components/bio'

export default {
  props: ['page'],
  components: { Bio },
  head: require('../utils').head,
}
</script>
