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
            <b-dropdown right text="เอกสาร" size="xs">
              <a :href="`https://api.en-ubu.xyz/scholarships/registration/std?token=1a9cbc4c3ac98a409bc262ca9209c630&pdf=true&key=${ item.key }`" target="_blank" rel="noopener noreferrer" class="dropdown dropdown-item btn-sm">ใบสมัคร</a>
              <a :href="`${ item.attachment?.path }`" target="_blank" rel="noopener noreferrer" class="dropdown dropdown-item btn-sm">เอกสารแนบ</a>
            </b-dropdown>
            <button class="btn btn-xs btn-danger" v-if="item.status == 'pending'" @click="destroy(item.id)" :disabled="loading">ลบข้อมูล</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['data', 'loadingActive'],
  data() {
    return {
      loading: true,
    }
  },
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
    },
    destroy(registerId) {
      this.$bvModal.msgBoxConfirm('ต้องการลบข้อมูลการลงทะเบียนทุนการศึกษาใช่หรือไม่?', {
        title: 'ยืนยันการลบข้อมูล',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'ใช่, ลบข้อมูล',
        cancelTitle: 'ไม่ใช่',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(async value => {
        if (value) {
          this.loading = true
          try {
            await this.$axios.delete(`/scholarships/registration/${registerId}`)
            this.$emit('refresh')
            this.messageBox('ลบข้อมูลเรียบร้อยแล้ว')
          } catch (e) {
            this.messageBox('ไม่สามารถลบข้อมูลได้', true)
          }
          this.loading = false
        }
      })
    },
    messageBox(data, error = false) {
      return this.$bvModal.msgBoxOk(data, {
        title: !error ? 'สำเร็จ' : 'ผิดพลาด',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: !error ? 'success' : 'danger',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    },
  },
  watch: {
    loadingActive(next) {
      this.loading = next
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
