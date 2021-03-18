<template>
  <div class="">
    <campaign-comment-list
      v-for="comment in comments"
      :key="comment.id"
      :name="comment.name"
      :avatar="comment.avatar"
      :comment="comment.comment"
      :username="comment.username"
      :time="comment.time"
    ></campaign-comment-list>

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
import CampaignCommentList from "components/campaign/campaign-comment-list.vue";
export default {
  name: "campaign_comment_item",
  components: {
    CampaignCommentList,
  },
  data() {
    return {
      comments: [
        {
          id: this.getID(),
          name: "John Wick",
          username: "john.wick",
          avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          comment:
            "Vestibulum metus magna, venenatis sit amet elementum sed, dapibus tempor dolor. Nunc et sagittis lectus. Pellentesque eleifend sollicitudin augue, gravida fermentum magna ultricies quis.",
          time: "8:00 am",
        },
        {
          id: this.getID(),
          name: "Winston",
          username: "winston",
          avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
          comment:
            "Praesent eleifend massa at dolor vestibulum vestibulum. Venenatis sit amet elementum sed, dapibus tempor dolor. Nunc et sagittis lectus. Pellentesque eleifend sollicitudin augue, ",
          time: "9:30 am",
        },
        {
          id: this.getID(),
          name: "Sofia",
          avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
          username: "sofia",
          comment:
            "Vestibulum metus magna, venenatis sit amet elementum sed, dapibus tempor dolor. Nunc et sagittis lectus. Pellentesque eleifend sollicitudin augue, gravida fermentum magna ultricies quis.",
          time: "10:30 am",
        },
        {
          id: this.getID(),
          name: "Bowery King",
          username: "bowery",
          avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores",
          time: "1.30 am",
        },
      ],
    };
  },
  methods: {
     //Returns a random ID to the caller
      getID(){
        return Math.random().toString(16).slice(2);
      }
  }
};
</script>
