import { TButton } from 'vue-tailwind/dist/components'

export default {
  component: TButton,
  props: {
    fixedClasses: 'block transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-white px-4 py-2 bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    variants: {
      secondary: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
      error: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
      success: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600 px-5',
      link: 'text-blue-500 underline hover:text-blue-600',
      blank: '',
      alternative: 'box-border flex items-center justify-center rounded-full w-6 h-6 border border-red-500 text-xs text-red-500',
      'alternative-active': 'box-border flex items-center justify-center rounded-full w-6 h-6 bg-red-500 text-xs text-white',
      red: 'bg-red-600 hover:bg-red-500 rounded px-5 py-2 text-white'
    }
  }
}