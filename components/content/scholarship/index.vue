<template>
  <div>
    <div class="row my-2">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h6><strong>ทุนการศึกษาที่อยู่ระหว่างดำเนินการ</strong></h6>
            <content-scholarship-table-list class="my-3" :data="active.scholarships" />
            <div class="small">
              <b-pagination v-model="active.curPage" :total-rows="active.totalRows" :per-page="active.perPage" size="sm" class="m-0"></b-pagination>
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
            <content-scholarship-table-list class="my-3" :data="passed.scholarships" />
            <div class="small">
              <b-pagination v-model="passed.curPage" :total-rows="passed.totalRows" :per-page="passed.perPage" size="sm" class="m-0"></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['posts'],
  data() {
    return {
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
