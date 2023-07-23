<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">ข้อมูลส่วนบุคคล</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="year_class">ชั้นปี</label>
                  <input type="number" class="form-control form-control-sm" id="year_class" v-model="form.year_class" min="0" max="8" required>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="gpax">เกรดเฉลี่ยสะสม</label>
                  <input type="number" class="form-control form-control-sm" id="gpax" v-model="form.gpax" min="0" max="4" step="any" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="mobile_no">หมายเลขโทรศัพท์</label>
                  <input type="tel" class="form-control form-control-sm" id="mobile_no" v-model="form.mobile_no" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="line_id">Line ID</label>
                  <input type="text" class="form-control form-control-sm" id="line_id" v-model="form.line_id" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="facebook_url">Facebook URL</label>
                  <input type="url" class="form-control form-control-sm" id="facebook_url" v-model="form.facebook_url" required>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">ข้อมูลที่อยู่</div>
          <div class="card-body">
            <div class="card outline-eng">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label" for="current_address_line_cur">ที่อยู่ปัจจุบัน/หอพัก&nbsp;<small class="text-muted">(ชื่อหมู่บ้าน/หอพัก บ้านเลขที่)</small></label>
                      <input type="text" class="form-control form-control-sm" id="current_address_line_cur" v-model="form.current_address.line" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <label>ตำบล</label>
                    <ThailandAutoComplete v-model="form.current_address.sub_district" type="district" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>อำเภอ</label>
                    <ThailandAutoComplete v-model="form.current_address.district" type="amphoe" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>จังหวัด</label>
                    <ThailandAutoComplete v-model="form.current_address.province" type="province" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>รหัสไปรษณีย์</label>
                    <ThailandAutoComplete v-model="form.current_address.zipcode" type="zipcode" size="default" @select="setCurAddr" required />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label" for="current_address_line_ori">ที่อยู่ตามภูมิลำเนา&nbsp;<small class="text-muted">(ชื่อหมู่บ้าน/หอพัก บ้านเลขที่)</small></label>
                      <input type="text" class="form-control form-control-sm" id="current_address_line_ori" v-model="form.original_address.line">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <label>ตำบล</label>
                    <ThailandAutoComplete v-model="form.original_address.sub_district" type="district" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>อำเภอ</label>
                    <ThailandAutoComplete v-model="form.original_address.district" type="amphoe" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>จังหวัด</label>
                    <ThailandAutoComplete v-model="form.original_address.province" type="province" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>รหัสไปรษณีย์</label>
                    <ThailandAutoComplete v-model="form.original_address.zipcode" type="zipcode" @select="setOriAddr" size="default" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">
            <span class="align-middle">ทุนการศึกษาที่เคยได้รับในปีการศึกษาที่ผ่านมา</span>
          </div>
          <div class="card-body">
            <form @submit.stop.prevent="addScholarship">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label" for="scholarship_name">ชื่อทุนการศึกษา</label>
                    <input class="form-control form-control-sm" id="scholarship_name" required v-model="scholarship.name" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label" for="money">จำนวนเงิน</label>
                    <input class="form-control form-control-sm" id="money" type="number" required v-model="scholarship.money" min="0" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label" for="scholarship_type">ประเภททุน</label>
                    <select required class="form-control form-control-sm" id="scholarship_type" v-model="scholarship.is_ongoing">
                      <option value="">== เลือก ==</option>
                      <option value="0">รายปี</option>
                      <option value="1">ต่อเนื่อง</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <button class="btn btn-outline-eng btn-sm" type="submit">
                    เพิ่ม
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
            </form>
            <div class="card border-secondary small mt-2 my-0 mb-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">ประวัติการรับทุนการศึกษา</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อทุนการศึกษา</th>
                      <th class="d-none d-xl-table-cell">จำนวนเงิน</th>
                      <th class="d-none d-xl-table-cell">ประเภททุน</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.previous_semester_scholarships.length">
                    <tr v-for="(scholarship, index) in form.previous_semester_scholarships" :key="index">
                      <td>{{ scholarship.name }}</td>
                      <td>{{ scholarship.money }}</td>
                      <td>{{ scholarship.is_ongoing == '1' ? 'ต่อเนื่อง' : 'รายปี' }}</td>
                      <td>
                        <button class="btn btn-xs btn-danger" @click="delScholarship(index)">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="4" class="text-center">
                        <span class="align-middle">ยังไม่มีข้อมูล</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-header bg-eng text-white">
            <span class="align-middle">กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ.)</span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="studentloan">กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ.)</label>
                  <select id="studentloan" required class="form-control form-control-sm" v-model="form.studentloan">
                    <option value="">== เลือก ==</option>
                    <option value="0">ไม่ได้กู้</option>
                    <option value="1">กู้ยืมค่าธรรมเนียมการศึกษา</option>
                    <option value="2">กู้ยืมค่าครองชีพรายเดือน</option>
                    <option value="3">กู้ยืมธรรมเนียมการศึกษาและค่าครองชีพรายเดือน</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2" v-if="Object.values(errors).length">
      <div class="col">
        <div class="alert alert-danger">
          <ul class="list-unstyled m-0">
            <li v-for="(error, index) in Object.values(errors)" :key="index">
              <ul class="list-unstyled">
                <li v-for="(sub, index) in error" :key="index">{{ sub }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">ข้อมูลผลการเรียน</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="card border-secondary">
                  <div class="card-header bg-secondary text-white">ภาคเรียนที่ {{ show1stSemester }} / {{ show1stYear }}</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label" for="gpa_one">เกรดเฉลี่ย</label>
                          <input class="form-control form-control-sm" id="gpa_one" v-model="form.gpa_one" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label" for="gpax_one">เกรดเฉลี่ยสะสม</label>
                          <input class="form-control form-control-sm" id="gpax_one" v-model="form.gpax_one" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card border-secondary mt-2 mt-md-0">
                  <div class="card-header bg-secondary text-white">ภาคเรียนที่ {{ show2ndSemester }} / {{ show2ndYear }}</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label" for="gpa_two">เกรดเฉลี่ย</label>
                          <input class="form-control form-control-sm" id="gpa_two" v-model="form.gpa_two" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="form-label" for="gpax_two">เกรดเฉลี่ยสะสม</label>
                          <input class="form-control form-control-sm" id="gpax_two" v-model="form.gpax_two" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลด้านครอบครัว <small>(ระบุทุกคน บิดา/มารดา/พี่/น้อง รวมตัวนักศึกษาด้วย)</small></div>
          <div class="card-body">
            <form @submit.stop.prevent="addFamily">
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="title">คำนำหน้านาม</label>
                    <input class="form-control form-control-sm" id="title" v-model="family.title" required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="fullName">ชื่อ-สกุล</label>
                    <input class="form-control form-control-sm" id="fullName" v-model="family.full_name" required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="age">อายุ</label>
                    <input class="form-control form-control-sm" id="age" v-model="family.age" required min="0" type="number" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="relate">ความเกี่ยวข้อง</label>
                    <input class="form-control form-control-sm" id="relate" v-model="family.relationship" required />
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="education">ระดับการศึกษา</label>
                    <input class="form-control form-control-sm" id="education" v-model="family.education" required />
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="occupation">อาชีพ</label>
                    <input class="form-control form-control-sm" id="occupation" v-model="family.occupation" required />
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="work_place">สถานที่ทำงาน/ศึกษา</label>
                    <input class="form-control form-control-sm" id="work_place" v-model="family.work_place" required />
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="salary">รายได้:เดือน</label>
                    <input class="form-control form-control-sm" id="salary" v-model="family.salary" required min="0" type="number" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-sm btn-outline-eng">เพิ่ม</button>
                </div>
              </div>
              <div class="row">
                <div class="col"><hr /></div>
              </div>
            </form>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">รายชื่อบุคคลในครอบครัว</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อ - สกุล</th>
                      <th class="d-none d-xl-table-cell">ระดับการศึกษา</th>
                      <th class="d-none d-md-table-cell">สถานที่ทำงาน/ศึกษา</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.family_members.length">
                    <tr v-for="(member, index) in form.family_members" :key="index">
                      <td>
                        <strong>{{ member.full_name }}</strong><br />
                        <span class="text-muted">{{ member.relationship }}&nbsp;อายุ: {{ member.age }}</span>
                      </td>
                      <td>{{ member.education }}</td>
                      <td>
                        <strong>{{ member.work_place }}</strong><br />
                        <span class="text-muted">อาชีพ: {{ member.occupation }}, รายได้: {{ numberFormat(parseInt(member.salary)) }}</span>
                      </td>
                      <td>
                        <button type="button" class="btn btn-xs btn-danger" @click="delFamily(index)">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="4" class="text-center">
                        <span class="align-middle">ยังไม่มีข้อมูล</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">การทำงานระหว่างเรียนในช่วงปีที่ผ่านมา</div>
          <div class="card-body">
            <form @submit.stop.prevent="addJob">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label" for="workName">งานที่ทำ</label>
                    <input class="form-control form-control-sm" id="workName" v-model="job.name" required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="workPlace">สถานที่ทำงาน</label>
                    <input class="form-control form-control-sm" id="workPlace" v-model="job.place" required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="gotSalary">จำนวนเงินที่ได้รับ</label>
                    <input class="form-control form-control-sm" id="gotSalary" v-model="job.money" required type="number" min="0" />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="beginWorkDate">วันที่เริ่มงาน</label>
                    <b-form-datepicker id="beginWorkDate" v-model="job.job_begin" locale="th" size="sm" required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label" for="endWorkDate">วันที่จบงาน</label>
                    <b-form-datepicker id="endWorkDate" v-model="job.leave_job" locale="th" size="sm" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-eng btn-sm">เพิ่ม</button>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
            </form>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">ประวัติการทำงานพิเศษ</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>งานที่ทำ</th>
                      <th class="d-none d-xl-table-cell">สถานที่ทำงาน</th>
                      <th class="d-none d-md-table-cell">ระยะเวลาทำงาน</th>
                      <th class="d-none d-md-table-cell">จำนวนเงินที่ได้รับ</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.job_histories.length">
                    <tr v-for="(job, index) in form.job_histories" :key="index">
                      <td>{{ job.name }}</td>
                      <td>{{ job.place }}</td>
                      <td>{{ job.job_begin }} - {{ job.leave_job }}</td>
                      <td>{{ numberFormat(parseInt(job.money)) }}</td>
                      <td>
                        <button @click="delJob(index)" class="btn btn-xs btn-danger">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="5" class="text-center">
                        <span class="align-middle">ยังไม่มีข้อมูล</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2" v-if="Object.values(errors).length">
      <div class="col">
        <div class="alert alert-danger">
          <ul class="list-unstyled m-0">
            <li v-for="(error, index) in Object.values(errors)" :key="index">
              <ul class="list-unstyled">
                <li v-for="(sub, index) in error" :key="index">{{ sub }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">ข้อมูลรายได้ของนักศึกษา</div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_father">บิดา</label>
                  <input class="form-control form-control-sm" name="income_father" id="income_father" v-model="form.student_incomes.father" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_mother">มารดา</label>
                  <input class="form-control form-control-sm" name="income_mother" id="income_mother" v-model="form.student_incomes.mother" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_parent">ผู้ปกครอง</label>
                  <input class="form-control form-control-sm" name="income_parent" id="income_parent" v-model="form.student_incomes.parent" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_scholarship">ทุนการศึกษา</label>
                  <input class="form-control form-control-sm" name="income_scholarship" id="income_scholarship" v-model="form.student_incomes.scholarship" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_student_loan">กู้ยืม กยศ.,กรอ.</label>
                  <input class="form-control form-control-sm" name="income_student_loan" id="income_student_loan" v-model="form.student_incomes.studentloan" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="income_work">ทำงานพิเศษ/ออนไลน์</label>
                  <input class="form-control form-control-sm" name="income_work" id="income_work" v-model="form.student_incomes.parttimejob" required min="0" type="number" value="0" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col"><hr class="mt-0 mb-2" /></div>
            </div>
            <div class="row">
              <div class="col"><strong>รายได้รวม: <span class="text-success">{{ sumIncome }}</span> บาท</strong></div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลรายจ่ายของนักศึกษา</div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="expense_monthly">ค่าใช้จ่ายประจำเดือน</label>
                  <input class="form-control form-control-sm" name="expense_monthly" id="expense_monthly" v-model="form.student_expenses.monthly" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="expense_education">ค่าใช้จ่ายในการศึกษา</label>
                  <input class="form-control form-control-sm" name="expense_education" id="expense_education" v-model="form.student_expenses.education" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="expense_dorm">ค่าหอพัก</label>
                  <input class="form-control form-control-sm" name="expense_dorm" id="expense_dorm" v-model="form.student_expenses.dorm_rent" required min="0" type="number" value="0"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="expense_travel">ค่าพาหนะ/เดินทาง</label>
                  <input class="form-control form-control-sm" name="expense_travel" id="expense_travel" v-model="form.student_expenses.transport" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label" for="expense_etc">ค่าใช้จ่ายอื่น ๆ </label>
                  <input class="form-control form-control-sm" name="expense_etc" id="expense_etc" v-model="form.student_expenses.etc" required min="0" type="number" value="0" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col"><hr class="mt-0 mb-2" /></div>
            </div>
            <div class="row">
              <div class="col"><strong>รายจ่ายรวม: <span class="text-danger">{{ sumExpense }}</span> บาท</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2" v-if="Object.values(errors).length">
      <div class="col">
        <div class="alert alert-danger">
          <ul class="list-unstyled m-0">
            <li v-for="(error, index) in Object.values(errors)" :key="index">
              <ul class="list-unstyled">
                <li v-for="(sub, index) in error" :key="index">{{ sub }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">เหตุผลความจำเป็นที่จะขอรับทุน</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label class="form-label" for="reason">ระบุความจำเป็นในการขอรับทุน</label>
                  <b-form-textarea id="reason" v-model="form.reason" pl rows="3" max-rows="6"></b-form-textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">เอกสารที่เกี่ยวข้อง&nbsp;<small class="text-danger">ไม่เกิน 10MB</small></div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label class="form-label" for="attachment">เลือกเอกสารประเภท PDF</label>
                  <b-form-file id="attachment" @change="handleDocumentUpload" size="sm" required></b-form-file>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12"><hr class="my-4" /></div>
      <div class="col-12 text-center"><button class="btn btn-sm btn-outline-eng">Submit</button></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

export default {
  components: {
    ThailandAutoComplete
  },
  props: ['prevData','scholarship_id', 'semester', 'year'],
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        scholarship_id: this.scholarship_id,
        year_class: '',
        gpax: '',
        mobile_no: '',
        line_id: '',
        facebook_url: '',
        current_address: {
          line: '',
          sub_district: '',
          district: '',
          province: '',
          zipcode: '',
        },
        original_address: {
          line: '',
          sub_district: '',
          district: '',
          province: '',
          zipcode: '',
        },
        previous_semester_scholarships: [],
        studentloan: '',
        gpa_one: '',
        gpa_two: '',
        gpax_one: '',
        gpax_two: '',
        family_members: [],
        job_histories: [],
        student_incomes: {
          father: 0,
          mother: 0,
          parent: 0,
          scholarship: 0,
          studentloan: 0,
          parttimejob: 0,
        },
        student_expenses: {
          monthly: 0,
          education: 0,
          dorm_rent: 0,
          transport: 0,
          etc: 0,
        },
        parent_relation_status: '',
        parent_relation_ect: '',
        residential: {
          is_rent: '',
          is_stay: '',
          is_owner: '',
          rent_val: 0,
          stay_name: '-',
        },
        land_ownership: {
          is_owner: '',
          own_val: 0,
          is_stay: '',
          stay_name: '-',
          is_rent: '',
          rent_val: 0,
          rent_rate: 0
        },
        attachment: '',
        reason: '',
      },
      scholarship: {
        name: '',
        money: '',
        is_ongoing: '',
      },
      family: {
        title: '',
        full_name: '',
        age: '',
        relationship: '',
        education: '',
        occupation: '',
        work_place: '',
        salary: '',
      },
      job: {
        name: '',
        place: '',
        money: '',
        job_begin: '',
        leave_job: '',
      },
    }
  },
  computed: {
    show1stSemester() {
      return this.semester == 1 ? 1 : 2
    },
    show2ndSemester() {
      return this.semester == 2 ? 1 : 2
    },
    show1stYear() {
      return this.year - 1
    },
    show2ndYear() {
      return this.semester == 1 ? this.year - 1 : this.year
    },
    sumIncome() {
      let sum = Object.values(this.form.student_incomes).reduce((a, b) => parseInt(a) + parseInt(b))
      return isNaN(sum) ? 0 : sum.toLocaleString('th-TH')
    },
    sumExpense() {
      let sum = Object.values(this.form.student_expenses).reduce((a, b) => parseInt(a) + parseInt(b))
      return isNaN(sum) ? 0 : sum.toLocaleString('th-TH')
    },
  },
  methods: {
    ...mapActions({
      nextStep: 'application/nextStep',
      pushStep: 'application/pushStep',
    }),
    setCurAddr(address) {
      this.form.current_address.sub_district = address.district
      this.form.current_address.district = address.amphoe
      this.form.current_address.province = address.province
      this.form.current_address.zipcode = address.zipcode
    },
    setOriAddr(address) {
      this.form.original_address.sub_district = address.district
      this.form.original_address.district = address.amphoe
      this.form.original_address.province = address.province
      this.form.original_address.zipcode = address.zipcode
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
    delScholarship(index) {
      const newArray = [...this.form.previous_semester_scholarships]
      newArray.splice(index, 1)
      this.form.previous_semester_scholarships = newArray
    },
    addScholarship() {
      this.form.previous_semester_scholarships.push({
        name: this.scholarship.name,
        money: this.scholarship.money,
        is_ongoing: this.scholarship.is_ongoing
      })
      Object.keys(this.scholarship).forEach(i => this.scholarship[i] = '')
    },
    delJob(index) {
      const newArray = [...this.form.jobs]
      newArray.splice(index, 1)
      this.form.jobs = newArray
    },
    addJob() {
      this.form.job_histories.push({
        name:     this.job.name,
        place:    this.job.place,
        money:    this.job.money,
        job_begin:this.job.job_begin,
        leave_job:this.job.leave_job,
      })
      Object.keys(this.job).forEach(i => this.job[i] = '')
    },
    delFamily(index) {
      const newArray = [...this.form.family_members]
      newArray.splice(index, 1)
      this.form.family_members = newArray
    },
    addFamily() {
      this.form.family_members.push({
        full_name   : `${this.family.title}${this.family.full_name}`,
        age         : this.family.age,
        relationship: this.family.relationship,
        education   : this.family.education,
        occupation  : this.family.occupation,
        work_place  : this.family.work_place,
        salary      : this.family.salary,
      })
      Object.keys(this.family).forEach(i => this.family[i] = '')
    },
    numberFormat(number) {
      return typeof(number) ? number.toLocaleString('th-TH') : number
    },
    handleDocumentUpload(event) {
			this.form.attachment = event.target.files[0] ?? ''
		},
    resetFormData() {
      Object.entries(this.form).forEach(([key, value]) => {
        if (Array.isArray(value) && value.length === 0) {
          obj[key] = []
        } else if (typeof value === 'object' && value !== null) {
          this.resetFormData(value)
        } else {
          obj[key] = ''
        }
      });
    },
    async handleSubmit() {
      this.loading = true
      this.errors = {}
      try {
        await this.$axios.post('/scholarship/registration', this.form)
        const { data: {submission_id}} = await this.$axios.post('/scholarships/registration/step1', this.form)
        this.pushStep(submission_id)
        this.messageBox('ตรวจสอบข้อมูลสำเร็จ, ดำเนินการขั้นตอนต่อไป')
        .then(() => {
          this.nextStep(this.$store.state.application.curStep)
        })
      } catch (error) {
        const {data:{errors}} = error.response
        this.errors = Object.keys(errors).length ? errors : {}
        this.messageBox('ไม่สามารถดำเนินการขั้นต่อไปได้', true)
      }

      this.loading = false
    },
  },
  // mounted() {
  //   Object.keys(this.form).forEach(key => {
  //     if (key != 'scholarship_id' && this.prevData[key]) {
  //       this.form[key] = this.prevData[key]
  //     }
  //   })
  // }
}
</script>
