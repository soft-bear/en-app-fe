<template>
  <div>
    <content-scholarship-detail :data="scholarship" :loading="loading" />
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
