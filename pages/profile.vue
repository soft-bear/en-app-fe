<template>
    <div class="container">
        <div class="row my-4">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h4><strong>บัญชีผู้ใช้</strong></h4>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <b-card no-body>
                            <b-tabs pills card vertical nav-wrapper-class="w-25">
                                <b-tab title="ข้อมูลส่วนตัว" active><b-card-text>ข้อมูลส่วนตัว</b-card-text></b-tab>
                                <b-tab title="การติดต่อ"><b-card-text>การติดต่อ</b-card-text></b-tab>
                                <b-tab title="ทุนการศึกษา"><b-card-text>ทุนการศึกษา</b-card-text></b-tab>
                                <b-tab title="กยศ.,กรอ."><b-card-text>กยศ.,กรอ.</b-card-text></b-tab>
                                <b-tab title="ผลการเรียน"><b-card-text>ผลการเรียน</b-card-text></b-tab>
                                <b-tab title="ครอบครัว"><b-card-text>ครอบครัว</b-card-text></b-tab>
                                <b-tab title="งานพิเศษ"><b-card-text>งานพิเศษ</b-card-text></b-tab>
                                <b-tab title="รายได้/รายจ่าย"><b-card-text>รายได้/รายจ่าย</b-card-text></b-tab>
                                <b-tab title="บิดา/มารดา"><b-card-text>บิดา/มารดา</b-card-text></b-tab>
                                <b-tab title="ความเป็นอยู่"><b-card-text>ความเป็นอยู่</b-card-text></b-tab>
                                <b-tab title="กิจกรรม/จิตอาสา"><b-card-text>กิจกรรม/จิตอาสา</b-card-text></b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
