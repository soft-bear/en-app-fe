<template>
	<b-container fluid>
		<b-row class="my-4">
			<b-col cols="12" lg="9" md="6" sm="12">
				<b-card class="mb-2">
					<template #header>
						<b-row>
							<b-col>{{ data.name }}</b-col>
							<b-col class="text-right small">{{ data.latitude }} | โดย : {{ data.longitude }}</b-col>
						</b-row>
					</template>
					<div class="text-center mb-3">
						<b-img :src=data.coverimage fluid :alt=data.name />
					</div>
					{{ data.detail }}
				</b-card>
			</b-col>
			<b-col cols="12" lg="3" md="6" sm="12">
				<b-card border-variant="dark" class="mb-2">
					<template #header>
						<h4 class="mb-0">เอกสารประกอบ</h4>
					</template>
					<b-card-text>
						<b-alert show variant="secondary">ไม่มีเอกสารประกอบสำหรับข่าวนี้</b-alert>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
export default {
	layout: "content",
	data() {
		return {
			data: {}
		}
	},
	async created() {
		await this.getArticle()
	},
	methods: {
		async getArticle() {
			const userIdPromise = await fetch(
				`https://www.melivecode.com/api/attractions/${this.$route.params.id}`)
			const userIdJson = userIdPromise.json()
			userIdJson.then((res) => {
				this.data = res.attraction
				console.log(res.attraction)
			})
		}
	}
}
</script>
