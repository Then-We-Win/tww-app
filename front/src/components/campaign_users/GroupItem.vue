<template>
    <q-item class="q-pa-none q-px-sm" clickable v-ripple>
        <q-item-section>{{this.name}}</q-item-section>
        <q-item-section side>{{this.count}}</q-item-section>
    </q-item>
</template>

<script>
export default {
    name: "CampaignUsersGroupItem",
    props: ['name', 'count']
}
</script> 
