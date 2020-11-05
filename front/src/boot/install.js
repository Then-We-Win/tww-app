import Vue from 'vue'
import entity from '../components/entity/entity.vue'
import avatar from '../components/avatar/avatar.vue'
import avatarMini from '../components/avatarMini/avatarMini.vue'
import tabs from '../components/tabs/tabs.vue'

// campaign
import campaign from '../components/campaign/campaign.vue'
import campaignSlider from '../components/campaignTab/campaignSlider.vue'
import campaignComp from '../components/campaignTab/campaignCompact.vue'
import campaignPreview from '../components/campaignTab/campaignPreview.vue'
import volunteerComp from '../components/campaignTab/volunteerComp'
import aboutCampaign from '../components/aboutCampaignTab/aboutCampaign'
import campaignFull from '../components/campaignTab/campaignFull'
import campaignList from '../components/campaignTab/campaignList'

// user
import userMenu from '../components/userMenu/userMenu.vue'
import userList from '../components/userList/userList.vue'

// wall
import wallPosts from '../components/wallPosts/wallPosts.vue'
import wallList from '../components/wallPosts/wallList.vue'
import wallTab from '../components/wallPosts/wallTab.vue'
import imagePreview from '../components/wallPosts/imagePreview.vue'

// comments
import comment from '../components/comments/comment.vue'
import commentList from '../components/comments/commentList.vue'

Vue.component('entity', entity)
Vue.component('avatar', avatar)
Vue.component('avatar-mini', avatarMini)
Vue.component('tabs', tabs)
Vue.component('campaign', campaign)
Vue.component('campaign-slider', campaignSlider)
Vue.component('campaign-comp', campaignComp)
Vue.component('campaign-preview', campaignPreview)
Vue.component('volunteerComp', volunteerComp)
Vue.component('campaignFull', campaignFull)
Vue.component('campaignList', campaignList)
Vue.component('about-campaign', aboutCampaign)
Vue.component('user-menu', userMenu)
Vue.component('wall-posts', wallPosts)
Vue.component('wall-list', wallList)
Vue.component('wall-tab', wallTab)
Vue.component('imagePreview', imagePreview)
Vue.component('comment', comment)
Vue.component('comment-list', commentList)
Vue.component('user-list', userList)

console.log('Environment:', process.env)
