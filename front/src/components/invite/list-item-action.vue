<template>
  <div class="row col-6 justify-end q-col-gutter-md">
    <div class="">
      <q-btn
        @click="$router.go(-1)"
        elevated
        rounded
        color="grey-5"
        label="Cancel"
      />
    </div>
    <div class="">
      <q-btn
        @click="handleAdd()"
        elevated
        rounded
        color="blue-6"
        label="Invite Users"
      />
    </div>
  </div>  
</template>

<script>
/*

    Version 0.3

    Invite List Item Action component.

    Receives a list of invitations from parent and processes them.
    Once invitations have been processed, report to parent success or failure of processing.

*/
import axios from 'axios';
import InviteServices from 'components/invite/services.js';

export default {
  name: "InviteListItemAction",
  props: ['list'],
  methods: {
    //Invite Users button action
    handleAdd() {
      /*
          TODO :
        1. Verify the inputs are correct.

        invite schema: id, campaign, userId, rights, group, role, dateCreated, dateModified, modifiedBy

      */
     //ensure each invite has an assigned role
      for(var i = 0; i < this.list.length; i++){
        if(this.list[i].user && !this.list[i].role){
          this.$emit('inviteSuccess', false);
          return;
        }
      }

      //pull campaign data to insert into email
      var campaign = {
        campaign: "my campaign",
      }

      for(var i = 0; i < this.list.length; i++){
        InviteServices.emailSupport(this.list[i], campaign);
      }
      //Report to parent invites were successfully sent
      //this.$emit('inviteSuccess', true);
    },
  }
}
</script>