<template>
  <b-container>
    <div class="row mt-4">
      <div class="col">
        <h4><strong>ประชาสัมพันธ์</strong></h4>
      </div>
    </div>
    <b-overlay :show="loading">
      <content-announce :posts="announces" post-type="announce" />
    </b-overlay>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      announces: []
    }
  },
  methods: {
    async fetch() {
      const { data: { data: announces } } = await this.$axios.get('announces')
      this.announces = announces
      console.log(this.announces)
    }
  },
  async created() {
    this.loading = true
    await this.fetch()
    this.loading = false
  }
}
</script>
