<template>
  <footer class="text-center mt-12 text-sm my-4">
    <div>
      2018 ~ {{ new Date().getFullYear() }}
      {{ $siteConfig.author }}
    </div>

    <div
      class="mt-2"
      v-if="$themeConfig.footnote"
      v-html="$themeConfig.footnote"
    ></div>
  </footer>
</template>
