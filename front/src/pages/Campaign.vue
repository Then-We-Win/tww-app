<template>
  <q-page class="">
    <Campaign_Subheader></Campaign_Subheader>
    <div class="content-container">
      <Campaign_Question></Campaign_Question>

      <div class="row">
        <div class="col-12 col-md-7">

          <div >
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="black"
                indicator-color="black"
                align="justify"
              >
                <q-tab name="campaign_wall" label="Campaign Wall" />
                <q-tab name="about_campaign" label="About Campaign" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>

                <q-tab-panel name="campaign_wall">
                  <wall />
                </q-tab-panel>

                <q-tab-panel name="about_campaign" class="q-py-lg">
                    <div class="tab-header">Mauris sollicitudin massa nec turpis
                      lacinia, id congue nunc tristique.
                    </div>
                    <div class="text-grey q-py-md">
                    Thursday, September 5, 2019. Penn State University
                    </div>

                    <div class="row q-py-md text-grey">
                      <div class="col"><span class="text-black">30.2k</span> Likes</div>
                      <div class="col text-center"><span class="text-black">11.40k</span> Supporters</div>
                      <div class="col text-right"><span class="text-black">1k</span> Comments</div>
                    </div>
                  <hr style="color: #f3f3f3; width: 100%"/>

                  <div class="row q-py-sm">
                    <div class="col-8">
                      <div class="question-text text-grey">Do you support this Campaign?</div>
                    </div>
                    <div class="col-4 row justify-end q-px-sm">
                      <q-btn-group flat>
                        <q-btn flat label="Yes"/>
                        <q-btn flat label="No"/>
                      </q-btn-group>
                    </div>
                  </div>

                  <hr style="color: #f3f3f3; width: 100%"/>

                  <p class="text-grey q-py-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
                    numquam rerum delectus commodi perferendis voluptate? <br><br>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
                    numquam rerum delectus commodi perferendis voluptate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
                    numquam rerum delectus commodi perferendis voluptate? <br><br>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
                    adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
                    numquam rerum delectus commodi perferendis voluptate? <br>
                  </p>

                  <hr style="color: #fcfcfc; width: 100%"/>

                  <Campaign_Comment></Campaign_Comment>

                  <hr style="color: #fcfcfc; width: 100%"/>

                  <Campaign_Comment_Item></Campaign_Comment_Item>

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

          <hr style="color: #fcfcfc; width: 100%; margin-top: 0px"/>

          <Campaign_Leaders title="Supporting Organizations"></Campaign_Leaders>
          <Campaign_Leaders title="Organizers"></Campaign_Leaders>
          <Campaign_Leaders title="Managers"></Campaign_Leaders>

          <Campaign_Supporters />

          <Campaign_Todos></Campaign_Todos>

          </div>

        </div>

      </div>


    </div>
  </q-page>
</template>

<script>
import wall from 'components/wall/Wall.vue'
import Campaign_Question from 'components/campaign/Campaign_Question.vue'
import Campaign_Supporters from 'components/campaign/Campaign_Supporters.vue'
import Campaign_Leaders from 'components/campaign/Campaign_Leaders.vue'
import Campaign_Todos from 'components/campaign/Campaign_Todos.vue'
import Campaign_Comment from 'components/campaign/Campaign_Comment.vue'
import Campaign_Comment_Item from 'components/campaign/Campaign_Comment_Item.vue'
import Campaign_Subheader from 'components/campaign/Campaign_Subheader.vue'

export default {
  name: 'PageIndex',
  components: {
    wall,
    Campaign_Question,
    Campaign_Supporters,
    Campaign_Leaders,
    Campaign_Todos,
    Campaign_Comment,
    Campaign_Comment_Item,
    Campaign_Subheader
    },
  data () {
    return {
      tab: 'about_campaign',
      splitterModel: 20,
      right: ''
    }
  }
}
</script>

<style>
  @media (min-width: 900px){
    .content-container{
      margin-left: 10vh;
      margin-right: 10vh;
    }
  }

  .tab-header{
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
  }

  .question-text{
    font-size: 1.3rem;
    margin-left: 2vw;
  }

  .sidebar_headings{
    font-size: 1rem;
    font-weight: 500;
    color: rgb(63, 63, 63);
  }
</style>
