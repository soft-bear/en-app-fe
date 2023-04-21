<template>
  <b-row class="my-4">
    <b-col cols="12" lg="6">
      <content-card :card-data="sortAnnounce" card-name="ประชาสัมพันธ์" target="announce" class="mb-2" />
      <content-card :card-data="scholarships" card-name="ทุนการศึกษา" target="scholarship" class="mt-2" />
    </b-col>
    <b-col cols="12" lg="6"></b-col>
  </b-row>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      announces: [],
      scholarships: []
    }
  },
  computed: {
    sortAnnounce() {
      return this.announces.length ? this.announces.sort((a, b) => {
        return moment(a.created_at).format('x') < moment(b.created_at).format('x') ? 1 : -1
      }).splice(0, 3) : []
    }
  },
  methods: {
    async getAnnounces() {
      try {
        const { data: { data } } = await this.$axios.get('/announces')
        this.announces = data
      } catch (e) { }
    },
    async getScholarships() {
      try {
        const { data: { data } } = await this.$axios.get('/scholarships')
        this.scholarships = data
      } catch (e) { }
    }
  },
  async created() {
    await this.getAnnounces()
    await this.getScholarships()
  }
}
</script>
