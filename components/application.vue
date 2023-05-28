<template>
  <b-modal id="modal-application-form" scrollable hide-header hide-footer size="xl">
    <content-scholarship-register />
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user_id: '',
        scholarship_id: '',
        year_class: '',
        gpax: '',
        mobile_no: '',
        facebook_url: '',
        line_id: '',
        current_address: [],
        original_address: [],
        previous_semester_scholarship: {},
        studentloan: '',
        family_members: [],
        job_histories: [],
        student_income: [],
        student_expense: [],
        parent_relation_status: '',
        parent_relation_ect: '',
        residential: [],
        land_ownership: [],
        volunteer_activities: []
      }
    }
  }
}
</script>
