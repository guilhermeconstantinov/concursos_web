<template>
  <div class="min-h-screen">
    <Navbar />

    <div class="min-height border border-red-500">
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
.min-height {
  min-height: 85vh;
}
</style>