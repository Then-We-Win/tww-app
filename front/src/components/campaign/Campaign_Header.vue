<template>

  <q-header elevated class="bg-white q-pa-xs">
    <q-toolbar>
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <!-- <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar> -->

      <q-toolbar-title class="toolbar-title">TWW</q-toolbar-title>

        <q-input outlined dense class="bg-grey-7" placeholder="Search here">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template>
            <q-btn
              style="color: gray"
              flat
              dense
              round
              icon="filter_list"
            >
            </q-btn>
          </template>
        </q-input>

      <q-btn flat round dense icon="whatshot" />
      <q-btn
              style="color: gray; padding: 0 1vw;"
              flat
              dense
              icon="message"
            />
            <q-btn
              style="color: gray; padding: 0 1vw;"
              flat
              dense
              round
              icon="notification_important"
            />
            <q-btn
              dense
              flat
              no-wrap
              style="margin: 0 60px 0 1vw"
            >
              <q-avatar rounded size="30px">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
              </q-avatar>
            </q-btn>
    </q-toolbar>
  </q-header>

    <!-- <q-header elevated class="bg-white">
      <template>
      <q-toolbar class="q-py-sm">
        <div class="col-3 col-sm-1">

        <q-toolbar-title class="toolbar-title">
          TWW
        </q-toolbar-title>
        </div>

        <div class="col-3 col-sm-8">
        <q-input outlined dense class="bg-grey-7" placeholder="Search here">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template>
            <q-btn
              style="color: gray"
              flat
              dense
              round
              icon="filter_list"
            >
            </q-btn>
          </template>
        </q-input>
        </div>
        <div class="col-3 col-sm-3">


        <template>

            <q-btn
              style="color: gray; padding: 0 9px;"
              flat
              dense
              icon="message"
            >
            </q-btn>
            <q-btn
              style="color: gray; padding: 0 9px;"
              flat
              dense
              round
              icon="notification_important"
            >
            </q-btn>
            <q-btn
              dense
              flat
              no-wrap
              style="margin: 0 60px 0 9px"
            >
              <q-avatar rounded size="30px">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
              </q-avatar>
            </q-btn>
        </template>
        </div>
      </q-toolbar>
      </template>
    </q-header> -->

</template>

<script>
export default {
  name: 'campaign_header'
}
</script>


<style>
.toolbar-title{
  color: black;
  font-weight: 900;
  font-size: 1.5rem;
  /* padding: 2vh; */
  margin-left: 1vw;
}

.bg-grey-7{
  background: rgb(243, 243, 243) !important;
  width: 70vh;
}
</style>
