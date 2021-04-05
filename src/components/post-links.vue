<template>
  <div>
    <div v-for="post in posts" :key="post.permalink">
      <span class="text-gray-500 mr-2">{{
        formatDate(post.date || post.createdAt)
      }}</span>
      <saber-link :to="post.permalink">{{ post.title }}</saber-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  methods: {
    formatDate: require('../utils').formatDate,
  },
}
</script>
