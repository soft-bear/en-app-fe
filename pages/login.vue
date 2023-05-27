<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="4">
        <login class="my-4" />
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
