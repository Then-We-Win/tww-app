<template>
  <q-page class="q-pa-sm bg-white">
    <div class="row items-center col">
      <div class="col-3" />
      <q-card class="col-6 q-pa-md">
        <q-card-section>
          <div class="text-h6">Contact us</div>
          <div class="q-pt-md q-pb-sm">
            Hey, thanks for checking us out! Have any questions, comments or suggestions? We'd love to hear from you! Please use the form below to send us a message.
          </div>
          <q-input v-model="name" label="Name" />
          <q-input v-model="email" label="eMail" />
          <q-input v-model="company" label="Company" />
          <q-input v-model="message" type="textarea" label="Message" />
          <div class="column q-pt-lg items-center">
            <q-btn color="secondary" label="Send" />
          </div>
        </q-card-section>
      </q-card>
      <div class="col-3" />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      company: '',
      message: ''
    }
  }
}
</script>

<style scoped>

</style>
