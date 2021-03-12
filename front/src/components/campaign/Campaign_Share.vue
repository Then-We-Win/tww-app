<template>
    <div>
        <div class="q-pa-md q-gutter-sm">
              <q-btn 
                color="cyan" 
                :icon="mdiTwitter" 
                />
              <q-btn 
                color="blue" 
                :icon="mdiFacebook" 
                />

              <q-btn  
                color="primary" 
                :icon="mdiLinkedin" 
                />
              <q-btn 
                color="grey" 
                :icon="mdiLinkVariant" 
                />
        </div>
    </div>
</template>

<script>
import { mdiTwitter } from '@quasar/extras/mdi-v5'
import { mdiFacebook } from '@quasar/extras/mdi-v5'
import { mdiLinkedin } from '@quasar/extras/mdi-v5'
import { mdiLinkVariant } from '@quasar/extras/mdi-v5'
import { openURL } from 'quasar'
import { copyToClipboard } from 'quasar'

export default {
    created() {
        this.mdiTwitter = mdiTwitter;
        this.mdiFacebook = mdiFacebook;
        this.mdiLinkedin = mdiLinkedin;
        this.mdiLinkVariant = mdiLinkVariant;
    },
    methods: {
        followLink: function(url){
            openURL(url)
            .then(()=>{console.log('Success!')})
            .catch(()=>{console.log('ERROR: '+url+' cannot be found')})
        },
        copy: function(){
            copyToClipboard('some text')
            .then(() => {
                alert('Link copied to clipboard')
            })
            .catch(() => {
                alert('ERROR: Link cannot be copied to clipboard')
            })
        }
    }
}
</script>
