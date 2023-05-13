<template>
	<content-detail :data="data" :loading="loading" />
</template>
<script>
export default {
	data() {
		return {
			loading: false,
			data: {}
		}
	},
	methods: {
		async getArticle() {
			const {data:{data}} = await this.$axios.get(`announces/${this.$route.params.id}`)
			this.data = data
		}
	},
	async created() {
		this.loading = true
		await this.getArticle()
		this.loading = false
	},
}
</script>
