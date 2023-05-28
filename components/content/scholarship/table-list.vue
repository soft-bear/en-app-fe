<template>
  <div class="table-responsive m-0">
    <table class="table table-sm m-0 table-hover small text-nowrap border-left border-right border-bottom">
      <thead class="text-center">
        <tr>
          <th scope="col" class="text-left">ชื่อทุนการศึกษา</th>
          <th scope="col">สถานะ</th>
          <th scope="col">ปีการศึกษา</th>
          <th scope="col">ระยะเวลาเปิดรับสมัคร</th>
          <th scope="col">ทุนต่อเนื่อง</th>
        </tr>
      </thead>
      <tbody class="text-center text-nowrap">
        <tr>
          <td class="text-primary text-left scholarship-name">
            <b-link href="#">
              <strong>ทุนการศึกษาที่ 1</strong><br /><small class="text-muted">หมวดหมู่จ้า</small>
            </b-link>
          </td>
          <td class="text-success">กำลังเปิดรับสมัคร</td>
          <td>2/2566</td>
          <td>14 เม.ย. 2566-30 เม.ย.2566</td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
td {
  vertical-align: middle !important;
}

.scholarship-name {
  max-width: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
