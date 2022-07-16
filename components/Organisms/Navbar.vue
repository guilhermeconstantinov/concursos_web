<template>
  <nav class="h-15vh">
    <div class="flex items-center justify-between container py-3">
      <Logo />

      <div class="hidden md:flex space-x-8 text-lg">
        <t-button variant="link-purple">Home</t-button>
        <t-button variant="link-purple" :to="{ name: 'exercicios' }"
          >Questões</t-button
        >
        <t-button variant="link-purple">Concursos</t-button>
        <t-button variant="link-purple">Enem</t-button>
      </div>

      <div v-if="!$auth.loggedIn" class="hidden md:flex space-x-4">
        <t-button variant="purple-border" :to="{ name: 'login' }">
          Entrar
        </t-button>
        <t-button variant="purple" :to="{ name: 'cadastro' }">
          Cadastrar
        </t-button>
      </div>

      <div v-else>
        <t-button variant="purple-border" @click="logout"> Logout </t-button>
      </div>

      <ResponsiveMenu class="block md:hidden" />
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Atoms/Logo'
import ResponsiveMenu from '@/components/Molecules/ResponsiveMenu'
export default {
  components: { Logo, ResponsiveMenu },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.h-15vh {
  height: 15vh;
}
</style>