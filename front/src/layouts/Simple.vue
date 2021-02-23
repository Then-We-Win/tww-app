<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1">
    <!-- The header -->
    <q-header class="bg-white text-grey-8">
      <q-toolbar class="GNL__toolbar">
        <!-- Menu button -->
        <q-btn v-if="user.loggedIn" flat dense round @click="miniState = !miniState" aria-label="Menu" icon="menu" class="q-mr-sm" />

        <!-- Logo -->
        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img :src="settings.logo.wide" @click="$bus.emit('route', '')">
        </q-toolbar-title>

        <q-space/>
        <q-btn
          icon="search"
          flat
          round
          v-morph:btn:search:500.resize="morphSearch"
          @click="morphSearch = 'big'"
        />

        <!-- Right buttons -->
        <div v-if="user.loggedIn" class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="user.conversations" round dense flat color="grey-8" icon="message" @click="$bus.emit('route', 'conversations')">
            <q-badge color="red" text-color="white" floating>{{user.conversations.length}}</q-badge>
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn v-if="user.updates" round dense flat color="grey-8" icon="flag" @click="$bus.emit('route', 'updates')">
            <q-badge color="red" text-color="white" floating>{{user.updates.length}}</q-badge>
            <q-tooltip>Updates</q-tooltip>
          </q-btn>
          <q-btn round flat @click="$bus.emit('route', 'account')">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
        <div v-else>
          <q-btn round dense flat color="grey-8" icon="login" @click="$bus.emit('route', 'login')">
            <q-tooltip>Login</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Menu -->
    <q-drawer v-if="user.loggedIn" v-model="leftDrawerOpen" show-if-above bordered :mini="miniState" content-class="bg-white" :width="280">
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <!-- Menu items -->
          <div v-for="(link, index) in settings.menu.links" :key="index">
            <q-separator v-if="link.type === 'separator'" inset class="q-my-sm"/>
            <q-item v-else-if="link.type === 'button'">
              <q-btn :rounded="!miniState" :round="miniState" :icon="link.icon" color="link.color" class="text-grey-8" :label="miniState?'':link.text">
              </q-btn>
            </q-item>
            <q-item v-else class="GNL__drawer-item" v-ripple clickable @click="$bus.emit(link.action, link.payload)">
              <q-item-section avatar>
                <q-icon :name="link.icon" :class="link.color"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!-- Search box -->
    <search-box
      v-morph:big:search:500.tween="morphSearch"
      @revert="morphSearch = 'btn'"
    />
    <!-- Route -->
    <q-page-container>
      <router-view/>
    </q-page-container>

    <!-- FAB -->
    <q-page-sticky v-if="$q.screen.lt.sm" position="bottom-right" :offset="[10,10]">
      <q-btn round icon="add" direction="up" color="accent">
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import {fasGlobeAmericas, fasFlask} from '@quasar/extras/fontawesome-v5'
import searchBox from '../components/searchBox'
export default {
  name: 'LayoutSimple',
  components: {
    searchBox
  },
  mounted () {
    console.log('layout')
  },

  data() {
    return {
      settings: this.$store.state.app.settings,
      user: this.$store.state.user,
        leftDrawerOpen: false,
        miniState: false,
        search: '',
        morphSearch: 'btn'
    }
  },

  methods: {
    openSearch(){
      var searchBar = document.getElementsByClassName("GNL__toolbar-input");
      searchBar[0].classList.add("opened");
    }
  }
}
</script>

<style>
  .GNL__toolbar {
    height: 64px;
  }

  .GNL__toolbar-input {
    width: 55%;
  }

  .GNL__drawer-item {
    line-height: 24px;
    border-radius: 0 24px 24px 0;
    margin-right: 12px;
  }

  .GNL__drawer-item .q-item__section--avatar .q-icon {
    color: #5f6368;
  }

  .GNL__drawer-item .q-item__label {
    color: #3c4043;
    letter-spacing: .01785714em;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
</style>
