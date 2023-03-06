<template>
	<b-container>
		<announce-postlist :posts="data" />
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			data: []
		}
	},
	methods: {
		async fetch() {
			const {data} = await this.$axios.get('https://api.nuxtjs.dev/posts')
			this.data = data
		}
	},
	async created() {
		await this.fetch()
	}
}
</script>
