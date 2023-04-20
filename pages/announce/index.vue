<template>
	<b-container>
		<b-overlay :show="loading">
			<content-card-post :posts="announces" post-type="announce" />
		</b-overlay>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			announces: []
		}
	},
	methods: {
		async fetch() {
			const {data:{data:announces}} = await this.$axios.get('announces')
			this.announces = announces
      console.log(this.announces)
		}
	},
	async created() {
		this.loading = true
		await this.fetch()
		this.loading = false
	}
}
</script>
