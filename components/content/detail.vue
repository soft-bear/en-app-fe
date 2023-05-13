<template>
  <b-container>
    <b-overlay :show="loading">
      <b-row class="my-4">
        <b-col>
          <b-card>
            <template #header>
              <b-row>
                <b-col>{{ data.title }}</b-col>
                <b-col class="text-right small">{{ formatdate(data.created_at) }} | โดย : {{ data?.author?.username }}</b-col>
              </b-row>
            </template>
            <b-row v-if="data.content">
              <b-col class="card-post-detail" v-html="data.content"></b-col>
            </b-row>
            <b-row v-if="checkAuthAndPage && data.content">
              <b-col>
                <hr class="my-2" />
              </b-col>
            </b-row>
            <b-row v-if="checkAuthAndPage">
              <b-col>
                <b-card header-tag="div" class="small">
                  ไม่มีเอกสารประกอบ
                </b-card>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-if="checkAuthAndPage">
        <b-col>
          <b-card header-tag="div" class="text-center">
            <div class="d-block">เข้าสู่ระบบเพื่อดำเนินการสมัครทุนการศึกษา</div>
            <div class="d-block"><b-button variant="outline-success" size="sm">สมัครทุนการศึกษา</b-button></div>
          </b-card>
        </b-col>
      </b-row>
    </b-overlay>
  </b-container>
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
    checkAuthAndPage () {
      return this.pageType == 'scholarship' && this.$auth.loggedIn
    }
  },
  methods: {
    formatdate(date) {
      return moment(date).add(543, 'years').format('DD/MM/YYYY HH:mm:ss')
    }
  },
  created() {
    this.pageType = this.$route.path.split('/')[1].toLowerCase()
  }
}
</script>
