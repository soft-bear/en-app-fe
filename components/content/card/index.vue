<template>
	<b-card no-body header-tag="header">
		<template #header>
			<b-row>
				<b-col>{{ cardName }}</b-col>
				<b-col class="text-right small">
					<nuxt-link v-if="target" :to="target">แสดงทั้งหมด</nuxt-link>
				</b-col>
			</b-row>
		</template>
    <b-card-body class="p-2">
      <ul class="my-0 py-0">
        <li v-if="cardData.length" v-for="(data, index) in cardData" :key="index">
          <nuxt-link :to="`/announce/view/${data.id}`">{{ data.title }}</nuxt-link>
        </li>
        <li v-else>ไม่พบข้อมูล</li>
      </ul>
    </b-card-body>
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
