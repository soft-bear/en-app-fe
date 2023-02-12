<template>
    <b-row>
        <b-col cols="lg-12 xl-12" class="pr-lg-12 d-flex flex-column justify-content-between py-4">
            <div>
              <b-card no-body>
                <template #header>
                  <b-row>
                    <b-col cols="6">
                      <h4 class="mb-0">ทุนการศึกษากำลังดำเนินการ</h4>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <nuxt-link class="text" to="schorlarship">
                        ดูทั้งหมด <b-icon icon="chevron-right"></b-icon></nuxt-link>
                        <div class="text-center">
                        </div>
                    </b-col>
                  </b-row>
                </template>
                  <b-list-group flush>
                    <nuxt-link to="/schorlarships/1" class="list-group-item-action">
                      <b-list-group-item>
                        <h5 class="mb-0">ทุนอุดหนุนการศึกษาประเภท ก (หลักสูตรปกติ สำหรับนักศึกษาระดับปริญญาตรี ชั้นปีที่ 1)</h5>
                        <b-card-text class="text-muted d-block">ทุนอุดหนุนการศึกษาประเภท ก (ปีการศึกษา 2566)</b-card-text>
                        <b-card-text class="text-muted d-block">รับใบสมัคร 1 ก.พ. 2566 - 13 ก.พ. 2566 <span class="text-success">กำลังเปิดรับสมัคร</span></b-card-text>
                      </b-list-group-item>
                    </nuxt-link>
                  </b-list-group>
              </b-card>
            </div>
        </b-col>
    </b-row>
</template>
