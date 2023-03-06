<template>
	<announce-postlist :posts="data" />
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
