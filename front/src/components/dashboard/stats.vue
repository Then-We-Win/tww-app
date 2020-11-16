<template>
  <q-card class="bg-transparent no-shadow no-border">
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-sm ">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: #546bfa" class="q-pa-none">
              <q-item-section class="q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">$ 20k</q-item-label>
                <q-item-label>Monthly Donations</q-item-label>
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-icon name="fas fa-dollar-sign" color="white" size="44px"></q-icon>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: #3a9688" class="q-pa-none">
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">20</q-item-label>
                <q-item-label>Weekly Tasks</q-item-label>
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-icon name="fas fa-chart-bar" color="white" size="44px"></q-icon>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: #7cb342" class="q-pa-none ">
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">321</q-item-label>
                <q-item-label>New Members</q-item-label>
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-icon name="fas fa-chart-line" color="white" size="44px"></q-icon>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <q-card>
            <q-item style="background-color: #f88c2b" class="q-pa-none">
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">82</q-item-label>
                <q-item-label>Active Members</q-item-label>
              </q-item-section>
              <q-item-section side class="q-mr-md text-white">
                <q-icon name="person" color="white" size="44px"></q-icon>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "DashboardStats",
  props: ['settings']
  // TODO: Step 1: Convert the above demo data in the template to data () below.
  // TODO: Step 2: Convert the above template to a v-for loop.
  // TODO: Step 3: Cut the data () fields and place them in user.data.status.
  // TODO: Step 4: Change the template to to take data from the settings prop above.
  // TODO: Step 5: Pass the prop "settings" from user.data.status in the src/pages/Dashboard.vue
}
</script>
