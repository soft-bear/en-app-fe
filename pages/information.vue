<template>
    <div>
        <b-container class="py-4">
            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="person"></b-icon> ข้อมูลทั่วไป
                    </p>
                </template>
                <b-row>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="ชั้นปี" label-for="input-2">
                            <b-form-input placeholder="ระบุชั้นปี" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="ภาควิชา" label-for="input-3">
                            <b-form-select id="input-3" required></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="เกรดเฉลี่ยสะสม" label-for="input-2">
                            <b-form-input placeholder="ระบุเกรดเฉลี่สะสม" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="หมายเลขโทรศัพท์" label-for="input-2">
                            <b-form-input placeholder="ระบุหมายเลขโทรศัพท์" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="Facebook URL" label-for="input-3">
                            <b-form-input placeholder="https://www.facebook.com/username" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="Line ID" label-for="input-2">
                            <b-form-input placeholder="ระบุ Line ID" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="geo-alt"></b-icon> ที่อยู่ปัจจุบันฝหอพัก
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group id="input-group-2" label="ที่อยู่(บ้านเลขที่,หมู่บ้าน)" label-for="input-2">
                            <b-form-input placeholder="ระบุบ้านเลขที่หอพักและชื่อหมู่บ้าน" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="ตำบล" label-for="input-2">
                            <b-form-input placeholder="ระบุตำบล" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="อำเภอ" label-for="input-3">
                            <b-form-input placeholder="ระบุอำเภอ" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="จังหวัด" label-for="input-2">
                            <b-form-input placeholder="ระบุจังหวัด" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="รหัสไปรษณีย์" label-for="input-3">
                            <b-form-input placeholder="ระบุรหัสไปรษณีย์" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="geo-alt"></b-icon> ที่อยู่ตามภูมิลำเนา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group id="input-group-2" label="ที่อยู่(บ้านเลขที่,หมู่บ้าน)" label-for="input-2">
                            <b-form-input placeholder="ระบุบ้านเลขที่หอพักและชื่อหมู่บ้าน" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="ตำบล" label-for="input-2">
                            <b-form-input placeholder="ระบุตำบล" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="อำเภอ" label-for="input-3">
                            <b-form-input placeholder="ระบุอำเภอ" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="จังหวัด" label-for="input-2">
                            <b-form-input placeholder="ระบุจังหวัด" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-3" label="รหัสไปรษณีย์" label-for="input-3">
                            <b-form-input placeholder="ระบุรหัสไปรษณีย์" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="currency-dollar"></b-icon> ทุนการศึกษาที่เคยได้รับในปีการศึกษาที่ผ่านมา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ชื่อทุนการศึกษา" label-for="input-2">
                            <b-form-input placeholder="ระบุชื่อทุนการศึกษา" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="จำนวนเงิน" label-for="input-2">
                            <b-form-input placeholder="ระบุจำนวนเงิน" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="ประเภททุน" label-for="input-2">
                            <b-form-select required></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-md-2">
                        <b-form-group id="input-group-2" label="." label-for="input-2">
                            <b-button variant="primary">
                                <b-icon icon="plus-circle"></b-icon> เพิ่ม
                            </b-button>
                        </b-form-group>

                    </div>
                </b-row>
            </b-card>
            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="file-earmark-richtext"></b-icon> ทุนการศึกษาที่เคยได้รับในปีการศึกษาที่ผ่านมา
                    </p>
                </template>
                <table class="table table-hover">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">ชื่อทุนการศึกษา</th>
                            <th scope="col">จำนวนเงิน</th>
                            <th scope="col">ประเภททุน</th>
                            <th scope="col">ดำเนินการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td>ทุนการศึกษาที่ 1</td>
                            <td>200</td>
                            <td>ต่อเนื่อง</td>
                            <td>
                                <b-button variant="danger">
                                    <b-icon icon="trash"></b-icon> ลบ
                                </b-button>
                            </td>
                        </tr>
                        <tr class="text-center">
                            <td>ทุนการศึกษาที่ 2</td>
                            <td>20000</td>
                            <td>รายปี</td>
                            <td>
                                <b-button variant="danger">
                                    <b-icon icon="trash"></b-icon> ลบ
                                </b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-card>
            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="currency-dollar"></b-icon> กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ,)
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group>
                            <b-form-radio name="toon" value="1">กู้ยืมค่าธรรมเนียมการศึกษา</b-form-radio>
                            <b-form-radio name="toon" value="2">ก้ยืมค่าครองชีพรายเดือน</b-form-radio>
                            <b-form-radio name="toon" value="3">ก้ยืมธรรมเนียมการศึกษาแลพค่าครองชีพรายเดือน
                            </b-form-radio>
                            <b-form-radio name="toon" value="4">ไม่ได้กู้</b-form-radio>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="file-earmark-richtext"></b-icon> ปีการศึกษาล่าสุด - ภาคเรียนที่ 1
                    </p>
                </template>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="เกรดเฉลี่ย" label-for="input-2">
                            <b-form-input placeholder="ระบุเกรดเฉลี่ย" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="เกรดเฉลี่ยสะสม" label-for="input-2">
                            <b-form-input placeholder="เกรดเฉลี่ยสะสม" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="file-earmark-richtext"></b-icon> ปีการศึกษาล่าสุด - ภาคเรียนที่ 2
                    </p>
                </template>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="เกรดเฉลี่ย" label-for="input-2">
                            <b-form-input placeholder="ระบุเกรดเฉลี่ย" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="เกรดเฉลี่ยสะสม" label-for="input-2">
                            <b-form-input placeholder="เกรดเฉลี่ยสะสม" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="people"></b-icon> ข้อมูลด้านครอบครัว <span
                            style="font-size: 12px;
                              ">(ระบุทุกคน บิดา/มารดา/พี่/น้อง
                            รวมถึงนักศึกษาด้วย)</span>
                    </p>
                </template>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="ชื่อ-สกุล" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-2">
                        <b-form-group id="input-group-2" label="อายุ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-2">
                        <b-form-group id="input-group-2" label="ความเกี่ยวข้อง" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-2">
                        <b-form-group id="input-group-2" label="ระดับการศึกษา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="อาชีพ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="สถานที่ทำงาน/ศึกษา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-2">
                        <b-form-group id="input-group-2" label="รายได้/เดือน" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-button variant="primary">
                    <b-icon icon="plus-circle"></b-icon> เพิ่มข้อมูล
                </b-button>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="people"></b-icon> รายชื่อบุคคลในครอบครัว
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <table class="table table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">ชื่อ-สกุล</th>
                                    <th scope="col">อายุ</th>
                                    <th scope="col">ความเกี่ยวข้อง</th>
                                    <th scope="col">ระดับการศึกษา</th>
                                    <th scope="col">อาชีพ</th>
                                    <th scope="col">สถานที่ทำงาน/ศึกษา</th>
                                    <th scope="col">รายได้/เดือน</th>
                                    <th scope="col">ดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>นาง ทดสอบ ทดสอบ</td>
                                    <td>60</td>
                                    <td>แม่</td>
                                    <td>ป.4</td>
                                    <td>ทำนา</td>
                                    <td>ทุ่งนา</td>
                                    <td>500</td>
                                    <td>
                                        <b-button variant="danger">
                                            <b-icon icon="trash"></b-icon> ลบ
                                        </b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> การทำงานในปีที่ผ่านมา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group id="input-group-2" label="งานที่ทำ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="สถานที่ทำงาน" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="จำนวนเงินที่ได้รับ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="วันที่เริ่มงาน" label-for="input-2">
                            <b-form-input type="date" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-3">
                        <b-form-group id="input-group-2" label="วันที่จบงาน" label-for="input-2">
                            <b-form-input type="date" required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-button variant="primary">
                    <b-icon icon="plus-circle"></b-icon> เพิ่มข้อมูล
                </b-button>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> ประวัติการทำงานพิเศษ
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <table class="table table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">งานที่ทำ</th>
                                    <th scope="col">สถานที่ทำงาน</th>
                                    <th scope="col">ระยะเวลาทำงาน</th>
                                    <th scope="col">จำนวนเงินที่ได้รับ</th>
                                    <th scope="col">ดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>พนักงานขาย</td>
                                    <td>7-11</td>
                                    <td>1 เดือน</td>
                                    <td>10,000</td>
                                    <td>
                                        <b-button variant="danger">
                                            <b-icon icon="trash"></b-icon> ลบ
                                        </b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> ข้อมูลรายได้ของนักศึกษา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="บิดา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="มารดา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ผู้ปกครอง" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ทุนการศึกษา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="กู้ยืม กยศ.,กรอ." label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ทำงานพิเศษ/ออนไลน์" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <strong>รายได้รวม : <span class="text-success"> 15,000</span> บาท</strong>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> ข้อมูลรายได้ของนักศึกษา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ค่าใช้จ่ายประจำเดือน" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ค่าใช้จ่ายในการศึกษา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ค่าหอพัก" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ค่าพาหนะ/เดินทาง" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ค่าใช้จ่ายอื่นๆ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <strong>รายได้รวม : <span class="text-danger"> 15,000</span> บาท</strong>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="people"></b-icon> สถานะภาพบิดา-มารดา
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group v-model="selected" :options="options"
                                :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="house-door"></b-icon> บ้านที่อยู่อาศัย
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            บ้านของตัวเอง
                        </b-form-checkbox>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-12">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            บ้านเช่า (บาท/เดือน)
                        </b-form-checkbox>
                        <b-form-input required></b-form-input>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-12">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            อาศัยคนอื่น (ระบุ)
                        </b-form-checkbox>
                        <b-form-input required></b-form-input>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pin-map"></b-icon> ที่ดิน
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            เป็นของตัวเอง(ไร่)
                        </b-form-checkbox>
                        <b-form-input required></b-form-input>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-12">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            อาศัยคนอื่น(ระบุ)
                        </b-form-checkbox>
                        <b-form-input required></b-form-input>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-6">
                        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="บ้านของตัวเอง"
                            unchecked-value="not_accepted">
                            เช่าคนอื่น
                        </b-form-checkbox>
                        <b-form-input required></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="input-group-2" label="อัตราค่าเช่า(บาท/เดือน)" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> การทำกิจกรรม
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <b-form-group id="input-group-2" label="กิจกรรมที่ทำ" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ภาคเรียน" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ปีการศึกษา" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-4">
                        <b-form-group id="input-group-2" label="ชั่วโมงกิจกรรม" label-for="input-2">
                            <b-form-input required></b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
                <b-button variant="primary">
                    <b-icon icon="plus-circle"></b-icon> เพิ่มข้อมูล
                </b-button>
            </b-card>

            <b-card class="mb-3" border-variant="primary" header-bg-variant="primary" header-text-variant="white">
                <template #header>
                    <p class="mb-0">
                        <b-icon icon="pencil"></b-icon> ประวัติการทำงานพิเศษ
                    </p>
                </template>
                <b-row>
                    <div class="col-md-12">
                        <table class="table table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">กิจกรรมที่ทำ</th>
                                    <th scope="col">ภาคเรียนที่ทำ</th>
                                    <th scope="col">ปีการศึกษา</th>
                                    <th scope="col">ชั่วโมงกิจกรรม</th>
                                    <th scope="col">ดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>กวาดวัด</td>
                                    <td>1</td>
                                    <td>2566</td>
                                    <td>8</td>
                                    <td>
                                        <b-button variant="danger">
                                            <b-icon icon="trash"></b-icon> ลบ
                                        </b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </b-row>
            </b-card>
        </b-container>
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
