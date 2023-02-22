<template>
    <b-container fluid style="padding-top: 56px;">
        <PostList :posts="loadData"/>
    </b-container>
</template>

<script>
    import PostList from '@/components/annouce/postlist'
    export default {
        layout: "content",
        components: {
            PostList
        },
        data() {
          return {
            loadData: []
          }
        },
        async fetch() {
            this.loadData = await fetch(
                'https://www.melivecode.com/api/attractions'
            ).then(res => res.json())
        }

    }
</script>
