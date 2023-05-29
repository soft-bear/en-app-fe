<template>
  <div class="small">
    <div class="row mt-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Additional Information</h5>
            <form>
              <div class="form-group">
                <label class="form-label" for="previous_semester_scholarship">Previous Semester Scholarship</label>
                <input type="text" class="form-control form-control-sm" id="previous_semester_scholarship"
                  name="previous_semester_scholarship">
              </div>
              <div class="form-group">
                <label class="form-label" for="studentloan">Student Loan</label>
                <input type="text" class="form-control form-control-sm" id="studentloan" name="studentloan">
              </div>
              <div class="form-group">
                <label class="form-label" for="family_members">Family Members</label>
                <input type="text" class="form-control form-control-sm" id="family_members" name="family_members">
              </div>
              <div class="form-group">
                <label class="form-label" for="job_histories">Job Histories</label>
                <input type="text" class="form-control form-control-sm" id="job_histories" name="job_histories">
              </div>
              <div class="form-group">
                <label class="form-label" for="student_income">Student Income</label>
                <input type="text" class="form-control form-control-sm" id="student_income" name="student_income">
              </div>
              <div class="form-group">
                <label class="form-label" for="student_expense">Student Expense</label>
                <input type="text" class="form-control form-control-sm" id="student_expense" name="student_expense">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Parent Relation Status</h5>
            <form>
              <div class="form-group">
                <label class="form-label" for="parent_relation_status">Parent Relation Status</label>
                <input type="text" class="form-control form-control-sm" id="parent_relation_status"
                  name="parent_relation_status">
              </div>
              <div class="form-group">
                <label class="form-label" for="parent_relation_ect">Parent Relation ECT</label>
                <input type="text" class="form-control form-control-sm" id="parent_relation_ect"
                  name="parent_relation_ect">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Other Information</h5>
            <form>
              <div class="form-group">
                <label class="form-label" for="residential">Residential</label>
                <input type="text" class="form-control form-control-sm" id="residential" name="residential">
              </div>
              <div class="form-group">
                <label class="form-label" for="land_ownership">Land Ownership</label>
                <input type="text" class="form-control form-control-sm" id="land_ownership" name="land_ownership">
              </div>
              <div class="form-group">
                <label class="form-label" for="volunteer_activities">Volunteer Activities</label>
                <input type="text" class="form-control form-control-sm" id="volunteer_activities"
                  name="volunteer_activities">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "content",
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [{
        text: 'อยู่ด้วยกัน',
        value: 'อยู่ด้วยกัน'
      },
      {
        text: 'หย่าขาดกัน',
        value: 'หย่าขาดกัน'
      },
      {
        text: 'แยกทางกัน',
        value: 'แยกทางกัน'
      },
      {
        text: 'บิดาเสียชีวิต',
        value: 'บิดาเสียชีวิต'
      },
      {
        text: 'มารดาเสียชีวิต',
        value: 'มารดาเสียชีวิต'
      },
      {
        text: 'บิดาและมารดาพิการ',
        value: 'บิดาและมารดาพิการ'
      },
      {
        text: 'บิดาหรือมารดาพิการ',
        value: 'บิดาหรือมารดาพิการ'
      },
      {
        text: 'กำพร้าทั้งบิดาและมารดา',
        value: 'กำพร้าทั้งบิดาและมารดา'
      },
      {
        text: 'กำพร้าทั้งบิดาหรือมารดา',
        value: 'กำพร้าทั้งบิดาหรือมารดา'
      },
      {
        text: 'บิดาหรือมารดาอย่าร้างแต่ให้การอุปการะทั้งคู่',
        value: 'บิดาหรือมารดาอย่าร้างแต่ให้การอุปการะทั้งคู่'
      },
      {
        text: 'บิดาหรือมารดาอย่าร้างแต่ให้การอุปการะคนเดียว',
        value: 'บิดาหรือมารดาอย่าร้างแต่ให้การอุปการะคนเดียว'
      },
      {
        text: 'อื่นๆ',
        value: 'อื่นๆ'
      },
      ]
    }
  }
}
</script>
