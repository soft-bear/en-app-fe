<template>
  <div>
    <b-row class="mt-4 mb-2">
      <b-col>
        <b-card no-body class="mt-2">
          <template #header>
            ทุนการศึกษาที่อยู่ระหว่างดำเนินการ
          </template>
          <b-card-boy class="m-0 p-0">
            <table class="table table-sm m-0 table-hover table-striped">
              <thead>
                <tr class="text-center">
                  <th scope="col">ชื่อทุนการศึกษา</th>
                  <th scope="col">สถานะ</th>
                  <th scope="col">ปีการศึกษา</th>
                  <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
                  <th scope="col">ทุนต่อเนื่อง</th>
                </tr>
              </thead>
              <tbody class="small">
                <tr class="text-center">
                  <th class="text-primary">
                    <b-link href="#">ทุนการศึกษาที่ 1</b-link>
                  </th>
                  <td class="text-success">กำลังเปิดรับสมัคร</td>
                  <td>2566</td>
                  <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                  <td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card-boy>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mb-4 mt-2">
      <b-col>
        <b-card no-body class="mt-2">
          <template #header>
            ทุนการศึกษาที่ผ่านมา
          </template>
          <b-card-boy class="m-0 p-0">
            <table class="table table-sm m-0 table-hover table-striped">
              <thead>
                <tr class="text-center">
                  <th scope="col">ชื่อทุนการศึกษา</th>
                  <th scope="col">สถานะ</th>
                  <th scope="col">ปีการศึกษา</th>
                  <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
                  <th scope="col">ทุนต่อเนื่อง</th>
                </tr>
              </thead>
              <tbody class="small">
                <tr class="text-center">
                  <th class="text-primary">
                    <b-link href="#">ทุนการศึกษาที่ 1</b-link>
                  </th>
                  <td class="text-success">กำลังเปิดรับสมัคร</td>
                  <td>2566</td>
                  <td>14 เม.ย. 2566-30 เม.ย.2566</td>
                  <td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card-boy>
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
