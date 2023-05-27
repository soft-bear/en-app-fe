<template>
  <b-container>
    <div class="row mt-4">
      <div class="col text-center">
        <h4><strong>เข้าสู่ระบบ</strong></h4>
      </div>
    </div>
    <b-row class="justify-content-center my-4">
      <b-col cols="12" md="6">
        <div class="card">
          <div class="card-body"><login /></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: ['authenticated'],
  layout: 'content'
}
</script>
