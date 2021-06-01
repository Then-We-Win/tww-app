<template>
    <q-page class="q-pa-sm" :key="inviteFlag">
        <div v-if="user.loggedIn && inviteFlag === true">
            <invite-splash />       
        </div>

        <div v-else-if="user.loggedIn">
            <invite-header />
            <invite-list @inviteWatch="inviteWatch"/>          
        </div>

        <div v-else>
            {{ $t('pages.account.logged_out') }}
        </div>
    </q-page>
</template>

<script>
/*

    Version 1.0

    Invitation page.

    Displays inputs for invitations comprised of user/emails and desired roles.
    Once the invite-list component sends confirmation that invitations were sent, pages updates to display congratulations.

*/
import InviteHeader from 'components/invite/header.vue'
import InviteList from 'components/invite/list.vue'
import InviteSplash from 'components/invite/splash.vue'

export default {
  name: "Invite",
  components: {
    InviteHeader,
    InviteList,
    InviteSplash
  },
  data() {
    return {
      //Flag for invitations sent successfully. False - load invite input page, True - load congratulations splash page
      inviteFlag: false,
      settings: this.$store.state.app.settings,
      user: this.$store.state.user      
    }
  },
  methods: {
    //Receive boolean from child for sent invites. True - invites set successfully, False - something went wrong.
    inviteWatch(x){
      this.inviteFlag = x;
    }
  }
}
</script>

<style scoped>

</style>