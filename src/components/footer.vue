<template>
  <footer class="text-center mt-12 text-sm my-4">
    <p>
      2018 ~ {{ new Date().getFullYear() }}
      {{ $siteConfig.author }}
    </p>

    <p
      class="mt-2"
      v-if="$themeConfig.footnote"
      v-html="$themeConfig.footnote"
    ></p>
  </footer>
</template>
