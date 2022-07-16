<template>
  <div class="h-full">
    <t-card class="w-2/5 mx-auto">
      <form class="grid rows-2 gap-4" @submit.prevent="register">
        <t-input-group
          :feedback="feedbackName"
          :variant="{ danger: feedbackName }"
        >
          <t-input
            v-model="form.name"
            :variant="{ danger: feedbackName }"
            placeholder="Nome"
          />
        </t-input-group>

        <t-input-group
          :feedback="feedbackLastName"
          :variant="{ danger: feedbackLastName }"
        >
          <t-input
            v-model="form.last_name"
            :variant="{ danger: feedbackLastName }"
            placeholder="Sobrenome"
          />
        </t-input-group>

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
            type="password"
            :variant="{ danger: feedbackPassword }"
            placeholder="Senha"
          />
        </t-input-group>

        <t-input-group
          :feedback="feedbackRepeatPassword"
          :variant="{ danger: feedbackRepeatPassword }"
        >
          <t-input
            v-model="form.repeatPassword"
            type="password"
            :variant="{ danger: feedbackRepeatPassword }"
            placeholder="Confirmar senha"
          />
        </t-input-group>

        <t-input-group
          :feedback="feedbackBirthDate"
          :variant="{ danger: feedbackBirthDate }"
        >
          <t-datepicker
            v-model="form.birthdate"
            :variant="{ danger: feedbackBirthDate }"
            placeholder="Data Nascimento"
          />
        </t-input-group>

        <ButtonLoading text="Entrar" variant="blue" :loading="loading" />
      </form>
    </t-card>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import ButtonLoading from '~/components/Molecules/ButtonLoading'

export default {
  components: { ButtonLoading },
  layout: 'landing-page',
  auth: 'guest',
  data() {
    return {
      form: {
        name: null,
        last_name: null,
        email: null,
        password: null,
        repeatPassword: null,
        birthdate: null,
      },
      loading: false,
    }
  },
  validations: {
    form: {
      name: { required },
      last_name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      repeatPassword: {
        sameAsPassword: sameAs('password'),
      },
      birthdate: { required },
    },
  },
  computed: {
    feedbackName() {
      const name = this.$v.form.name

      if (!name.$error) {
        return ''
      }

      if (!name.required) {
        return 'Campo obrigatório*'
      }

      return ''
    },
    feedbackLastName() {
      const lastName = this.$v.form.last_name

      if (!lastName.$error) {
        return ''
      }

      if (!lastName.required) {
        return 'Campo obrigatório*'
      }

      return ''
    },
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
    feedbackRepeatPassword() {
      const repeatPassword = this.$v.form.repeatPassword

      if (!repeatPassword.$error && !this.feedbackPassword) {
        return ''
      }

      if (!repeatPassword.sameAsPassword) {
        return 'Confirmação de senha diferente'
      }

      if (this.feedbackPassword) {
        return 'Verifique a senha acima'
      }

      return ''
    },
    feedbackBirthDate() {
      const birthdate = this.$v.form.birthdate

      if (!birthdate.$error) {
        return ''
      }

      if (!birthdate.required) {
        return 'Campo obrigatório*'
      }

      return ''
    },
  },
  methods: {
    register() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      this.loading = true
      try {
        this.$services.account.register(this.form)
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>