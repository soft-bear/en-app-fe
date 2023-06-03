<template>
  <div class="table-responsive m-0">
    <table class="table table-sm m-0 table-hover small text-nowrap border-left border-right border-bottom">
      <thead class="text-center">
        <tr>
          <th scope="col" class="text-left">ชื่อทุนการศึกษา</th>
          <th scope="col">ปีการศึกษา</th>
          <th scope="col">สถานะ</th>
          <th scope="col">วันที่สมัคร</th>
          <th scope="col">ดำเนินการ</th>
        </tr>
      </thead>
      <tbody class="text-center text-nowrap bg-light" v-if="!data.length">
        <tr>
          <td colspan="5" class="py-2">ไม่พบข้อมูลทุนการศึกษา</td>
        </tr>
      </tbody>
      <tbody class="text-center text-nowrap" v-else>
        <tr v-for="(item, index) in data" :key="index">
          <td class="text-primary text-left scholarship-name" :title="item.scholarship.name">
            <nuxt-link :to="`/scholarship/view/${item.scholarship.slug}`">
              <strong>{{ item.scholarship.name }}</strong><br /><small class="text-muted">{{ item.scholarship.category?.name }}</small>
            </nuxt-link>
          </td>
          <td>{{ item.scholarship.semester }}/{{ item.scholarship.year }}</td>
          <td :class="txtColor(item.status)">{{ progress(item.status) }}</td>
          <td>{{ onlyDate(item.created_at) }}</td>
          <td>
            <!-- <button class="btn btn-xs btn-primary">อัปโหลด</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    progress(status) {
      switch (status) {
        case 'pending': return 'กำลังดำเนินการ'; break;
        case 'approved': return 'อนุมัติแล้ว'; break;
        case 'rejected': return 'ไม่อนุมัติ'; break;
        default: return 'ไม่ระบุ'; break;
      }
    },
    onlyDate(datetime) {
      return datetime ? new Date(datetime).toLocaleString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short'
      }) : ''
    },
    txtColor(status) {
      switch (status) {
        case 'pending': return 'text-warning'; break;
        case 'approved': return 'text-success'; break;
        case 'rejected': return 'text-danger'; break;
        default: return 'text-muted'; break;
      }
    }
  }
}
</script>

<style>
td {
  vertical-align: middle !important;
}

.scholarship-name {
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
