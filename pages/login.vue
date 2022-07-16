<template>
  <div class="py-10">
    <t-card class="w-2/5 mx-auto">
      <form class="grid rows-2 gap-4" @submit.prevent="login">
        <t-input-group
          :feedback="feedbackEmail"
          :variant="{ danger: feedbackEmail }"
        >
          <t-input
            v-model="form.email"
            :variant="{ danger: feedbackEmail }"
            placeholder="E-mail"
          />
        </t-input-group>

        <t-input-group
          :feedback="feedbackPassword"
          :variant="{ danger: feedbackPassword }"
        >
          <t-input
            v-model="form.password"
            :variant="{ danger: feedbackPassword }"
            type="password"
            placeholder="Senha"
          />
        </t-input-group>
        <ButtonLoading text="Entrar" variant="blue" :loading="loading" />
        <t-button variant="link" text="Esqueci minha senha" />
      </form>
    </t-card>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import ButtonLoading from '~/components/Molecules/ButtonLoading'

export default {
  components: { ButtonLoading },
  layout: 'landing-page',
  auth: 'guest',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      loading: false,
    }
  },
  computed: {
    feedbackEmail() {
      const email = this.$v.form.email

      if (!email.$error) {
        return ''
      }

      if (!email.required) {
        return 'Campo obrigatório*'
      }

      if (!email.email) {
        return 'E-mail inválido'
      }

      return ''
    },

    feedbackPassword() {
      const password = this.$v.form.password

      if (!password.$error) {
        return ''
      }

      if (!password.required) {
        return 'Campo obrigatório*'
      }

      if (!password.minLength) {
        return 'Senha com no mínimo 6 caracteres'
      }

      return ''
    },
  },
  validations: {
    form: {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    async login() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      this.loading = true
      try {
        await this.$auth.loginWith('local', { data: this.form })
      } catch (e) {
        if (e.response) {
          this.$toast.error(e.response.data.message)
        } else {
          this.$toast.error('Erro desconhecido')
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>