<template>
  <b-row class="mt-3">
    <PostContent
      id="1"
      title="รายการทุนที่ 1"
      image="https://picsum.photos/600/300/?image=25"
      content=" Some quick example text to build on the card title and make up the bulk of the card's content." />
    <PostContent
       id="2"
      title="รายการทุนที่ 2"
      image="https://picsum.photos/600/300/?image=25"
      content=" Some quick example text to build on the card title and make up the bulk of the card's content." />
    <PostContent
       id="3"
      title="รายการทุนที่ 3"
      image="https://picsum.photos/600/300/?image=25"
      content=" Some quick example text to build on the card title and make up the bulk of the card's content." />
    <PostContent
      id="4"
      title="รายการทุนที่ 4"
      image="https://picsum.photos/600/300/?image=25"
      content=" Some quick example text to build on the card title and make up the bulk of the card's content." />
  </b-row>
</template>
<script>
import PostContent from '@/components/annouce/postcontent'
export default {
  components: {
    PostContent
  },
  props: {
    isAdmin: {
      type: Boolean,
      default:false
    }
  }
}
</script>
