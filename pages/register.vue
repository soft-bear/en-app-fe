<template>
    <div style="padding-top: 80px;padding-bottom: 20px;">
        <b-row class="mx-auto justify-content-center">
            <b-col cols="6" lg="5" md="6">
                <div class="container" id="app">
                    <b-form class="form-horizontal">
                        <div class="text-center" v-if="step==1">
                            <b-card-title>ลงทะเบียน</b-card-title>
                            <b-card-sub-title class="mb-2 text-center">ขั้นตอนที่ 1/4</b-card-sub-title>
                            <b-card border-variant="dark" header="dark" header-bg-variant="dark"
                                header-text-variant="white">
                                <template #header>
                                    <p class="mb-0">การยินยอมให้ใช้ข้อมูลส่วนบุคคล</p>
                                </template>

                                <b-card-body>
                                    <input type="checkbox" name="policy" id="policy" v-model="policy" required>
                                    <b-card-text>
                                        ยอมให้เก็บ/เปิดเผยข้อมูลส่วนตัวหรือไม่ ?
                                    </b-card-text>
                                    <b-card-text>
                                        โปรดศึกษาประกาศความเป็นส่วนตัว</b-card-text>
                                    <b-card-text>
                                        ด้านข้อมูลส่วนบุคคลของนักศึกษามหาวิทยาลัยอุบลราชธานี <span> <a
                                                href="https://www.ubu.ac.th/web/files_up/00133f2022053118594393.pdf"
                                                target="_blank">ที่นี่</a></span>
                                    </b-card-text>
                                </b-card-body>
                            </b-card>
                            <button @click.prevent="next()" class="btn btn-primary mt-3">หน้าถัดไป</button>
                        </div>
                        <div v-if="step == 2">
                            <b-card-title class="text-center">ลงทะเบียน</b-card-title>
                            <b-card-sub-title class="mb-2 text-center">ขั้นตอนที่ 2/4</b-card-sub-title>
                            <b-card border-variant="info" header="info" header-bg-variant="info"
                                header-text-variant="white">
                                <template #header>
                                    <p class="mb-0">ข้อมูลทั่วไป</p>
                                </template>
                                <b-card-body>
                                    <b-form-group id="input-group-1" label="รหัสประจำตัวนักศึกษา" label-for="input-1">
                                        <b-form-input id="input-1" type="text"
                                            placeholder="ระบุรหัสประจำตัวนักศึกษา" required></b-form-input>
                                    </b-form-group>
                                    <b-form-group id="input-group-2" label="คำนำหน้านาม" label-for="input-2">
                                        <b-form-select v-model="selected" :options="options" class="mb-3">
                                            <template #first>
                                                <b-form-select-option :value="null" disabled>-- เลือก --
                                                </b-form-select-option>
                                            </template>
                                        </b-form-select>
                                    </b-form-group>
                                    <b-form-group id="input-group-3" label="ชื่อจริง" label-for="input-3">
                                          <b-form-input id="input-3" type="text"
                                              placeholder="ระบุชื่อจริง" required></b-form-input>
                                      </b-form-group>
                                      <b-form-group id="input-group-4" label="นามสกุล" label-for="input-4">
                                          <b-form-input id="input-4" type="text"
                                              placeholder="ระบุนามสกุล" required></b-form-input>
                                      </b-form-group>
                                </b-card-body>
                            </b-card>
                            <div class="text-center">
                                <button @click.prevent="prev()" class="btn btn-dark mt-3">
                                    ก่อนหน้า</button>
                                <button @click.prevent="next()" class="btn btn-primary mt-3">หน้าถัดไป</button>
                            </div>
                        </div>
                        <div v-if="step == 3">
                              <b-card-title class="text-center">ลงทะเบียน</b-card-title>
                              <b-card-sub-title class="mb-2 text-center">ขั้นตอนที่ 3/4</b-card-sub-title>
                              <b-card border-variant="info" header="info" header-bg-variant="info"
                                  header-text-variant="white">
                                  <template #header>
                                      <p class="mb-0">ข้อมูลนักศึกษา</p>
                                  </template>
                                  <b-card-body>
                                    <b-row>
                                      <div class="col-md-4">
                                        <b-form-group id="input-group-5" label="ชั้นปี" label-for="input-5">
                                            <b-form-input id="input-5" type="text"
                                                placeholder="ระบุชั้นปี" required></b-form-input>
                                        </b-form-group>
                                      </div>
                                      <div class="col-md-4">
                                        <b-form-group id="input-group-6" label="ภาควิชา" label-for="input-6">
                                          <b-form-select v-model="selected" :options="options" class="mb-3">
                                              <template #first>
                                                  <b-form-select-option :value="null" disabled>-- เลือก --
                                                  </b-form-select-option>
                                              </template>
                                          </b-form-select>
                                      </b-form-group>
                                      </div>
                                      <div class="col-md-4">
                                        <b-form-group id="input-group-7" label="เกรดเฉลี่ยสะสม" label-for="input-7">
                                            <b-form-input id="input-7" type="text"
                                                placeholder="ระบุเกรดเฉลี่ยสะสม" required></b-form-input>
                                        </b-form-group>
                                      </div>
                                    </b-row>
                                      <b-form-group id="input-group-8" label="โทรศัพท์" label-for="input-8">
                                          <b-form-input id="input-8" type="tel"
                                              placeholder="ระบุเบอร์โทรศัพท์" required></b-form-input>
                                      </b-form-group>
                                      <b-form-group id="input-group-9" label="Facebook URL" label-for="input-9">
                                            <b-form-input id="input-9" type="text"
                                                placeholder="ตัวอย่าง https://facebook.com/username" required></b-form-input>
                                        </b-form-group>
                                        <b-form-group id="input-group-10" label="Line ID" label-for="input-10">
                                            <b-form-input id="input-10" type="text"
                                                placeholder="ระบุ Line ID" required></b-form-input>
                                        </b-form-group>
                                  </b-card-body>
                              </b-card>
                              <div class="text-center">
                                  <button @click.prevent="prev()" class="btn btn-dark mt-3">
                                      ก่อนหน้า</button>
                                  <button @click.prevent="next()" class="btn btn-primary mt-3">หน้าถัดไป</button>
                              </div>
                          </div>
                          <div v-if="step == 4">
                                <b-card-title class="text-center">ลงทะเบียน</b-card-title>
                                <b-card-sub-title class="mb-2 text-center">ขั้นตอนที่ 4/4</b-card-sub-title>
                                <b-card border-variant="info" header="info" header-bg-variant="info"
                                    header-text-variant="white">
                                    <template #header>
                                        <p class="mb-0">ข้อมูลการเข้าสู่ระบบ</p>
                                    </template>
                                    <b-card-body>
                                        <b-form-group id="input-group-11" label="อีเมล์" label-for="input-11">
                                            <b-form-input id="input-11" type="email"
                                                placeholder="ระบุอีเมล์" required></b-form-input>
                                        </b-form-group>
                                        <b-form-group id="input-group-12" label="ตั้งระหัสผ่าน" label-for="input-12">
                                              <b-form-input id="input-12" type="password"
                                                  placeholder="ระบุตั้งระหัสผ่าน" required></b-form-input>
                                          </b-form-group>
                                          <b-form-group id="input-group-13" label="ยืนยันรหัสผ่าน" label-for="input-13">
                                              <b-form-input id="input-13" type="password"
                                                  placeholder="ระบุการยืนยันรหัสผ่าน" required></b-form-input>
                                          </b-form-group>
                                    </b-card-body>
                                </b-card>
                                <div class="text-center">
                                    <button @click.prevent="prev()" class="btn btn-dark mt-3">
                                        ก่อนหน้า</button>
                                    <button @click.prevent="submit()" class="btn btn-success mt-3">ลงทะเบียน</button>
                                </div>
                            </div>
                    </b-form>
                </div>
            </b-col>
        </b-row>
    </div>
</template>


<script>
    export default {
        //layout: "defult",
        name: 'registerPage',
        el: '#app',
        data() {
            return {
                step: 1,
              policy: '',
                selected: null,
                options: [{
                        value: 'A',
                        text: 'นาง'
                    },
                    {
                        value: 'B',
                        text: 'นางสาว'
                    },
                    {
                        value: 'C',
                        text: 'นาย'
                    }
                ]
            }
        },
        methods: {
            prev() {
                this.step--;
            },
            next() {
                this.step++;
            },
            submit() {
                alert('Form Is Submitted.');
            }
        }
    }
</script>
