<template>
  <div>
    <Bio v-if="$themeConfig.bio" :data="$themeConfig.bio" />

    <div class="my-4" v-if="postsByGroup.featured.length">
      <h3 class="text-2xl mb-4">Featured</h3>
      <post-links :posts="postsByGroup.featured"></post-links>
    </div>

    <div class="my-4">
      <h3 class="text-2xl mb-4">Posts</h3>
      <post-links :posts="postsByGroup.posts"></post-links>
    </div>
  </div>
</template>

<script>
import PostLinks from '../components/post-links'
import Bio from '../components/bio'

export default {
  props: ['page'],

  components: { PostLinks, Bio },

  computed: {
    postsByGroup() {
      const posts = [...this.page.posts]

      return {
        featured: posts.filter((post) => post.featured),
        posts: posts.filter((post) => !post.featured),
      }
    },
  },
}
</script>
