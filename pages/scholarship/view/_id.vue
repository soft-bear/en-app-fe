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
			const {data} = await this.$axios.get(`https://www.melivecode.com/api/attractions/${this.$route.params.id}`)
			this.data = data.attraction
		}
	},
	async created() {
		this.loading = true
		await this.getArticle()
		this.loading = false
	},
}
</script>
