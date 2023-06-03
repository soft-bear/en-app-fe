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
    if (this.isShowForm && !confirm('คุณต้องการออกจากหน้านี้ใช่หรือไม่?')) {
      next(false)
      return
    }

    this.clearStep()
    next()
  }
}
</script>
