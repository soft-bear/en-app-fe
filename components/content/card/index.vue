<template>
	<b-card header-tag="header">
		<template #header>
			<b-row>
				<b-col>{{ cardName }}</b-col>
				<b-col class="text-right">
					<nuxt-link v-if="target" :to="target">แสดงทั้งหมด</nuxt-link>
				</b-col>
			</b-row>
		</template>
	</b-card>
</template>

<script>
export default {
	props: {
		cardName: { required: true, type: String },
		cardData: { required: true, type: Array },
		target: { required: false, type: String }
	}
}
</script>
