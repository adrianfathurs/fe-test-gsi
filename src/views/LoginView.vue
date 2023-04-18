<template>
  <b-container id="login-view">
    <div class="d-flex h-100 align-items-center">
      <div class="w-100">
        <b-card>
            <center>
              <h2>Login</h2>
            </center>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-2" label="Username" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.username"
                  placeholder="Username"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group class="mt-2" id="input-group-2" label="Password" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.password"
                placeholder="Password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-center mt-2" v-if="errorMssg">
              <h6 class="mb-0 font-weight-bold text-danger">
                {{errorMssg}}
              </h6>
            </div>
            <div class="mt-3 d-flex justify-content-end">
              <b-button type="submit" variant="primary">Login</b-button>
              <b-button class="ms-2" type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import {signIn} from '../api/user'
import {setLocalStorage} from '../utils/storage'
export default {
  data() {
    return {
      form: {
        password: null,
        username: '',
      },
      errorMssg: null,
    }
  },
  methods: {
    async onSubmit(event) {
      try {
          this.errorMssg = null
          event.preventDefault()
          let response = await signIn(this.form)
          setLocalStorage('user', response.data)
          this.$router.push({name: 'dashboard'})
      } catch (error) {
          this.errorMssg = error.response.data.message
          console.log(error)
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.password = null
      this.form.name = ''
    }
  }
}
</script>
<style lang="scss">
  #login-view{
    max-width: 400px;
    height: 100vh;
  }
</style>