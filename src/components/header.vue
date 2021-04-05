<template>
  <header class="z-40 h-14 mb-6">
    <div class="w-full h-full flex items-center">
      <div class="flex flex-1">
        <h1 class="text-xl">
          <saber-link to="/">{{ $siteConfig.title }}</saber-link>
        </h1>
      </div>
      <div class="flex flex-1 justify-end">
        <header-nav :nav="$themeConfig.nav" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from './header-nav'

export default {
  name: 'Header',

  components: {
    HeaderNav,
  },
}
</script>
