<template>
  <b-container>
    <b-overlay :show="loading">
      <b-row class="my-4">
        <b-col>
          <b-card>
            <template #header>
              <b-row>
                <b-col>{{ data.title }}</b-col>
                <b-col class="text-right small">{{ formatdate(data.created_at) }} | โดย : {{ data?.author?.username
                }}</b-col>
              </b-row>
            </template>
            <b-row>
              <b-col v-html="data.content"></b-col>
            </b-row>
            <b-row>
              <b-col>
                <hr class="mt-0" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card header-tag="div" class="small">
                  ไม่มีเอกสารประกอบ
                </b-card>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-overlay>
  </b-container>
</template>
<script>
import moment from 'moment'

export default {
  layout: "content",
  props: ['data', 'loading'],
  methods: {
    formatdate(date) {
      return moment(date).add(543, 'years').format('DD/MM/YYYY HH:mm:ss')
    }
  }
}
</script>
