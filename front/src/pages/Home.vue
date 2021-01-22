<template>
<div class='text-center'>
  <!-- Top -->
    <div class='colorful header-hero bg_cover full-width row items-center justify-center'>
      <div class='column q-gutter-lg'>
        <div class='text-h4 text-bold'>{{top.header}}</div>
          <div class='text-subtitle1' style='color:#121212;'>{{top.sub}}</div>
          <div class='row justify-center q-gutter-x-md'>
          <q-btn to='/login' class='header-hero__start-btn text-white' rounded><div class='q-px-md q-py-xs'>{{top.startNow}}</div></q-btn>
          <q-btn to='/login' class='header-hero__login-btn' rounded><div class='q-px-md q-py-xs'>{{top.login}}</div></q-btn>
        </div>
      </div>
    </div>
    <!-- Middle -->
    <div class='row no-wrap items-center justify-center q-gutter-x-md'>
      <div class='col-6 q-px-lg' style='padding-top:120px;padding-bottom:120px;'>
        <div class='text-h4 text-bold q-pb-lg'>{{middle.header}}</div>
        <p class='q-pb-lg' style='color:#6c6c6c;'>{{middle.sub}}</p>
        <div class='row q-pa-lg'>
          <div v-for='mids in middle.info' :key='mids.title' class='col-6 q-px-md'>
            <div class='text-h5 q-pb-md text-bold'>{{mids.title}}</div>
              <p>{{mids.desc}}</p>
            </div>
          </div>
        </div>
      <img style='max-width:500px;' :src='middle.img' />
    </div>
    <!-- Copyright -->
    <div style='background:#eceff1;padding:60px;'>{{copyright}}</div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            top: {
                header: 'An online community for data, social and policy scientists',
                sub: 'where each can explore, learn, collaborate and publish data and analyses',
                startNow: 'Start Now', 
                login: 'Login'
            },
            middle: {
                header: 'DESIGNED TO',
                sub: 'MAKE RESEARCH WORKS OPENLY VISIBLE TO OTHER RESEARCHERS AND ENCOURAGE COLLABORATION',
                info: [
                    { title: 'Credibility', desc: 'Demonstrate credibility in an open public form.' },
                    { title: 'Transparency', desc: 'Share the standard datasets and provide ways of publishing research methods.' },
                    { title: 'Verified Resources', desc: 'nnovative social review process to create verified datasets and analyses' },
                    { title: 'Share and Fork Repositories', desc: 'Multiple supported coding languages available to all users.' }
                ],
                img: 'https://hope.monqcle.com/public/images/daps/wireframes2.jpeg'
            },
            copyright: 'Center for Public Health Law Research © 2020'
        }
    }
}
</script>

<style lang='stylus' scoped>
.colorful
    background: linear-gradient(to bottom, white, #f1fbfd, #31a5db);
.header-hero
    height 700px!important
    position relative
    z-index 9
.header-hero__start-btn
    background linear-gradient(to left, #1ba7ac, #0156c3)
.header-hero__start-btn:hover
    background linear-gradient(to left, #0156c3, #1ba7ac)
.header-hero__login-btn
    background-color white
    color rgb(58, 161, 255)
.header-hero__login-btn:hover
    color rgb(51,122,183)
.bg_cover
    background-position: center center;
    background-size: cover
    background-repeat: no-repeat
    width: 100%
    height: 100%
</style>