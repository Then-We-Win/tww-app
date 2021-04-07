<template>
  <q-page>
    <div>
      <q-parallax :height="150">
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-parallax>
    </div>
    <div class="q-mx-xl">
      <div>
        <div class="row q-col-gutter-md">
          <div class="col-4 q-pr-xl">
            <div class="profile-image">
              <q-avatar size="150px" class="bg-white">
                <img
                  src="https://cdn.quasar.dev/img/avatar.png"
                  class="q-pa-xs"
                />
              </q-avatar>
              <div class="q-mt-md q-pl-sm">
                <div class="text-weight-bold text-h5">Jhon Wick</div>
                <div class="text-body1 q-my-sm">@jhon.wick</div>
                <div class="q-my-md text-body1">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </div>
                <div class="q-my-sm">
                  <q-icon name="fas fa-map-marker-alt" size="20px" />
                  <span class="q-ml-sm text-body1 text-weight-bold">
                    Pennsylvania
                  </span> 
                </div>
                 <div class="q-my-md">
                   <q-icon name="fas fa-globe" size="20px" />
                  <span class="text-body1 q-ml-sm text-weight-bold">
                    www.campaign.com
                  </span>
                </div> 
                <div class="q-my-sm">
                  <q-icon name="fas fa-calendar-alt" size="20px" />
                  <span class="q-ml-sm text-body1">Created January 2016</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="q-ml-xl q-my-xl">
              <div
                class="inline-block q-mr-xl text-subtitle2 text-grey text-weight-light"
              >
                <span class="q-pr-sm text-weight-bold text-body1 text-black">
                  15
                </span>
                Posts
              </div>
              <div
                class="inline-block q-mr-xl text-subtitle2 text-grey text-weight-light"
              >
                <span class="q-pr-sm text-weight-bold text-body1 text-black">
                  30.20k
                </span>
                Followers
              </div>
              <div
                class="inline-block q-mr-xl text-subtitle2 text-grey text-weight-light"
              >
                <span class="q-pr-sm text-weight-bold text-body1 text-black">
                  100
                </span>
                Following
              </div>

              <q-btn
                unelevated
                color="grey-6"
                to="/edit-account"
                class="float-right q-mr-xl"
              >
                {{ $t('pages.account.edit_profile') }}
              </q-btn>
              <div>
                <q-tabs v-model="tab" dense align="left" class="q-mt-xl">
                  <q-tab
                    name="my_campaign"
                    :label="$t('pages.account.my_campaigns')"
                    class=""
                    no-caps
                  ></q-tab>
                  <q-tab
                    name="supporting_campaigns"
                    :label="$t('pages.account.supporting_campaigns')"
                    no-caps
                  ></q-tab>
                </q-tabs>

                <q-separator></q-separator>

                <q-tab-panels v-model="tab" class="bg-transparent" animated>
                  <q-tab-panel name="my_campaign">
                    <q-list>
                      <q-item
                        class="row q-px-none q-mb-md"
                        v-for="(data, index) in tabPanelData"
                        :key="index"
                      >
                        <q-item-section avatar>
                          <img :src="data.img" width="150px" />
                        </q-item-section>

                        <q-item-section top class="q-px-md justify-between">
                          <div>
                            <q-item-label class="text-weight-bold">
                              {{ data.description }}
                            </q-item-label>
                            <q-item-label class="text-grey"
                              >{{ data.date }}
                            </q-item-label>
                          </div>
                          <q-item-label class="text-grey"> {{ $t('common.draft') }} </q-item-label>
                        </q-item-section>

                        <q-item-section side top class="q-ml-xl">
                          <q-btn
                            dense
                            flat
                            icon="fas fa-ellipsis-v"
                            size="10px"
                          >
                            <q-menu
                              transition-show="jump-down"
                              transition-hide="jump-up"
                            >
                              <q-list style="min-width: 200px">
                                <q-item clickable>
                                  <q-item-section class="text-grey-8">
                                    {{ $t('common.edit') }}
                                  </q-item-section>
                                </q-item>
                                <q-item clickable>
                                  <q-item-section class="text-grey-8">
                                    {{ $t('common.delete') }}
                                  </q-item-section>
                                </q-item>
                              </q-list>
                            </q-menu>
                          </q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-tab-panel>
                  <q-tab-panel name="supporting_campaigns">
                    <div class="text-h6">{{ $t('pages.account.supporting_campaigns') }}</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      tab: "my_campaign",
      tabPanelData: [
        {
          img: "https://cdn.quasar.dev/img/avatar.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "Sat, Aug 31 9.30AM"
        },
        {
          img: "https://cdn.quasar.dev/img/avatar.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "Sat, Aug 31 9.30AM"
        },
        {
          img: "https://cdn.quasar.dev/img/avatar.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "Sat, Aug 31 9.30AM"
        },
        {
          img: "https://cdn.quasar.dev/img/avatar.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "Sat, Aug 31 9.30AM"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.profile-image {
  position sticky
  top 0
  padding-top 64px
  margin-top -140px
}
</style>
