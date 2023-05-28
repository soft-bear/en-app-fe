<template>
  <div>
    <div class="row my-2">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h6><strong>ทุนการศึกษาที่อยู่ระหว่างดำเนินการ</strong></h6>
            <b-overlay :show="loading || loadingActive">
              <content-scholarship-table-list class="my-3" :data="active.scholarships" />
              <div class="small">
                <b-pagination v-model="active.curPage" :total-rows="active.totalRows" :per-page="active.perPage" size="sm" class="m-0"></b-pagination>
              </div>
            </b-overlay>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2 mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h6><strong>ทุนการศึกษาที่ผ่านมา</strong></h6>
            <b-overlay :show="loading || loadingPassed">
              <content-scholarship-table-list class="my-3" :data="passed.scholarships" />
              <div class="small">
                <b-pagination v-model="passed.curPage" :total-rows="passed.totalRows" :per-page="passed.perPage" size="sm" class="m-0"></b-pagination>
              </div>
            </b-overlay>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      loadingActive: false,
      loadingPassed: false,
      active: {
        scholarships: [],
        curPage: 1,
        perPage: 1,
        totalRows: 1
      },
      passed: {
        scholarships: [],
        curPage: 1,
        perPage: 1,
        totalRows: 1
      }
    }
  },
  methods: {
    async getActive(page = 1) {
      this.loadingActive = true
      try {
        const { data: { data: active, meta: activeMeta } } = await this.$axios.get('/scholarships/active')
        this.active.scholarships = active
        this.active.curPage = activeMeta.current_page
        this.active.perPage = activeMeta.per_page
        this.active.totalRows = activeMeta.totalRows
      } catch (e) { }
      this.loadingActive = false
    },
    async getPassed(page = 1) {
      this.loadingPassed = true
      try {
        const { data: { data: passed, meta: passedMeta } } = await this.$axios.get('/scholarships/passed')
        this.passed.scholarships = passed
        this.passed.curPage = passedMeta.current_page
        this.passed.perPage = passedMeta.per_page
        this.passed.totalRows = passedMeta.totalRows
      } catch (e) { }
      this.loadingPassed = false
    },
    async getActiveAndPassed() {
      try {
        await this.getActive()
        await this.getPassed()
      } catch (e) { }
    }
  },
  async created() {
    this.loading = true
    await this.getActiveAndPassed()
    this.loading = false
  }
}
</script>

<style scoped>
tr>td:first {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
