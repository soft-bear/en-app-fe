<template>
    <b-container>
        <b-row class="my-4">
            <content-card-post-list-item v-for="(post, index) in posts" :key="index" :id="post.id"
                :slug="post.slug" :title="post.title" :content="post.content" :image="post?.thumbnail?.path"
                :post-type="postType" />
        </b-row>
    </b-container>
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
