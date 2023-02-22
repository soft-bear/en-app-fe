<template>
  <b-row class="mt-3">
    <PostContent
     v-for="(post,idx) in posts"
     :key="idx"
     :id = "post.id"
     :title = "post.title"
     :content = "post.description"
     :image = "post.image"
    />
  </b-row>
</template>
<script>
import PostContent from '@/components/schorlarship/postcontent'
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
