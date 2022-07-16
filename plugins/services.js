import services from '~/services'

export default ({ $axios }, inject) => {
  inject('services', services($axios))
}