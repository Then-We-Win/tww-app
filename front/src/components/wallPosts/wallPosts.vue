<template>
  <div class='fit'>
    <q-item class='padding-fix'>
      <q-item-section avatar top>
        <avatar :name='posts.user' :icon='true' :size='40'/>
      </q-item-section>
      <q-item-section>
        <q-item-label><b>{{posts.user}}</b></q-item-label>
        <q-item-label
          caption
          lines='1'
        >{{posts.date}} • {{posts.time}}</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-btn icon='more_vert' flat dense />
      </q-item-section>
    </q-item>

    <!-- Text -->
    <template v-if='posts.type === "text"'>
      <div>
        <div class='text-h6 q-pb-md'>{{posts.title}}</div>
        <div>{{posts.desc}}</div>
      </div>
    </template>

    <!-- Image -->
    <template v-if='posts.type === "image"'>
      <div v-if='posts.title' class='q-pb-md'>
        <div class='text-h6 q-pb-md'>{{posts.title}}</div>
        <div>{{posts.desc}}</div>
      </div>
      <div class='fit'>

        <template v-if='posts.img.length === 1'>
          <div v-for='(items, index) in posts.img' :key='index'>
            <image-preview :title='posts.title' :desc='posts.desc' :posts="items" v-model="showModal" />
            <q-img :ratio='16/9' :src='items' class='fit cursor-pointer' @click="openModal"/>
          </div>
        </template>

        <template v-else>
          <div class='fit'>
            <q-carousel
              swipeable
              animated
              v-model="slide"
              thumbnails
              infinite
            >
              <q-carousel-slide
              class='cursor-pointer'
              v-for='(items, index) in posts.img'
              :key='index'
              :name="index"
              :img-src="items"
               @click="openModal"
              >
                <image-preview :title='posts.title' :desc='posts.desc'  :posts="items" v-model="showModal" />
              </q-carousel-slide>
            </q-carousel>
          </div>
        </template>
      </div>
    </template>

    <!-- Video -->
    <template v-if='posts.type === "video"'>
      <div v-if='posts.title' class=' q-pb-md'>
        <div class='text-h6 q-pb-md'>{{posts.title}}</div>
        <div>{{posts.desc}}</div>
      </div>
      <div class=''>
        <q-video :src='posts.video'/>
      </div>
    </template>

    <!-- Link -->
    <template v-if='posts.type === "link"'>
      <div v-if='posts.title' class=' q-pb-md'>
        <div class='text-h6 q-pb-md'>{{posts.title}}</div>
        <div>{{posts.desc}}</div>
      </div>

      <q-list bordered separator>
        <q-item clickable class='q-pa-md' :class="$q.dark.isActive ? 'bg-dark' : 'item-bg-color'" ref='Link' @click='toLink(posts.link.url)'>
        <q-item-section avatar>
          <q-icon name='link'/>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{posts.link.title}}</q-item-label>
          <q-item-label caption lines="1">{{posts.link.desc}}</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>
    </template>

    <!-- Audio -->
    <template v-if='posts.type === "audio"'>
      <div v-if='posts.title' class=' q-pb-md'>
        <div class='text-h6 q-pb-md'>{{posts.title}}</div>
        <div>{{posts.desc}}</div>
      </div>
      <div class=''>
        <q-media-player
          type='audio'
          dense
          :source='posts.audio'
        />
      </div>
    </template>
    <div class='q-pt-md row cursor-pointer' @click='toPost(posts)'>
      <div class='text-grey-6 q-pr-xl'><b>{{posts.likes}}</b> Likes</div>
      <div class='text-grey-6'><b>{{posts.comments}}</b> Comments</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'posts' ],
  data () {
    return {
      slide: 0,
      showModal: false
    }
  },
  methods: {
    toLink (e) {
      window.open(e, '_blank')
    },
    openModal () {
      this.showModal = !this.showModal
    },
    toPost (e) {
      if (!e) {
        console.log('No items')
      } else {
        this.$router.push({ path: `/post/${e.id}` })
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.q-item__section--side
  padding-right 0px
.q-video
  height 500px
.item-bg-color
  background-color #f2f2f2
/deep/.padding-fix
  padding-left 0px
  padding-right 0px
</style>
