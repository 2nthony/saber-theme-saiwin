<template>
  <section>
    <img
      v-if="data.avatar"
      :src="data.avatar"
      alt="portrait"
      class="w-40 h-40 rounded-full block mx-auto"
    />
    <div v-if="data.html" v-html="data.html" class="my-8"></div>
  </section>
</template>

<script>
export default {
  props: ['data'],
}
</script>
