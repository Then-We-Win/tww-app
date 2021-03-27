<template>
  <q-page class="q-pa-sm">
    <q-parallax>
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
    <div class="q-mx-xl q-px-xl">
      <q-avatar size="150px" class="bg-white absolute profile-image ">
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
      <div class="row q-col-gutter-lg q-mt-xl q-pt-xl">
        <div class="col-6 q-mb-md q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">First name</div>
          <q-input type="text" v-model="fname" filled />
        </div>
        <div class="col-6 q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">Last name</div>
          <q-input type="text" v-model="lname" filled />
        </div>
        <div class="col-6 q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">
            Email address
          </div>
          <q-input type="email" v-model="email" filled />
        </div>
        <div class="col-6 q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">
            Change location
          </div>
          <q-input type="text" v-model="location" filled />
        </div>
        <div class="col-6 q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">
            Phone number
          </div>
          <q-input
            filled
            v-model="phone"
            label="Phone"
            mask="(###) ### - ####"
          />
        </div>
        <div class="col-6 q-mb-md">
          <div class="text-grey-5 text-weight-bold text-body1">Website</div>
          <q-input type="text" v-model="website" filled />
        </div>
      </div>
      <div>
        <div class="text-grey-5 text-weight-bold text-body1">Add bio</div>
        <q-input type="textarea" v-model="bio" filled />
      </div>
      <div class="text-right q-mt-md">
        <q-btn
          label="Cancel"
          color="grey-4"
          class="text-black q-pa-sm q-mr-md"
        />
        <q-btn
          label="Update Profile"
          color="grey-9"
          class="rounded-borders text-white q-pa-sm"
        />
      </div>
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
  name: 'EditAccount',
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
<style scoped>
.profile-image {
  top: 38%;
}
</style>
