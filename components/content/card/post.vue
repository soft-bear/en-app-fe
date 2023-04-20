<template>
	<b-row class="my-4">
		<content-card-info v-for="(post, index) in posts" :key="index" :id="post.id" :title="post.title" :content="post.content"
			:image="post.coverimage" :post-type="postType" />
	</b-row>
</template>
<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true
		},
		postType: {
			type: String,
			required: true
		}
	}
}
</script>
