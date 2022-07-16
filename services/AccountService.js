export default $service => ({
  async register (body, options) {
    return await $service.post('/register', body, options)
  },
})
