<template>
  <div>
    <Filtros />
    <ListaExercicios :lista-questoes="questoes" />
  </div>
</template>

<script>
import Filtros from '@/components/Exercicios/Filtros'
import ListaExercicios from '@/components/Organisms/ListaExercicios'

export default {
  components: { Filtros, ListaExercicios },
  layout: 'landing-page',
  data() {
    return {
      questoes: [],
    }
  },
  fetch() {
    this.questoes = [
      {
        body: '<p>Testando 1, 2 e 3</p>',
        wording: 'asdasdasdasdasd',
        alternatives: {
          a: 'promover o encontro literário entre pessoas com deficiência visual.',
          b: 'divulgar o empréstimo de livros para alunos com dificuldades de acessibilidade.',
          c: 'reivindicar a digitalização do acervo das bibliotecas públicas para leitores cegos.',
          d: 'oferecer a oportunidade de apoio a um projeto para leitores com necessidades especiais.',
          e: 'estimular a arrecadação de livros apropriados para os estudantes com dificuldade de leitura.',
        },
        correct: 'd',
      },
      {
        body: '<p>Testando 1, 2 e 3</p>',
        wording: 'asdasdasdasdasd',
        alternatives: {
          a: 'promover o encontro literário entre pessoas com deficiência visual.',
          b: 'divulgar o empréstimo de livros para alunos com dificuldades de acessibilidade.',
          c: 'reivindicar a digitalização do acervo das bibliotecas públicas para leitores cegos.',
          d: 'oferecer a oportunidade de apoio a um projeto para leitores com necessidades especiais.',
          e: 'estimular a arrecadação de livros apropriados para os estudantes com dificuldade de leitura.',
        },
        correct: 'd',
      },
    ]
  },
}
</script>