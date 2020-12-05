<template>
    <q-list>
        <campaign-users-group-item
            v-for="(name, index) in groups"
            :key="index"
            :name="name"
            :count="group_counts[index]"
        />
    </q-list>
</template>

<script>

import CampaignUsersGroupItem from 'components/campaign_users/GroupItem.vue'

export default {
    name: "CampaignUsersGroupList",
    components: {
        CampaignUsersGroupItem
    },
    data() {
        return {
            groups: ['Campaign Admin', 'Campaign Manager', 'Supporting Organisation', 'Trusted Volunteer', 'Volunteer', 'All Users'],
            group_counts: [3, 12, 24, 30, 60, 10200]
        }
    }
}
</script> 
