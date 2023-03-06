<template>
  <b-container style="padding-top: 70px;">
    <b-row>
      <b-col cols="12" lg="8" md="6" sm="12">
        <b-card border-variant="dark" class="mb-2">
          <template #header>
            <h4 class="mb-0">{{ loadData.title }}</h4>
            <p><span>
                {{ loadData.countries }}
              </span> | <span>
                ดย : {{ loadData.continent }}
              </span></p>
          </template>
          <b-card-text>
            <div class="text-center mb-3">
              <b-img :src=loadData.image :alt=loadData.title style="max-height: 20rem;"></b-img>
            </div>
            {{ loadData.description }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="12" lg="4" md="6" sm="12">
        <b-card border-variant="dark" class="mb-2">
          <template #header>
            <h4 class="mb-0">เอกสารประกอบ</h4>
          </template>
          <b-card-text>
            <b-alert show variant="secondary">ไม่มีเอกสารประกอบสำหรับทุนการศึกษานี้</b-alert>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>
<script>
//const id = this.$route.params.id
export default {
  layout: "content",
  data() {
    return {
      loadData: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      const userIdPromise = await fetch(
        `https://api.nuxtjs.dev/posts/${this.$route.params.id}`)
      const userIdJson = userIdPromise.json()
      userIdJson.then((res) => {
        this.loadData = res
        console.log(res)
      })
    }
  }
}
</script>
