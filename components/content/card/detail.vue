<template>
	<b-container>
		<b-overlay :show="loading">
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
							<b-img :src=data.coverimage :alt=data.name />
						</div>
						{{ data.detail }}
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
