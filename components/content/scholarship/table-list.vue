<template>
  <div class="table-responsive m-0">
    <table class="table table-sm m-0 table-hover small text-nowrap border-left border-right border-bottom">
      <thead class="text-center">
        <tr>
          <th scope="col" class="text-left">ชื่อทุนการศึกษา</th>
          <th scope="col">สถานะ</th>
          <th scope="col">ปีการศึกษา</th>
          <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
          <th scope="col">ทุนต่อเนื่อง</th>
        </tr>
      </thead>
      <tbody class="text-center text-nowrap bg-light" v-if="!data.length">
        <tr>
          <td colspan="5" class="py-2">ไม่พบข้อมูลทุนการศึกษา</td>
        </tr>
      </tbody>
      <tbody class="text-center text-nowrap" v-else>
        <tr v-for="(item, index) in data" :key="index">
          <td class="text-primary text-left scholarship-name" :title="item.name">
            <nuxt-link :to="`/scholarship/view/${item.slug}`">
              <strong>{{ item.name }}</strong><br /><small class="text-muted">{{ item.category?.name }}</small>
            </nuxt-link>
          </td>
          <td class="text-success">กำลังเปิดรับสมัคร</td>
          <td>{{ item.semester }}/{{ item.year }}</td>
          <td>{{ onlyDate(item.from_date) }} - {{ onlyDate(item.to_date) }}</td>
          <td>
            <b-icon-check-circle-fill v-if="item.is_ongoing" class="text-success" />
            <b-icon-x-circle-fill v-else class="text-warning" />
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
    onlyDate(datetime) {
      return datetime ? new Date(datetime).toLocaleString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short'
      }) : ''
    },
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
