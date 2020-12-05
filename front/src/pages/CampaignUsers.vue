<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-xl window-height window-width">
        <div class="row justify-center">
          <div class="col-4">
            <campaign-users-header/>
          </div>
          <div class="col-4">
            <campaign-users-invite-button/>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-4">
            <campaign-users-group-list/>
          </div>
        </div>
        
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

  import CampaignUsersHeader from 'components/campaign_users/Header.vue'
  import CampaignUsersInviteButton from 'components/campaign_users/InviteButton.vue'
  import CampaignUsersGroupList from 'components/campaign_users/GroupList.vue'

  export default {
    name: "CampaignUsers",
    components: {
      CampaignUsersHeader,
      CampaignUsersInviteButton,
      CampaignUsersGroupList
    },
    data() {
      return {
        // Store dummy data here
        // People
        // Roles
      }
    },
  }
</script>

<style>
</style>
