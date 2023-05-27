<template>
  <div>
    <div class="row my-2">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h6><strong>ทุนการศึกษาที่อยู่ระหว่างดำเนินการ</strong></h6>
            <content-scholarship-table-list class="my-3" />
            <div class="small">
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm" class="m-0"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2 mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h6><strong>ทุนการศึกษาที่ผ่านมา</strong></h6>
            <content-scholarship-table-list class="my-3" />
            <div class="small">
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm" class="m-0"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
