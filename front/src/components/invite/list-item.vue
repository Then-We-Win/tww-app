<template>
    <div class="row justify-center q-col-gutter-md q-py-sm">
        <q-input 
            outlined
            dense
            class="col-6"
            bg-color="white"
            @input="changeEmail()"
            v-model="emailModel"
            label="Username or email address"
        >
            <template slot="prepend">
                <q-icon name="person" />
            </template>
        </q-input>

        <q-select 
            outlined
            dense
            class="col-4"
            bg-color="white"
            @input="changeRole()"
            v-model="roleModel"
            :options="roleOptions"
            label="Role"
        />
        
        <div v-if="curLength > 1 ">
            <q-btn
                @click="removeRow()"
                elevated
                round
                color="grey-6"
                icon="clear"
            />
        </div>
        <div v-else>
           <q-btn
                elevated
                round
                color="grey-3"
                icon="clear"
            />
        </div>
    </div>
</template>

<script>
/*

    Version 1.0
	
	Invite List Item component

    Receives single invitation data item, the index of the item in the parent list, and the length of the list.
    If length is greater than 1, a button allowing the row to be removed is displayed. Otherwise, a deactivation button is displayed instead.
    Q-input and Q-select are monitored and updated data is sent back to the parent list.

*/

export default {
  name: "InviteListItem",
  props: ['invitee', 'index', 'curLength'],
  data() {
      return {
          //q-input data model for user/email
          emailModel: null,
          //q-select data model for role
          roleModel: null,
          //q-select role options
          roleOptions: [
              'Campaign Manager',
              'Communications',
              'Legal',
              'Treasurer',
              'Organizer',
              'Volunteer'
          ]
      }
  },
  methods: {
      //Request parent remove this item from the list of invites
      removeRow(){
        this.$emit('removeRow', this.index);
      },
      //Save q-input user/email model back to invitee data
      changeEmail(){
          this.invitee.user = this.emailModel;
      },
      //Save q-select role model back to invitee data
      changeRole(){
          this.invitee.role = this.roleModel;
      }
  },
  watch: {
      //Watch for change in invitee data and report back changes to parent
      invitee() {
          this.$emit('input', this.invitee)
      }
  }
}
</script>