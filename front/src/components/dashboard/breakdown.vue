<template>
  <q-card class="q-mt-sm">
    <q-card-section class="text-h6 q-pb-none">
      <q-item>
        <q-item-section avatar class="">
          <q-icon color="blue" name="fas fa-chart-line" size="44px"/>
        </q-item-section>

        <q-item-section>
          <div class="text-h4">Truth In Broadcasting</div>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="row">
      <div class="col-lg-7 col-sm-12 col-xs-12 col-md-7">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="blue" text-color="white" class="q-pl-sm" icon="bluetooth"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-blue text-bold">4321</q-item-label>
                <q-item-label caption>Tweets</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="grey-8" text-color="white" class="q-pl-sm" icon="bluetooth"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-grey-8 text-bold">9876</q-item-label>
                <q-item-label caption>Posts</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="green-6" text-color="white" class="q-pl-sm" icon="bluetooth"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-green-6 text-bold">345</q-item-label>
                <q-item-label caption>Tasks</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="orange-8" text-color="white" class="q-pl-sm" icon="bluetooth"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-orange-8 text-bold">1021</q-item-label>
                <q-item-label caption>Members</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div>
          <IEcharts style="height: 250px" :option="getSalesOptions" :resizable="true"/>
        </div>
      </div>
      <div class="col-lg-5 col-sm-12 col-xs-12 col-md-5">
        <q-item>
          <q-item-section avatar class="">
            <q-icon color="blue" name="fas fa-gift" class="q-pl-md" size="24px"/>
          </q-item-section>

          <q-item-section>
            <div class="text-h6">Today's Breakdown</div>
          </q-item-section>
        </q-item>
        <div>
          <IEcharts style="height: 250px" :option="getPieOptions" :resizable="true"/>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
  components: {
    IEcharts
  },
  name: "DashboardStats",
  props: ['settings'],
  // TODO: Step 1: Convert the above demo data in the template to data () below.
  // TODO: Step 2: Convert the above template to a v-for loop.
  // TODO: Step 3: Cut the data () fields and place them in user.data.breakdown.
  // TODO: Step 4: Change the template to to take data from the settings prop above.
  // TODO: Step 5: Pass the prop "settings" from user.data.breakdown in the src/pages/Dashboard.vue,
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

}
</script>
