<template>
  <q-page class="">
    <campaign-subheader></campaign-subheader>
    <div class="content-container">
      <campaign-question></campaign-question>
      <div class="row">
        <div class="col-12 col-md-7">
          <div>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="black"
              indicator-color="black"
              align="left"
            >
              <q-tab name="about_campaign" label="About" />
              <q-tab name="campaign_wall" label="Wall" class="q-px-md" />
              <q-tab name="campaign_todos" label="Todos" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="campaign_wall">
                <wall />
              </q-tab-panel>

              <q-tab-panel name="about_campaign" class="q-py-lg">
                <div class="q-pa-md">
                  <h4 class="text-h4 q-my-xs text-weight-bold text-grey-10">
                    {{ campaign.title }}
                  </h4>
                  <div class="text-grey-8 q-pt-sm">
                    <span class="text-capitalize">{{ campaign.location }}</span>
                  </div>
                  <div class="text-grey-8 q-py-xs justify-center">
                    {{ campaign.supporters }} Supporters
                    <q-icon class="q-mx-xs" name="fas fa-circle" size="2px" />
                    <span class="text-capitalize q-ml-xs">{{
                      campaign.groupType
                    }}</span>
                    group
                  </div>
                  <div class="text-grey-8 q-py-xs">
                    Organized by
                    <span class="text-weight-bold">{{
                      getFirstOrganizerName(campaign.organizedBy)
                    }}</span>
                    and
                    <span class="text-weight-bold"
                      >{{
                        getTotalOrganizers(campaign.organizedBy)
                      }}
                      others</span
                    >
                  </div>

                  <q-separator class="q-mt-md" />
                  <div class="row q-py-sm">
                    <div class="col-8">
                      <div class="text-grey-8">
                        <h6 class="text-h6 q-ml-lg q-my-none text-weight-light">
                          Do you supporting this Campaign?
                        </h6>
                      </div>
                    </div>
                    <div class="col-4 row justify-end q-px-sm">
                      <q-btn-group flat>
                        <q-btn flat label="Yes" />
                        <q-btn flat label="No" />
                      </q-btn-group>
                    </div>
                  </div>
                  <q-separator class="q-mb-md" />

                  <h6
                    class="text-subtitle1 text-weight-medium q-my-none text-grey-8"
                  >
                    What is this campagin is about?
                  </h6>

                  <p class="text-grey-8 q-py-sm text-body2">
                    {{ campaign.about }}
                  </p>

                  <div class="row">
                    <div class="col" v-if="campaign.mainTarget">
                      <h6
                        class="text-subtitle1 text-weight-medium q-my-sm text-grey-8"
                      >
                        Main target
                      </h6>
                      <div
                        v-for="(item, index) in campaign.mainTarget"
                        :key="index"
                        class="text-grey-8 q-my-sm text-body2"
                      >
                        <span>{{ item.target }}</span>
                      </div>
                    </div>
                    <div class="col" v-if="campaign.secondaryTarget">
                      <h6
                        class="text-subtitle1 text-weight-medium q-my-sm text-grey-8"
                      >
                        Secondary target
                      </h6>
                      <div
                        v-for="(item, index) in campaign.secondaryTarget"
                        :key="index"
                        class="text-grey-8 q-my-sm text-body2"
                      >
                        <span>{{ item.target }}</span>
                      </div>
                    </div>
                  </div>
                  <q-separator class="q-my-sm" />
                  <campaign-comment></campaign-comment>
                  <q-separator class="q-my-sm" />
                  <campaign-comment-Item></campaign-comment-Item>
                </div>
              </q-tab-panel>
              <q-tab-panel name="campaign_todos">
                <todo />
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
        <div class="row justify-center col-12 col-md-5">
          <div>
            <q-btn-group flat>
              <q-btn flat disabled no-caps color="grey" label="Share:" />
              <q-btn flat no-caps color="black" label="Facebook" />
              <q-btn flat no-caps color="black" label="Twitter" />
              <q-btn flat no-caps color="black" label="LinkedIn" />
            </q-btn-group>
            <hr style="color: #fcfcfc; width: 100%; margin-top: 0px" />
            <campaign-leaders
              title="Supporting Organizations"
            ></campaign-leaders>
            <campaign-leaders title="Organizers"></campaign-leaders>
            <campaign-leaders title="Managers"></campaign-leaders>
            <campaign-supporters />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import wall from "components/wall/Wall.vue";
import CampaignQuestion from "components/campaign/campaign-question.vue";
import CampaignSupporters from "components/campaign/campaign-supporters.vue";
import CampaignLeaders from "components/campaign/campaign-leaders.vue";
import todo from "pages/Todo.vue";
import CampaignComment from "components/campaign/campaign-comment.vue";
import CampaignCommentItem from "components/campaign/campaign-comment-item.vue";
import CampaignSubheader from "components/campaign/campaign-subheader.vue";

export default {
  name: "PageIndex",
  components: {
    wall,
    CampaignQuestion,
    CampaignSupporters,
    CampaignLeaders,
    todo,
    CampaignComment,
    CampaignCommentItem,
    CampaignSubheader,
  },
  data() {
    return {
      tab: "about_campaign",
      splitterModel: 20,
      right: "",
      campaign: {
        title: "Protect our earth from climate change",
        location: "pennsylvania",
        supporters: "1,270",
        groupType: "public",
        organizedBy: [
          {
            id: this.getID(),
            name: "John Wick",
          },
          {
            id: this.getID(),
            name: "Winston",
          },
          {
            id: this.getID(),
            name: "Charon",
          },
          {
            id: this.getID(),
            name: "Mrs Wick",
          },
        ],
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur risus eu nunc congue molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ut urna laoreet sapien pretium vulputate. In et porttitor nulla. Cras ac tincidunt nisl.",
        mainTarget: [
          {
            target: "Big oil company 1",
          },
          {
            target: "Big oil company 2",
          },
          {
            target: "Big oil company 3",
          },
        ],
        secondaryTarget: [
          {
            target: "Car company 1",
          },
          {
            target: "Car company 1",
          },
          {
            target: "Car company 1",
          },
        ],
      },
    };
  },
  methods: {
    //Returns a random ID to the caller
    getID() {
      return Math.random()
        .toString(16)
        .slice(2);
    },
    getFirstOrganizerName(value) {
      return value[0].name;
    },
    getTotalOrganizers(value) {
      return value.length - 1;
    },
  },
};
</script>

<style>
@media (min-width: 900px) {
  .content-container {
    margin-left: 10vh;
    margin-right: 10vh;
  }
}
</style>
