import AccountService from '~/services/AccountService.js'

export default ($axios) => ({
  account: AccountService($axios)
})