<template>
  <div class="">


          <div class="row">
            <div class="col-6 col-md-6">
              <div class="q-pt-md sidebar_headings">To Do List</div>
            </div>
            <div class="col-6 col-md-6 row justify-end">
              <div class="q-pt-md sidebar_headings">
                <q-btn no-caps size=".8rem" color="grey" flat padding="none" label="View All"/>
              </div>
            </div>
          </div>

          <template>

            <div class="row">
              <div class="col-6 col-md-6">
                <div class="q-pt-sm" style="font-size: .8rem">Today</div>
              </div>
            </div>

            <div class="row">
              <div class="col-6 col-md-6">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Create To Do List" />
                </div>
              </div>
              <div class="col-6 col-md-6 row justify-end">
                <div class="">
                  <p>Assign User</p>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top: -.8vw">
              <div class="col-6 col-md-6">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Visit TV Anchor" />
                </div>
              </div>
              <div class="col-6 col-md-6 row justify-end">
                <div class="">
                  <p style="margin-top: .1vw">Assign User</p>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top: -.8vw">
              <div class="col-9 col-md-9">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Share campaign to social media" />
                </div>
              </div>
              <div class="col-3 col-md-3 row justify-end">
                <div class="">
                  <p style="margin-top: .1vw">Assign User</p>
                </div>
              </div>
            </div>

          </template>

          <template>

            <div class="row">
              <div class="col-6 col-md-6">
                <div class="q-pt-sm" style="font-size: .8rem">Tomorrow</div>
              </div>
            </div>

            <div class="row">
              <div class="col-9 col-md-9">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Assign task to manager" />
                </div>
              </div>
              <div class="col-3 col-md-3 row justify-end">
                <div class="">
                  <p>Assign User</p>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top: -.8vw">
              <div class="col-9 col-md-9">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Create article for anchor" />
                </div>
              </div>
              <div class="col-3 col-md-3 row justify-end">
                <div class="">
                  <p style="margin-top: .1vw">Assign User</p>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top: -.8vw">
              <div class="col-9 col-md-9">
                <div class="">
                  <q-checkbox dense size="lg" v-model="right" label="Follow up for social media" />
                </div>
              </div>
              <div class="col-3 col-md-3 row justify-end">
                <div class="">
                  <p style="margin-top: .1vw">Assign User</p>
                </div>
              </div>
            </div>

          </template>
  </div>
</template>

<script>
export default {
name: 'campaign_todos',
  data () {
    return {
      right: ''
    }
  }
}
</script>
