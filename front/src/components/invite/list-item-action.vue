<template>
  <div class="row q-col-gutter-md q-py-md q-px-xl">
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

    Version 0.1

    Invite List Item Action component.

    Receives a list of invitations from parent and processes them.
    Once invitations have been processed, report to parent success or failure of processing.

*/
export default {
  name: "InviteListItemAction",
  props: ['list'],
  methods: {
    //Invite Users button action
    handleAdd() {
      /*

          TODO :
        1. Verify the inputs are correct.
        2. Handle invites in 'list' via strapi.

        invite schema: id, campaign, userId, rights, group, role, dateCreated, dateModified, modifiedBy

      */

      //Report to parent invites were successfully sent
      this.$emit('inviteSuccess', true);

      //If something went wrong in sending invitations, use this.$emit('inviteSuccess', false);
    }
  }
}
</script>