<template>
  <b-container>
    <div class="row mt-4">
      <div class="col">
        <h4><strong>ทุนการศึกษา</strong></h4>
      </div>
    </div>
    <b-overlay :show="loading">
      <content-scholarship :posts="data" />
    </b-overlay>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: []
    }
  },
  methods: {
    async fetch() {
      const { data } = await this.$axios.get('https://www.melivecode.com/api/attractions')
      this.data = data
    }
  },
  async created() {
    this.loading = true
    await this.fetch()
    this.loading = false
  }
}
</script>
