<template>
  <div>
    <div class="row mt-2 mb-4" v-if="posts.length">
      <div class="col-md-4" v-for="(post, index) in posts" :key="index">
        <div class="card mt-2 box-shadow">
          <img v-if="post.thumbnail?.path != null" :src="post.thumbnail?.path" :alt="post.thumbnail?.name" class="card-img-top" />
          <img v-else src="/images/en-ubu-logo-min.jpg" alt="EN UBU LOGO" class="card-img-top" />
          <div class="card-body">
            <nuxt-link :to="`/announce/view/${post.slug}`">
              <h5 class="card-title" style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">{{ post.title }}</h5>
            </nuxt-link>
            <div class="card-text multipleline-ellipsis" v-html="post.content"></div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="btn-group">
                <nuxt-link :to="`/announce/view/${post.slug}`" role="button" class="btn btn-sm btn-outline-secondary">อ่าน</nuxt-link>
              </div>
              <small class="text-muted">{{ getPostDuration(post.created_at) }}</small>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-12 col-md-4" v-for="(post, index) in posts" :key="index">
        <div class="card">
          <div class="card-body">{{ post }}</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['posts'],
  methods: {
    getPostDuration(createdAt) {
      return moment(createdAt).fromNow()
    }
  }
}
</script>

<style scoped>
.box-shadow img {
  max-height: 195px;
}
</style>
