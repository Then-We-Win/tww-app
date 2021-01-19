<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section align="center">
          <q-icon name="warning" class="text-red" style="font-size: 2rem;"/>
        </q-card-section>

        <q-card-section class="q-pt-none">
          One or more invites are incorrectly formatted. Please ensure usernames are correct and roles are selected for each invitee.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Dismiss" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-list class="">
        <invite-list-item
          v-for="(item, index) in list"
          :key="item.inviteID"
          :invitee="item"
          :index="index"
          :curLength="list.length"
          @removeRow="removeRow"
        />
    </q-list>

    <div class="row justify-center q-py-md">
      <div class="col-5">
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

    Version 1.1

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
        ],
        alert: false,
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
        //If invites failed, open alert dialog
        else{
          this.alert = true;
        }
      }
  }
}
</script>