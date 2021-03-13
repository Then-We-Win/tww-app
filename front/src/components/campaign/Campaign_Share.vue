<template>
    <div>
        <div class="q-pa-md">
            <a href="https://twitter.com" target="_blank">
              <q-btn 
                color="cyan" 
                :icon="mdiTwitter" 
                />
            </a>
            <a href="https://facebook.com" target="_blank">
              <q-btn 
                color="blue" 
                :icon="mdiFacebook" 
                />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <q-btn  
                color="primary" 
                :icon="mdiLinkedin" 
                />
            </a>
              <q-btn
                color="grey" 
                :icon="mdiLinkVariant"
                @click="copyLink()" 
                />
            
        </div>
    </div>
</template>

<script>
import { mdiTwitter } from '@quasar/extras/mdi-v5'
import { mdiFacebook } from '@quasar/extras/mdi-v5'
import { mdiLinkedin } from '@quasar/extras/mdi-v5'
import { mdiLinkVariant } from '@quasar/extras/mdi-v5'
import { copyToClipboard } from 'quasar'

export default {
    created() {
        this.mdiTwitter = mdiTwitter;
        this.mdiFacebook = mdiFacebook;
        this.mdiLinkedin = mdiLinkedin;
        this.mdiLinkVariant = mdiLinkVariant;
    },
    methods: {
        copyLink: function(){
            copyToClipboard('https://app.thenwewin.org')
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