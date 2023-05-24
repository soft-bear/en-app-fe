<template>
  <b-row class="my-4">
    <b-col cols="12" lg="6">
      <b-overlay :show="loading">
        <content-homepage-card-list :card-data="sortScholarship" card-name="ทุนการศึกษา" target="scholarship" />
      </b-overlay>
    </b-col>
    <b-col cols="12" lg="6">
      <b-overlay :show="loading">
        <content-homepage-card-list :card-data="sortAnnounce" card-name="ประชาสัมพันธ์" target="announce" />
      </b-overlay>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      announces: [],
      scholarships: []
    }
  },
  computed: {
    sortScholarship() {
      const scholarships = this.scholarships.splice(0, 5).map(scholarship => {
        return {slug: scholarship.slug, id: scholarship.id, title: scholarship.name}
      })

      return scholarships
    },
    sortAnnounce() {
      return this.announces ? this.announces.splice(0, 5) : []
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
    this.loading = true
    await this.getAnnounces()
    await this.getScholarships()
    this.loading = false
  }
}
</script>
