<template>
	<b-container>
		<b-overlay :show="loading">
			<b-row class="my-4">
				<b-col cols="12" lg="9" md="6" sm="12">
					<b-card class="mb-2">
						<template #header>
							<b-row>
								<b-col>{{ data.title }}</b-col>
								<b-col class="text-right small">{{ data.created_at }} | โดย : {{ data.author_user_id }}</b-col>
							</b-row>
						</template>
						<div class="text-center mb-3" v-html="data.content"></div>
					</b-card>
				</b-col>
				<b-col cols="12" lg="3" md="6" sm="12">
					<b-card class="mb-2" header-tag="div">
						<template #header>เอกสารประกอบ</template>
						ไม่มีเอกสารประกอบสำหรับข่าวนี้
					</b-card>
				</b-col>
			</b-row>
		</b-overlay>
	</b-container>
</template>
<script>
export default {
	layout: "content",
	props: {
		data: {
			type: Array,
			required: true
		},
		loading: {
			type: Boolean,
			required: true,
		}
	}
}
</script>
