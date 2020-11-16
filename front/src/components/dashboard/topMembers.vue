<template>
      <q-card class="q-mt-sm">
        <q-card-section class="text-h6 q-pb-none">
          <q-item>
            <q-item-section avatar class="">
              <q-icon color="blue" name="fa fa-user-astronaut" size="44px"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <div class="text-h6">Top Members</div>
              </q-item-label>
              <q-item-label caption class="text-black">
                A breakdown of the top members across all your campaigns.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pa-none q-ma-none">
          <q-table class="no-shadow no-border" :data="sales_data" :columns="sales_column" hide-bottom>
            <template v-slot:body-cell-Products="props">
              <q-td :props="props">
                <q-item>
                  <q-item-section>
                    <q-avatar square>
                      <img :src="props.row.prod_img">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ props.row.code }}</q-item-label>
                    <q-item-label>{{ props.row.product_name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-Name="props">
              <q-td :props="props">
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="props.row.avatar">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ props.row.name }}</q-item-label>
                    <q-item-label caption class="">Joined date: <br/>{{ props.row.date }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-Status="props">
              <q-td :props="props" class="text-left">
                <q-chip class="text-white text-capitalize" :label="props.row.status"
                        :color="getChipColor(props.row.status)"
                ></q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-Stock="props">
              <q-td :props="props">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <span class="text-blue">
                        <q-icon name="bug_report" color="blue" size="20px" v-if="props.row.type=='error'"></q-icon>
                        <q-icon name="settings" color="blue" size="20px" v-if="props.row.type=='info'"></q-icon>
                        <q-icon name="flag" color="blue" size="20px" v-if="props.row.type=='success'"></q-icon>
                        <q-icon name="fireplace" color="blue" size="20px" v-if="props.row.type=='warning'"></q-icon>
                        {{ props.row.stock }}
                      </span>
                      <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="positive"
                              v-if="props.row.type=='success'"></q-chip>
                      <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="info"
                              v-if="props.row.type=='info'"></q-chip>
                      <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="warning"
                              v-if="props.row.type=='warning'"></q-chip>
                      <q-chip class="float-right text-white text-capitalize" :label="props.row.type" color="negative"
                              v-if="props.row.type=='error'"></q-chip>
                    </q-item-label>
                    <q-item-label caption class="">
                      <q-linear-progress dark :color="getColor(props.row.Progress)" :value="props.row.Progress/100"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  components: {
    IEcharts
  },
  name: "DashboardTopMembers",
  props: ['settings'],
  // TODO: Step 1: Convert the above demo data in the template to data () below.
  // TODO: Step 2: Convert the above template to a v-for loop.
  // TODO: Step 3: Cut the data () fields and place them in user.data.topMembers.
  // TODO: Step 4: Change the template to to take data from the settings prop above.
  // TODO: Step 5: Pass the prop "settings" from user.data.topMembers in the src/pages/Dashboard.vue,
  computed: {
    getSalesOptions() {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {// Coordinate axis indicator, coordinate axis trigger is valid
                    type: 'shadow' // The default is a straight line, optional:'line' |'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                top: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: 'Tweets',
                    type: 'bar',
                    data: [40, 45, 27, 50, 32, 50, 70, 30, 30, 40, 67, 29],
                    color: '#546bfa'
                },
                {
                    name: 'Posts',
                    type: 'bar',
                    data: [124, 100, 20, 120, 117, 70, 110, 90, 50, 90, 20, 50],
                    color: '#3a9688'
                },
                {
                    name: 'Tasks',
                    type: 'bar',
                    data: [17, 2, 0, 29, 20, 10, 23, 0, 8, 20, 11, 30],
                    color: '#02a9f4'
                },
                {
                    name: 'Members',
                    type: 'bar',
                    data: [20, 100, 80, 14, 90, 86, 100, 70, 120, 50, 30, 60],
                    color: '#f88c2b'
                },
            ]
        }
    },
    getPieOptions() {
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                bottom: 10,
                left: 'center',
                data: ['Tweets', 'Posts', 'Tasks', 'Members']
            },
            series: [
                {
                    name: 'Today\'s totals',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 335, name: 'Tweets',
                            itemStyle: {
                                color: '#546bfa'
                            }
                        },
                        {
                            value: 310, name: 'Posts',
                            itemStyle: {
                                color: '#3a9688'
                            }
                        },
                        {
                            value: 234, name: 'Tasks',
                            itemStyle: {
                                color: '#02a9f4'
                            }
                        },
                        {
                            value: 135, name: 'Members',
                            itemStyle: {
                                color: '#f88c2b'
                            }
                        },
                    ]
                }
            ]
        }
    },
  },
  data () {
    return {
      sales_data: [
        {
            name: 'Super Volunteer',
            Progress: 70,
            status: 'Vacation',
            stock: '14 / 30',
            date: '23 Oct 2018',
            avatar: 'https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4',
            product_name: 'Truth in Broadcasting',
            total: '303,344',
            code: 'KDH8WK',
            prod_img: require('src/assets/bag.jpg')

        },
        {
            name: 'Mayank Patel',
            Progress: 60,
            status: 'Online',
            date: '11 Nov 2018',
            stock: '25 / 70',
            avatar: 'https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4',
            product_name: 'End Corruption in NJ District 45',
            total: '23,100',
            code: 'AA43OX',
            prod_img: require('src/assets/laptop.jpg')
        },
        {
            name: 'Mayur Patel',
            Progress: 30,
            status: 'Away',
            stock: '35 / 50',
            avatar: 'https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4',
            product_name: 'Kony 2021',
            total: '340',
            date: '19 Sept 2020',
            code: 'J2K9QQ',
            prod_img: require('src/assets/jam.jpg')
        },
        {
            name: 'Jeff Galbraith',
            Progress: 100,
            status: 'Logged Out',
            stock: '18 / 33',
            avatar: 'https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4',
            product_name: 'Federal Child Protection Changes',
            total: '224',
            date: '19 Sept 2020',
            code: 'JKL345',
            prod_img: require('src/assets/action.jpg')
        }
    ],
    sales_column: [
        {
            name: 'Products',
            label: 'Campaigns',
            field: 'Products',
            sortable: true,
            align: 'left',
        },
        {name: 'Name', label: 'Member', field: 'name', sortable: true, align: 'left'},
        {
            name: 'Total',
            label: 'Total',
            field: 'total',
            sortable: true,
            align: 'right',
            classes: 'text-bold'
        },
        {
            name: 'Status',
            label: 'Status',
            field: 'status',
            sortable: true,
            align: 'left',
            classes: 'text-bold'
        },
        {name: 'Stock', label: 'Tasks', field: 'task', sortable: true, align: 'left'},
    ],

            }
        },
        methods: {
            getColor(val) {
                if (val > 70 && val <= 100) {
                    return 'green'
                } else if (val > 50 && val <= 70) {
                    return 'blue'
                }
                return 'red'
            },
            getChipColor(status) {
                if (status == 'Vacation') {
                    return 'negative'
                } else if (status == 'Online') {
                    return 'positive'
                } else if (status == 'Away') {
                    return 'warning'
                } else if (status == 'Logged Out') {
                    return 'info'
                } else {
                    return 'dark'
                }
            }
        }
}
</script>
