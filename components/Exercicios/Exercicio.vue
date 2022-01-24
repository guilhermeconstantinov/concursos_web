<template>
  <t-card>
    <Enunciado />
    <div class="space-y-4">
      <Alternativa v-model="select" label="a" :content="data.alternatives.a" />
      <Alternativa v-model="select" label="b" :content="data.alternatives.b" />
      <Alternativa v-model="select" label="c" :content="data.alternatives.c" />
      <Alternativa v-model="select" label="d" :content="data.alternatives.d" />
      <Alternativa v-model="select" label="e" :content="data.alternatives.e" />
    </div>
    <t-button text="Responder" variant="red" class="my-4" @click="resposta = true"/>
    <t-alert :show="resposta" :dismissible="false" class="my-5">
      Resposta é C
    </t-alert>
  </t-card>
</template>

<script>
import Alternativa from '@/components/Exercicios/Alternativa'
import Enunciado from '@/components/Exercicios/Enunciado'
export default {
  components: { Alternativa, Enunciado },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      select: '',
      resposta: false,
    }
  },
  methods:{
    responder(){
      // metodo para enviar a resposta da questão
    }
  }
}
</script>