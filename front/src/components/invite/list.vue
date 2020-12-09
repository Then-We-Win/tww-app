<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-list>
          <invite-list-item
            v-for="(item, index) in list"
            :key="item.inviteID"
            :invitee="item"
            :index="index"
            :curLength="list.length"
            @removeRow="removeRow"
          />
      </q-list>

    <div class="row justify-between">
      <div class="q-py-md q-px-xl">
          <q-btn
            v-if="list.length < maxInvites"
            @click="addRow()"
            elevated
            rounded
            color="red-4"
            icon="add"
          ></q-btn>

          <q-btn
            v-else
            elevated
            rounded
            color="red-2"
            icon="add"
          ></q-btn>
      </div>

      <invite-list-item-action
        :list="list"
        @inviteSuccess="inviteHandle"
      />
    </div>
  </div>
</template>


<script>
/*

    Version 1.0

	Invite List component

    Displays list of invitations to be sent out. Expansions and contractions to the invite list size are dynmically displayed.
    Add button allows addition invitations to be added to the list.
    List contents are sent to invite-list-item-action component to be handled (sent out).
    Reports back to parent if invitations are sent out successfully.

*/
import InviteListItem from 'components/invite/list-item'
import InviteListItemAction from 'components/invite/list-item-action.vue'

export default {
  name: "InviteList",
  props: [],
  components: { 
      InviteListItem,
      InviteListItemAction
    },
    
   data () {
      return {
        //Maximum size of the invite list
        maxInvites: 10,
        //Invite list - used to display and take input for invites
        list: [
          {
            inviteID: this.getInviteID(),
            user: '',
            role: ''
          }
        ]
      }
   },
   methods: {
     //Returns a random ID to the caller
      getInviteID(){
        return Math.random().toString(16).slice(2);
      },
      //Adds row to list array
      addRow(x){
        //So long as list does not exceed length 10, add a blank row to the list array with a new ID.
        if(this.list.length < 10)
          this.list.push({inviteID: this.getInviteID(), user: '', role: ''});
      },
      //Removes row from list array
      removeRow(x){
        //Remove a single row from invite list at index x
        this.list.splice(x, 1)
      },
      //Handle the invite bool sent from child invite-list-item-action
      inviteHandle(inviteBool){
        // If invites successfully sent, report back to parent
        if(inviteBool === true){
          this.$emit('inviteWatch', true)
        }
        //If invites failed, do something
        else{
          window.alert("Something went wrong in sending the invitations.");
        }
      }
  }
}
</script>