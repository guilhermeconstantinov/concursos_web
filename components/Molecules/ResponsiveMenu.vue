<template>
  <div>
    <t-button variant="menu-mobile" @click="show = !show">
      <Icon icon="menu-mobile" class="w-6 h-6" />
    </t-button>

    <div
      v-if="show"
      class="fixed left-0 right-0 bottom-0 top-16 bg-white w-screen px-4"
    >
      <div class="space-y-4 text-lg">
        <t-button variant="link-purple-bg" class="w-full">Home</t-button>
        <t-button
          variant="link-purple-bg"
          class="w-full"
          :to="{ name: 'exercicios' }"
          >Questões</t-button
        >
        <t-button variant="link-purple-bg" class="w-full">Concursos</t-button>
        <t-button variant="link-purple-bg" class="w-full">Enem</t-button>

        <t-button
          variant="purple-border"
          class="w-full"
          :to="{ name: 'login' }"
        >
          Entrar
        </t-button>
        <t-button variant="purple" class="w-full" :to="{ name: 'cadastro' }">
          Cadastrar
        </t-button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Atoms/Icon'
export default {
  components: { Icon },
  data() {
    return {
      show: false,
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.show = false
    },
  },
}
</script>
