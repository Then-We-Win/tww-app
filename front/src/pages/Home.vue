<template>
  <q-page class="q-pa-md bg-white">
    <div class="column">
      <div class="text-center">
        <img style="width: 150px" src="../statics/weed.png" />
      </div>
      <div class="text-h5 q-py-sm text-center">
        You aren't part of any campaigns...
        <br/>
        Choose one or more you care about.
      </div>
      <div class="q-pt-md q-mx-xl q-gutter-md row">
        <q-card class="col cursor-pointer" @click="$bus.emit('route', 'campaign')">
          <img src="https://static01.nyt.com/images/2020/03/31/opinion/31Swisher/31Swisher-articleLarge.jpg?quality=75&auto=webp&disable=upscale">
          <q-card-section>
            <div class="text-h6">Truth in Media</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>
        <q-card class="col cursor-pointer" @click="$bus.emit('route', 'campaign')">
          <img src="https://static01.nyt.com/images/2018/06/30/us/politics/30abolishICE3/merlin_138980484_b5137360-9575-4b2c-9a68-02c48ac80de2-superJumbo.jpg?quality=90&auto=webp">
          <q-card-section>
            <div class="text-h6">End ICE Family Separation</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>
        <q-card class="col cursor-pointer" @click="$bus.emit('route', 'campaign')">
          <img src="https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg">
          <q-card-section>
            <div class="text-h6">Publicize DHS</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>
