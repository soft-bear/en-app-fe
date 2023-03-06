<template>
	<b-container>
		<b-overlay :show="loading">
			<content-card-post :posts="data" post-type="announce" />
		</b-overlay>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			data: []
		}
	},
	methods: {
		async fetch() {
			const { data } = await this.$axios.get('https://www.melivecode.com/api/attractions')
			this.data = data
		}
	},
	async created() {
		this.loading = true
		await this.fetch()
		this.loading = false
	}
}
</script>
