<template>
  <q-page class="q-pa-sm">
    <div v-if="user.loggedIn">
      <dashboard-stats :stats="stats"/>
      <dashboard-breakdown />
      <dashboard-top-members />

      <div class="row q-col-gutter-sm  q-py-sm">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
            >
              <q-tab name="contact" :class="tab=='contact'?'text-blue':''" icon="contacts" label="Contact"/>
              <q-tab name="message" :class="tab=='message'?'text-blue':''" icon="comment" label="Message">
                <q-badge color="red" floating>{{messages.length}}</q-badge>
              </q-tab>
              <q-tab name="notification" :class="tab=='notification'?'text-blue':''" icon="notifications"
                    label="Notification">
                <q-badge color="red" floating>4</q-badge>
              </q-tab>
            </q-tabs>

            <q-separator/>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="contact" class="q-pa-sm">
                <q-list class="rounded-borders" separator>

                  <q-item
                    v-for="(contact, index) in contacts"
                    :key="index"
                  >
                    <q-item-section avatar>
                      <q-avatar>
                        <img :src="contact.avatar">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="1">{{contact.name}}</q-item-label>
                      <q-item-label caption lines="2">
                        <span class="text-weight-bold">{{contact.position}}</span>
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div class="text-grey-8 q-gutter-xs">
                        <q-btn class="gt-xs" size="md" flat color="blue" dense round icon="comment"/>
                        <q-btn class="gt-xs" size="md" flat color="red" dense round icon="email"/>
                        <q-btn size="md" flat dense round color="green" icon="phone"/>
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>

              </q-tab-panel>

              <q-tab-panel name="message" class="q-pa-sm">
                <q-item v-for="msg in messages" :key="msg.id" clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="msg.avatar">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ msg.name }}</q-item-label>
                    <q-item-label caption lines="1">{{ msg.msg }}</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    {{msg.time}}
                  </q-item-section>
                </q-item>
              </q-tab-panel>

              <q-tab-panel name="notification" class="q-pa-sm">
                <q-list>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="info"/>
                    </q-item-section>

                    <q-item-section>Avatar-type icon</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="report"/>
                    </q-item-section>

                    <q-item-section>Avatar-type icon</q-item-section>
                  </q-item>
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="remove"/>
                    </q-item-section>

                    <q-item-section>Avatar-type icon</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar color="teal" text-color="white" icon="remove_circle_outline"/>
                    </q-item-section>

                    <q-item-section>Avatar-type icon</q-item-section>
                  </q-item>

                </q-list>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>


        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-carousel
            animated
            v-model="slide"
            infinite height="360px"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
          >
            <q-carousel-slide :name="1" class="q-pa-none">
              <q-scroll-area class="fit">
                <q-card class="my-card">
                  <img :src="require('src/assets/coding.jpeg')">

                  <q-card-section>
                    <div class="text-h6">Work with something that you like, like…</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </q-card-section>

                  <q-card-actions align="left">
                    <q-btn label="Share" dense color="primary" text-color="blue" outline/>
                    <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
                  </q-card-actions>
                </q-card>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="q-pa-none">
              <q-scroll-area class="fit">
                <q-card class="my-card">
                  <img :src="require('src/assets/lookgood.jpeg')">

                  <q-card-section>
                    <div class="text-h6">Keep your schedule in the right time</div>
                    <div class="text-subtitle2">
                      Aenean facilisis vitae purus facilisis semper.
                    </div>
                  </q-card-section>

                  <q-card-actions align="left">
                    <q-btn label="Share" dense color="primary" text-color="blue" outline/>
                    <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
                  </q-card-actions>
                </q-card>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="q-pa-none">
              <q-scroll-area class="fit">
                <q-card class="my-card">
                  <img :src="require('src/assets/trawel.jpeg')">

                  <q-card-section>
                    <div class="text-h6">Travel everytime that you have a chance</div>
                    <div class="text-subtitle2">Curabitur egestas consequat lorem, vel fermentum augue porta id.
                    </div>
                  </q-card-section>

                  <q-card-actions align="left">
                    <q-btn label="Share" dense color="primary" text-color="blue" outline/>
                    <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
                  </q-card-actions>
                </q-card>
              </q-scroll-area>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div v-else>
      <dashboard-public />
    </div>
  </q-page>
</template>

<script>
import DashboardStats from 'components/dashboard/stats.vue'
import DashboardBreakdown from 'components/dashboard/breakdown.vue'
import DashboardTopMembers from 'src/components/dashboard/topMembers.vue'
import DashboardPublic from 'src/components/dashboard/public.vue'

/**
 Generator for the contacts (https://next.json-generator.com/41x1UHAKY)
[
  {
    'repeat(5, 10)': {
      name: '{{firstName()}}',
      position: '{{company()}}',
      avatar: 'http://placehold.it/32x32'
    }
  }
]
 */
export default {
  name: "Dashboard",
  components: {
    DashboardStats,
    DashboardBreakdown,
    DashboardTopMembers,
    DashboardPublic
  },
  data() {
    return {
      stats: [
        {
          value: '$20k',
          text: 'Monthly Donations',
          color: '#f88c2b',
          icon: 'fas fa-dollar-sign'
        },
        {
          value: '20',
          text: 'Weekly Tasks',
          color: '#3a9688',
          icon: 'fas fa-chart-bar'
        },
        {
          value: '321',
          text: 'New Members',
          color: '#7cb342',
          icon: 'fas fa-chart-line'
        },
        {
          value: '82',
          text: 'Active Members',
          color: '#f88c2b',
          icon: 'person'
        },
      ],
      settings: this.$store.state.app.settings,
      user: this.$store.state.user,
      // TODO: Break out the remaining template above into components, using the src/components/dashboard components as a guide.
      // TODO: You will need to move the respective data items below...
      slide: 1,
      tab: 'contact',
      messages: [
        {
          id: 5,
          name: 'Something else',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
          time: '10:42 PM'
        }, {
          id: 6,
          name: 'Winfield Stapforth',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          time: '11:17 AM'
        }, {
          id: 1,
          name: 'Boy',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          time: '5:17 AM'
        }, {
          id: 2,
          name: 'Jeff Galbraith',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          time: '5:17 AM'
        }, {
          id: 3,
          name: 'Razvan Stoenescu',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          time: '5:17 AM'
        }
      ],
    contacts: [
  {
    "name": "Lakisha",
    "position": "Zaggles",
    "avatar": "http://placehold.it/32x32"
  },
  {
    "name": "Barnett",
    "position": "Pyrami",
    "avatar": "http://placehold.it/32x32"
  },
  {
    "name": "Riggs",
    "position": "Geeknet",
    "avatar": "http://placehold.it/32x32"
  },
  {
    "name": "Suzette",
    "position": "Kiosk",
    "avatar": "http://placehold.it/32x32"
  },
  {
    "name": "Stefanie",
    "position": "Digigene",
    "avatar": "http://placehold.it/32x32"
  }
]
    }
  }
}
</script>

<style scoped>

</style>
