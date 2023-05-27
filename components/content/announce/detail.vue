<template>
  <div>
    <div class="announce-cover" :style="`background-image: url('${data.thumbnail?.path ?? '/images/en-ubu-logo-min.jpg'}');`">
      <div class="container-fluid">
        <div class="row announce-text">
          <div class="col-12 text-center text-white">
            <h3 class="mb-0">{{ data.title }}</h3>
            <small class="small">{{ formatdate(data.created_at) }} | โดย : {{ data.author?.username }}</small>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <b-overlay :show="loading">
        <div class="row my-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="row" v-if="data.content">
                  <div class="col-12 card-post-detail" v-html="data.content"></div>
                </div>
                <div class="row" v-else>
                  <div class="col-12 text-center">ไม่มีข้อมูลในส่วนนี้</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  layout: "content",
  props: ['data', 'loading'],
  data() {
    return {
      pageType: ''
    }
  },
  computed: {
    checkAuthAndPage() {
      return true
      // return this.pageType == 'scholarship' && this.$auth.loggedIn
    }
  },
  methods: {
    formatdate(date) {
      return moment(date).add(543, 'years').format('DD/MM/YYYY HH:mm:ss')
    }
  },
  created() {
    this.pageType = this.$route.path.split('/')[1].toLowerCase()
    console.log(this.$auth)
  }
}
</script>

<style scoped>
.announce-cover {
  background-size: cover;
  background-position: center center;
}

.announce-text {
  padding: 100px 0;
  background-color: rgba(0, 0, 0, 0.8);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
