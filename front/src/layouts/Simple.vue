<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1">
    <!-- The header -->
    <q-header class="bg-white text-white">
      <q-toolbar class="GNL__toolbar bg-primary">
        <!-- Menu button -->
        <q-btn v-if="user.loggedIn" flat dense round @click="miniState = !miniState" aria-label="Menu" icon="menu" class="q-mr-sm" />

        <!-- Logo -->
        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center content-center no-wrap">
          <img class="q-ma-md" style="width: 100px" :src="settings.logo.wide" @click="$bus.emit('route', '')">
          <div class="text-h4 text-weight-light">|</div>
          <div class="text-caption q-pl-md" style="line-height: 15px;">Health Outcomes and <br/> Policy Evaluation Platform</div>
        </q-toolbar-title>

        <!-- Right buttons -->
        <q-btn flat color="white" label="Home" @click="$bus.emit('route', '')" />
        <div v-if="user.loggedIn" class="q-gutter-sm row items-center no-wrap">
          <q-btn flat color="white" label="Datasets" />
          <q-btn flat color="white" label="Analyses" />
        </div>
        <q-btn flat color="white" label="Terms & privacy" @click="$bus.emit('route', 'terms')" />
        <q-btn flat color="white" label="Contact us" @click="$bus.emit('route', 'contact')" />

        <q-space />

        <div v-if="user.loggedIn"> 
          <q-btn round flat @click="$bus.emit('route', 'account')">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
        <div v-else>
          <q-btn flat color="white" label="Login" @click="$bus.emit('route', 'login')" />
          <q-btn flat color="white" label="Create an account" @click="$bus.emit('route', 'login')" />
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

export default {
  name: 'LayoutSimple',
  mounted () {
    console.log('layout')
  },
  data() {
    return {
      settings: this.$store.state.app.settings,
      user: this.$store.state.user,
        leftDrawerOpen: false,
        miniState: false,
        search: ''
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
