<template>
	<b-row class="mt-3">
		<announce-postcontent v-for="(post, idx) in posts" :key="idx" :id="post.id" :title="post.name"
			:content="post.detail" :image="post.coverimage" />
	</b-row>
</template>
<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>
