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
			const {data} = await this.$axios.get('https://www.melivecode.com/api/attractions')
			this.data = data
		}
	},
	async created() {
		await this.fetch()
	}
}
</script>
