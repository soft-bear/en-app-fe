<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h4><strong>ประชาสัมพันธ์</strong></h4>
      </div>
    </div>
    <b-overlay :show="loading">
      <div v-if="!loading && announces.length">
        <content-announce :posts="announces" post-type="announce" />
      </div>
      <div v-else-if="!loading && !announces.length" class="row mt-2 mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body text-center">ไม่มีข้อมูลในส่วนนี้</div>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
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
