<template>
	<b-col cols="12" lg="3" md="6" sm="12">
		<b-card :id=id :title=title :img-src=image img-alt="title" img-top tag="article" class="mb-2">
			<b-card-text>
				{{ content }}
			</b-card-text>
			<div class="text-center">
				<nuxt-link :to="postLink" class="btn btn-success text-center">รายละเอียด</nuxt-link>
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

	},
	computed: {
		postLink() {
			return '/announce/' + this.id
		}
	}
}
</script>
