<template>
  <div
    class="search-bar"
    :class="{ 'open': search }"
  >
    <div
      class="search-bar-form"
      @click="getOpen()"
    >
      <q-input
        class="GNL__toolbar-input search-bar-input cursor-pointer"
        rounded
        outlined
        dense
        v-model="searchInput"
        color="bg-grey-7"
        :placeholder="$t('search.bar.text')"
      >
        <template v-slot:prepend>
          <q-icon
            v-if="searchInput === ''"
            name="search"
          />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="searchInput = ''"
          />
        </template>
      </q-input>
    </div>

    <span
      class="search-bar-close"
      @click="closeForm()"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      searchInput: ''
    }
  },
  methods: {
    getOpen: function () {
      this.search = 'open'
    },
    closeForm: function () {
      this.search = ''
      this.searchInput = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar {
  width: 35px;
  min-height: 35px;
  position: absolute;
  z-index: 10000;
  top: 14px;
  right: 148px;
  transform-origin: 100% 0;
  transition-property: min-height, width, top, right, background;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

  .q-icon {
    margin-left: -5px;
    margin-bottom: 2px;
  }

  /deep/.q-field--outlined .q-field__control:before {
    border: none;
  }

  &.open {
    width: 100%;
    background: #f1f1f1;
    min-height: 100vh;
    top: 0px;
    right: 0px;

    .search-bar-form {
      width: 80%;
      height: 160px;
      transform: translate3d(0, 3em, 0);
    }

    .search-bar-close {
      opacity: 1;
      pointer-events: auto;
      transform: scale3d(1, 1, 1);
      transition: opacity 0.3s, transform 0.3s;
      transition-delay: 0.5s;
    }

    /deep/.q-field--outlined .q-field__control:before {
      border: 1px solid rgba(0, 0, 0, 0.24);
    }
  }
}

.search-bar-form {
  width: 100%;
  height: 35px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  transition-property: width, height, transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

  &:hover {
    background: rgb(240, 240, 240);
  }
}

.search-bar-close {
  width: 27px;
  height: 27px;
  position: absolute;
  right: 1em;
  top: 1em;
  overflow: hidden;
  text-indent: 100%;
  cursor: pointer;
  pointer-events: none;
  opacity: 0;
  transform: scale3d(0, 0, 1);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 50%;
    border-radius: 3px;
    opacity: 0.2;
    background: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before, &::after {
      opacity: 1;
    }
  }
}
</style>
