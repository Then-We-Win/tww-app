<template>
  <div
    class="search-bar"
    :class="{ 'open': test1 }"
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
        v-model="newAsk"
        color="bg-grey-7"
        @keyup.enter="getAsk()"
      >
        <template v-slot:prepend>
          <q-icon
            v-if="newAsk === ''"
            name="search"
          />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="newAsk = ''"
          />
        </template>
      </q-input>
      <div class="result-wrap" v-show="askChecked">
         <div class="result" v-for="result in askRes" :key="result.id" transition="expand">
           <h4><a :href="result.frontend_pdf_url" target="_blank">{{ result.name_abbreviation }}</a></h4>
           <p>{{ result.decision_date }}</p>
         </div>
       </div>
    </div>

    <span
      class="search-bar-close"
      @click="closeForm()"
    />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
        test1: '',
        askRes: null,
        newAsk: '',
        newUrl: '',
        ask: null,
        askChecked: false
    }
  },
  ready: function () {
      // this.getLink()
  },
  methods: {
      getOpen: function () {
        this.test1 = 'open'
      },
      closeForm: function () {
        this.test1 = ''
        this.newAsk = ''
        this.askRes = ''
        this.newUrl = ''
        this.askChecked = false
      },
  getUrl: function() {
    var apiUrl = "https://api.case.law/v1/cases/?page_size=10&search="+this.newAsk.replace(' ','+')+"&ordering=-decision_date";
    this.newUrl = apiUrl
  },
  getAsk: function () {
        this.getUrl()
        axios.get(this.newUrl).then((response) => {
          this.askRes = response.data.results
          console.log("askRes = " + this.askRes)
          this.askChecked = true
        }, (response) => {
          // if api not working
          console.log(response.data)
        })
     }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar {
  font-family: 'Poiret One', 'Roboto', 'Helvetica';
  overflow-x: hidden;
  overflow-y: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
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
    overflow-y: scroll;

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
