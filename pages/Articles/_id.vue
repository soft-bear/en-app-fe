<template>
    <b-container fluid style="padding-top: 70px;">
        <b-row>
            <b-col cols="12" lg="8" md="6" sm="12">
                <b-card border-variant="dark" class="mb-2">
                    <template #header>
                        <h4 class="mb-0">{{ loadData . name }}</h4>
                        <p><span>
                                <b-icon icon="calendar"></b-icon> {{ loadData . latitude }}
                            </span> | <span>
                                <b-icon icon="person"></b-icon> โดย : {{ loadData . longitude }}
                            </span></p>
                    </template>
                    <b-card-text>
                        <div class="text-center mb-3">
                            <b-img :src=loadData.coverimage fluid :alt=loadData.name></b-img>
                        </div>
                        {{ loadData . detail }}
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" lg="4" md="6" sm="12">
                <b-card border-variant="dark" class="mb-2">
                  <template #header>
                          <h4 class="mb-0"><b-icon icon="file-earmark"></b-icon> เอกสารประกอบ</h4>
                      </template>
                    <b-card-text>
                       <b-alert show variant="secondary">ไม่มีเอกสารประกอบสำหรับข่าวนี้</b-alert>
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
                    `https://www.melivecode.com/api/attractions/${this.$route.params.id}`)
                const userIdJson = userIdPromise.json()
                userIdJson.then((res) => {
                    this.loadData = res.attraction
                    console.log(res.attraction)
                })
            }
        }
    }
</script>
