<template>
  <q-page class="q-pa-md">
    <div class="column">
      <div v-if="!items">
        <NothingHere :text="text" :image="imgUrl"/>
      </div>
      <div v-else>
        <div class="q-pt-md q-mx-xl q-gutter-md row">
          <q-card
            v-for="item in items"
            :key="item.id"
            class="col cursor-pointer"
            @click="$bus.emit('app.route', 'campaign')"
          >
            <img
              src="https://whyy.org/wp-content/uploads/2018/08/2018-8-3-k-paynter-dhs-family-court-protest-3-768x512.jpg"
            />
            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
              <div class="text-subtitle2">
                {{ item.owner ? item.owner.username : "Unknown" }}
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Details here
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import NothingHere from "../components/NothingHere";

export default {
  components: {
    NothingHere,
  },
  data() {
    return {
      items: null,
      text: `You aren't part of any Campaigns...`,
      imgUrl: ''
    };
  },
  async mounted() {
    const result = await this.$axios.get(
      this.$store.state.system.api.base + "/campaigns"
    );
    this.items = result.data;
  },
};
</script>

<style scoped>
.bg {
  background-color: #ffffff;
}
</style>
