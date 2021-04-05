<template>
  <div class="max-w-xl mx-auto -md:max-w-full -md:m-4">
    <Header></Header>

    <slot></slot>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'Root',

  components: {
    Header,
    Footer,
  },

  beforeMount() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.toggle('dark-theme')
    }
  },
}
</script>
