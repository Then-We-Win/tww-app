<template>

  <div class="">

    <Campaign_Comment_List v-for="comment in comments" :key="comment"  :name="comment.name" :comment="comment.comment" :username="comment.username" :time="comment.time"></Campaign_Comment_List>

    <!-- <div v-for="n in 4" :key="n">

      <div class="row q-pa-sm">
        <div class="col-2 col-md-1">
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
        <div class="col-10 col-md-11 q-px-md">
          <p>Winston <br> <span class="text-grey">@winston</span></p>
          <p class="text-grey">9:30am</p>
          <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores</p>

          <q-btn outline padding="none" size="1.1rem" flat no-caps label="Reply"/>
        </div>
      </div>

      <hr style="color: #fcfcfc; width: 100%"/>

    </div> -->
  </div>

</template>

<script>
import Campaign_Comment_List from 'components/campaign/Campaign_Comment_List.vue'
export default {
  name: 'campaign_comment_item',
  components: {
    Campaign_Comment_List
  },
  data() {
    return {
      comments: [
        {
          name: 'Winston',
          username: 'winston',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores',
          time: '9.30am',
        },
        {
          name: 'Winston',
          username: 'winston',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores',
          time: '9.30am',
        },
        {
          name: 'Winston',
          username: 'winston',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores',
          time: '9.30am',
        },
        {
          name: 'Winston',
          username: 'winston',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores',
          time: '9.30am',
        },
      ],
    }
  }

}
</script>
