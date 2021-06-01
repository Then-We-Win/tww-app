<template>
  <div class="">
    <campaign-comment-list
      v-for="comment in comments"
      :key="comment"
      :name="comment.name"
      :comment="comment.comment"
      :username="comment.username"
      :time="comment.time"
    ></campaign-comment-list>
  </div>
</template>

<script>
import CampaignCommentList from "components/campaign/campaign-comment-list.vue";
export default {
  name: "campaign_comment_item",
  components: {
    CampaignCommentList
  },
  data() {
    return {
      comments: [
        {
          name: "Winston",
          username: "winston",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores",
          time: "9.30am"
        },
        {
          name: "Winston",
          username: "winston",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores",
          time: "9.30am"
        },
        {
          name: "Winston",
          username: "winston",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores",
          time: "9.30am"
        },
        {
          name: "Winston",
          username: "winston",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihilpraesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores",
          time: "9.30am"
        }
      ]
    };
  }
};
</script>
