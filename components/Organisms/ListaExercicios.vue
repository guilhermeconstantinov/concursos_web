<template>
  <div class="space-y-4">
    <Exercicio v-for="(item, index) in listaQuestoes" :key="index" :data="item"/>
  </div>
</template>

<script>
import Exercicio from '@/components/Exercicios/Exercicio.vue'
export default {
  components: { Exercicio },
  props: {
    listaQuestoes: {
      type: Array,
      default: () => []
    }
  }
}
</script>
