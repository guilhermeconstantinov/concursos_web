<template>
  <div class="flex flex-col">
    <Navbar />

    <div class="flex-1">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Organisms/Navbar'
export default {
  components: { Navbar },
}
</script>


<style>
html,
body {
  height: 100vh;
}
</style>