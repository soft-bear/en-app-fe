<template>
    <b-container fluid style="padding-top: 56px;">
      <PostList/>
    </b-container>
</template>

<script>
    import PostList from '@/components/annouce/postlist'
    export default {
        layout: "content",
        components: {
          PostList
        }
    }
</script>
