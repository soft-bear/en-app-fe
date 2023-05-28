<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col"><application /></div>
      </div>
    </div>
    <content-scholarship-detail :data="scholarship" :loading="loading" />
    <!-- <b-button v-b-modal.modal-application-form>Launch scrolling modal</b-button> -->
  </div>
</template>
<script>
export default {
	data() {
		return {
			loading: false,
      scholarship: {}
		}
	},
	methods: {
		async getScholarship() {
			const {data : {data}} = await this.$axios.get(`/scholarships/${this.$route.params.id}`)
      this.scholarship = data
		}
	},
	async created() {
		this.loading = true
		await this.getScholarship()
		this.loading = false
	},
}
</script>
