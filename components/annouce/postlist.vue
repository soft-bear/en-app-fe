<template>
  <b-row class="mt-3">
    <PostContent
     v-for="(post,idx) in posts"
     :key="idx"
     :id = "post.id"
     :title = "post.name"
     :content = "post.detail"
     :image = "post.coverimage"
    />
  </b-row>
</template>
<script>
import PostContent from '@/components/annouce/postcontent'
export default {
  components: {
    PostContent
  },
  props: {
     posts: {
      type: Array,
      required: true

    }
  }

}
</script>
