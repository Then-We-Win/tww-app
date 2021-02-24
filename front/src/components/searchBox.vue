<template>
  <div class="bg-grey-3 z-max absolute-full">
    <div class="column no-wrap fit">
      <div class="row no-wrap q-pb-lg">
        <q-input
          class="search-bar__input q-pt-xl"
          rounded
          borderless
          dense
          v-model="searchInput"
          placeholder="Search..."
        >
          <template v-slot:append>
            <q-icon
              style="color: #011924"
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
        <div class="q-pr-md q-pt-md">
          <q-icon
            name="clear"
            class="search-bar__close"
            color="grey-8"
            :size="$q.screen.gt.xs ? 'lg' : 'sm'"
            @click="$emit('revert')"
          />
        </div>
      </div>
      <div
        class="q-mt-sm fit row scroll justify-center relative-position"
        :class="$q.screen.gt.xs ? 'q-gutter-lg' : ''"
        style="overflow-x:hidden;margin:0 auto;"
      >
        <div
          class="col-lg-3 col-md-3 col-sm-5 col-xs-11"
          v-for="(row, index) in rows"
          :key="index"
        >
          <div class="q-mb-md text-h6">
            {{ row.name }}
          </div>

          <q-card
            v-for="(item, i) in row.info"
            :key="i"
            class="q-mb-md"
          >
            <q-item
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="item.image">
                </q-avatar>
              </q-item-section>

              <q-item-section>{{ item.text }}</q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      searchInput: '',
      rows: [
        {
          name: 'Content',
          info: [
            {
              image: 'https://cdn.quasar.dev/img/avatar5.jpg',
              text: 'Rachel Smith'
            },
            {
              image: 'https://cdn.quasar.dev/img/boy-avatar.png',
              text: 'Peter Finlan'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar6.jpg',
              text: 'Ideas for Hovering effects'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar3.jpg',
              text: 'Ideas for Hovering effects'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar4.jpg',
              text: 'Ideas for Hovering effects'
            }
          ]
        },
        {
          name: 'Meta content',
          info: [
            {
              image: 'https://cdn.quasar.dev/img/avatar.png',
              text: 'Page preloading effect'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar2.jpg',
              text: 'Ideas for Hovering effects'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar4.jpg',
              text: 'Ideas for Hovering effects'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar1.jpg',
              text: 'Ideas for Hovering effects'
            }
          ]
        },
        {
          name: 'Other',
          info: [
            {
              image: 'https://cdn.quasar.dev/img/boy-avatar.png',
              text: 'Tooltip style'
            },
            {
              image: 'https://cdn.quasar.dev/img/avatar.png',
              text: 'Tab style'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/.q-field--dense .q-field__control {
  height: 100%;
}

/deep/.q-field--dense .q-field__marginal {
  height: 100%;
  font-size: 1.2em;
}

.search-bar__input {
  width: 70% !important;
  font-size: 5.5em;
  margin: 0 auto;

  /deep/.q-placeholder {
    color: #ec5a62;

    &::placeholder {
      color: $grey-8;
      opacity: 0.5;
    }
  }
}

.search-bar__close {
  opacity: 0.6;
  cursor: pointer;
  transition: 0.25s all ease-in-out;

  &:hover {
    opacity: 1;
  }
}

@media only screen and (max-width: 720px) {
  .search-bar__input {
    font-size: 3em;
  }
}
</style>
