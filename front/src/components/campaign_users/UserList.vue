<template>
    <div class="row q-col-gutter-sm q-py-sm q-px-sm">
        <div class="col-6 text-h5">
            Campaign Admin Team
        </div>
        <div class="col-6">
            <q-input v-model="search" label="Search Users" dense>
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
        <div class="col-12">
            <q-table
                title=""
                :data="data"
                :columns="columns"
                row-key="name"
            />
        </div>
    </div>
</template>

<script>

import CampaignUsersUserItem from 'components/campaign_users/UserItem.vue'

export default {
    name: "CampaignUsersUserList",
    components: {
        CampaignUsersUserItem
    },
    data() {
        return {
            search: '',
            columns: [
                {
                    name: 'name',
                    required: true,
                    label: 'Name',
                    align: 'left',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                { name: 'role', align: 'left', label: 'Role', field: 'role', sortable: true },
                { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
            ],
            data: [
                {
                    name: 'John Doe',
                    role: 'Campaign Admin',
                    status: 'Active'
                },
                {
                    name: 'Jane Doe',
                    role: 'Campaign Manager',
                    status: 'Active'
                },
                {
                    name: 'Anna Mull',
                    role: 'Volunteer',
                    status: 'Active'
                },
            ]
        }
    }
}
</script> 
