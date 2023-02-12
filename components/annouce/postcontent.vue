<template>
    <b-col cols="12" lg="3" md="6" sm="12">
        <b-card
        :id=id
        :title=title
        :img-src=image
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2">
            <b-card-text>
                {{content}}
            </b-card-text>

            <nuxt-link :to="postLink" class="btn btn-success text-center">รายละเอียด</nuxt-link>
        </b-card>
    </b-col>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required:false
    },
    title: {
      type: String,
      required:true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required:true
    }

  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/post'+this.id : '/annouce/'+this.id
    }
  }
}
</script>
