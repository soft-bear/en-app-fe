<template>
  <b-modal id="modal-login" hide-footer hide-header>
    <template #modal-title>
      เข้าสู่ระบบ
    </template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email :" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password :" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter password"
          required></b-form-input>
      </b-form-group>

      <div class="d-block text-center">
        <b-button type="submit" variant="primary">
          <b-icon icon="box-arrow-in-right"></b-icon> เข้าสู่ระบบ
        </b-button>
        <nuxt-link class="btn btn-secondary" to="/register" @click="$bvModal.hide('modal-1')">
          <b-icon icon="pencil-square"></b-icon> ลงทะเบียน
        </nuxt-link>
        <!-- <b-button type="reset" variant="primary">
          <b-icon icon="arrow-repeat"></b-icon> ล้างข้อมูล
        </b-button> -->
      </div>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
