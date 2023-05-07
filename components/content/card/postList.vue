<template>
    <div>
        <!-- <h2 class="mt-3">ทุนการศึกษา</h2>
        <b-row>
            <b-col>
                <b-card>
                    <div>
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-input-name">ปีการศึกษา</label>
                            <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="selected" :options="options">
                            </b-form-select>
                            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">แสดงเฉพาะทุนต่อเนื่อง</b-form-checkbox>
                            <b-button variant="primary"><b-icon icon="filter"></b-icon>กรอง</b-button>
                        </b-form>
                    </div>
                </b-card>
            </b-col>
        </b-row> -->
        <b-row>
            <b-col>
                <b-card class="mt-3" title="ทุนการศึกษาที่อยู่ระหว่างดำเนินการ">
                    <table class="table table-hover">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">ชื่อทุนการศึกษา</th>
                                <th scope="col">สถานะ</th>
                                <th scope="col">ปีการศึกษา</th>
                                <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
                                <th scope="col">ทุนต่อเนื่อง</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                                <th class="text-primary">
                                    <b-link href="#">ทุนการศึกษาที่ 1</b-link>
                                </th>
                                <td class="text-success">กำลังเปิดรับสมัคร</td>
                                <td>2566</td>
                                <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                                <td>
                                    <b-icon icon="check"></b-icon>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <th class="text-primary">
                                    <b-link href="#">ทุนการศึกษาที่ 2</b-link>
                                </th>
                                <td class="text-warning">กำลังดำเนินการ</td>
                                <td>2566</td>
                                <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                                <td>
                                    <b-icon icon="x"></b-icon>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-card class="mt-3" title="ทุนการศึกษาที่ผ่านมา">
                    <table class="table table-hover">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">ชื่อทุนการศึกษา</th>
                                <th scope="col">ปีการศึกษา</th>
                                <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
                                <th scope="col">ทุนต่อเนื่อง</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                                <th class="text-primary">
                                    <b-link href="#">ทุนการศึกษาที่ 1</b-link>
                                </th>
                                <td>2566</td>
                                <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                                <td>
                                    <b-icon icon="check"></b-icon>
                                </td>
                            </tr>
                            <tr class="text-center">
                                <th class="text-primary">
                                    <b-link href="#">ทุนการศึกษาที่ 2</b-link>
                                </th>
                                <td>2566</td>
                                <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                                <td>
                                    <b-icon icon="x"></b-icon>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <b-pagination align="center" v-model="currentPage" :total-rows="rows"></b-pagination>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                options: [{
                        value: null,
                        text: '== ปีการศึกษา =='
                    },
                    {
                        value: '2565',
                        text: '2565'
                    },
                    {
                        value: '2566',
                        text: '2566'
                    },
                    {
                        value: '2567',
                        text: '2567'
                    }
                ]
            }
        }
    }
</script>
