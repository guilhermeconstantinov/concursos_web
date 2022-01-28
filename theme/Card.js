import { TCard } from 'vue-tailwind/dist/components'

export default {
  component: TCard,
  props: {
    fixedClasses: {
      wrapper: 'border rounded-lg shadow-sm',
      body: '',
      header: 'border-b p-3 rounded-t',
      footer: 'border-t p-3 rounded-b'
    },
    classes: {
      wrapper: 'bg-white border-gray-100',
      body: 'p-10',
      header: 'border-gray-100',
      footer: 'border-gray-100'
    },
    variants: {
      danger: {
        wrapper: 'bg-red-50 text-red-700 border-red-200',
        header: 'border-red-200 text-red-700',
        footer: 'border-red-200 text-red-700'
      },
      exercicio: {
        body: ''
      },
      assunto: {
        body: 'px-6 py-4'
      },
      materia: {
        body: 'px-6 py-4',
        wrapper: 'bg-red-500 text-white'
      }
    }
  }
}