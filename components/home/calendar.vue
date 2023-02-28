<!-- <script setup>
import { reactive } from 'vue'
//import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

const calendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }
})
</script> -->
<template>
  <b-row>
    <b-col cols="lg-12 xl-12" class="pr-lg-12 d-flex flex-column justify-content-between py-4">
      <div>
        <b-card no-body>
          <template #header>
            <b-row>
              <b-col cols="12" lg="12" md="12">
                <h4 class="mb-0">ปฏิทินกำหนดการ</h4>
              </b-col>
            </b-row>
          </template>
          <b-card-body>
            <!-- <FullCalendar v-bind:options="calendarOptions" /> -->
          </b-card-body>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template>
