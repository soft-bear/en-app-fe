<template>
  <div>
    <content-scholarship-detail :data="scholarship" :loading="loading" @setIsShowForm="setIsShowForm" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			loading: false,
      scholarship: {},
      isShowForm: false
		}
	},
	methods: {
    ...mapActions({
      clearStep: 'application/clearStep'
    }),
		async getScholarship() {
			const {data : {data}} = await this.$axios.get(`/scholarships/${this.$route.params.id}`)
      this.scholarship = data
		},
    setIsShowForm(isShow) {
      this.isShowForm = isShow
    }
	},
	async created() {
		this.loading = true
		await this.getScholarship()
		this.loading = false
	},
  beforeRouteLeave(to, from, next) {
    if (this.isShowForm) {
      this.$bvModal.msgBoxConfirm('คุณต้องการออกจากหน้านี้ใช่หรือไม่?', {
        title: 'ยืนยันการออกจากหน้า',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
        okTitle: 'ใช่, ออกจากหน้า',
        cancelTitle: 'ไม่ใช่',
        footerClass: 'p-2',
        hideHeaderClose: true,
        centered: true
      }).then(async value => {
        if (value) {
          this.clearStep()
          next()
        } else {
          next(false)
          return
        }
      })
    }
  }
}
</script>
