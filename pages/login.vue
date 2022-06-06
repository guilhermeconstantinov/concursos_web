<template>
  <div class="bg-purple-400 h-full flex justify-center items-center py-10">
    <t-card class="w-2/5">
      <form class="grid rows-2 gap-4">
        <t-input placeholder="E-mail" />
        <t-input type="password" placeholder="Senha" />
        <t-button text="Entrar" />
        <t-button variant="link" text="Esqueci minha senha" />
      </form>
    </t-card>
  </div>
</template>

<script>
export default {
  layout: 'landing-page',
}
</script>