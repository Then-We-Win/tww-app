<template>
  <q-page class="q-pa-sm">
    <q-parallax class="imageHeight">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        @mouseover="showText = true"
        @mouseleave="showText = false"
        @click="uploadBannerImage = true"
      >
        <div
          class="absolute-full text-subtitle2 flex flex-center"
          v-show="showText"
        >
          <q-icon name="fas fa-camera" size="50px"></q-icon>
        </div>
      </q-img>
    </q-parallax>
    <div>
      <div :class="$q.screen.gt.md ? ' q-px-xl q-mx-xl' : 'q-mx-xl'">
        <q-avatar size="150px" class="profile-image ">
          <q-img
            src="https://cdn.quasar.dev/img/avatar.png"
            @mouseover="showHover = true"
            @mouseleave="showHover = false"
            @click="uploadImage = true"
            class="q-pa-xs"
          >
            <div
              class="absolute-full text-subtitle2 flex flex-center"
              v-show="showHover"
            >
              <q-icon name="fas fa-camera" size="40px"></q-icon>
            </div>
          </q-img>
        </q-avatar>
        <div
          :class="
            $q.screen.gt.md
              ? 'row q-col-gutter-lg q-mt-xl q-pt-xl'
              : 'column q-col-gutter-lg q-mt-xl q-pt-lg'
          "
        >
          <div class="col col-md-4 q-mb-md q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1">
              {{ $t("form.first_name") }}
            </div>
            <q-input type="text" v-model="fname" filled />
          </div>
          <div class="col col-md-4 q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1">
              {{ $t("form.last_name") }}
            </div>
            <q-input type="text" v-model="lname" filled />
          </div>
          <div class="col col-md-4 q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1">
              {{ $t("form.email_address") }}
            </div>
            <q-input type="email" v-model="email" filled />
          </div>
        </div>
        <div :class="$q.screen.gt.md ? 'row q-col-gutter-md' : 'column'">
          <div class="col col-md-4 q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1 ">
              {{ $t("pages.edit.account.change_location") }}
            </div>
            <q-input type="text" v-model="location" filled />
          </div>
          <div class="col col-md-4 q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1">
              {{ $t("form.phone_no") }}
            </div>
            <q-input
              filled
              v-model="phone"
              label="Phone"
              mask="(###) ### - ####"
            />
          </div>
          <div class="col col-md-4 q-mb-md">
            <div class="text-grey-5 text-weight-bold text-body1">
              {{ $t("pages.contact.website") }}
            </div>
            <q-input type="text" v-model="website" filled />
          </div>
        </div>
        <div class="text-grey-5 text-weight-bold text-body1">
          {{ $t("pages.edit.account.add_bio") }}
        </div>
        <q-input type="textarea" v-model="bio" filled />
      </div>
    </div>

    <div
      :class="
        $q.screen.gt.md
          ? 'text-right q-mt-md q-mr-xl'
          : 'flex flex-center q-mt-lg'
      "
    >
      <q-btn
        label="Cancel"
        color="grey-4"
        :class="
          $q.screen.gt.md
            ? 'text-black q-pa-sm q-mr-lg'
            : 'text-black q-pa-sm q-mr-md'
        "
      />

      <q-btn
        label="Update Profile"
        color="grey-9"
        :class="
          $q.screen.gt.md
            ? 'rounded-borders text-white q-pa-sm q-mr-xl'
            : 'rounded-borders text-white q-pa-sm'
        "
      />
    </div>
    <q-dialog v-model="uploadImage">
      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
        :factory="profileImage"
      />
    </q-dialog>
    <q-dialog v-model="uploadBannerImage">
      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
        :factory="profileImage"
      />
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: "EditAccount",
  data() {
    return {
      showText: false,
      showHover: false,
      fname: "John",
      lname: "Wick",
      email: "john.wick@email.com",
      location: "Pennsylvania",
      phone: "+01 987456321",
      website: "http://www.campaign.com",
      bio: "http://www.campaign.com",
      uploadImage: false,
      uploadBannerImage: false
    };
  },
  methods: {
    profileImage() {
      this.uploadImage = false;
      this.uploadBannerImage = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@media (max-width: 750px) and (min-width: 320px) {
  .imageHeight {
    height: 250px !important;
  }
}
.profile-image {
  position relative
  top 0
  padding-top 64px
  margin-top -140px
  left 0
  right 0
}
</style>
