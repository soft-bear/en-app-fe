<template>
	<b-col cols="12" lg="4" md="6" sm="12">
		<b-card :id=id :title=title :img-src=image img-alt="title" img-top tag="article" class="mb-2">
			<b-card-text class="card-detail">
				{{ content }}
			</b-card-text>
			<div class="text-center">
				<nuxt-link :to="cardLink" class="btn btn-outline-success text-center btn-block">รายละเอียด</nuxt-link>
			</div>
		</b-card>
	</b-col>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: false
		},
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		postType: {
			type: String,
			required: true
		}
	},
	computed: {
		cardLink() {
			const target = this.postType == 'announce' ? 'announce' : 'scholarship'
			return `/${target}/view/${this.id}`
		}
	}
}
</script>

<style scoped>
	.card-detail {
		min-height: 150px;
		max-height: 150px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
