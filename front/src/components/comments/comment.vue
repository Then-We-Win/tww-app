<template>
  <div>
    <q-item class='padding-fix'>
      <q-item-section avatar top>
        <avatar :name='comment.user' :icon='true' :size='40' />
      </q-item-section>
      <q-item-section>
        <q-item-label class='ellipis row q-gutter-xs'>
          <b>{{comment.user}}</b>
          <div class='text-grey-6'>{{ '@' + comment.handle}}</div>
        </q-item-label>
        <q-item-label caption lines='1'>{{comment.date}} • {{comment.time}}</q-item-label>
        <q-item-label caption class='q-pb-sm q-pt-xs'>{{comment.text}}</q-item-label>
        <q-item-label lines='1'>
          <span class='cursor-pointer text-weight-bold'>{{$t('app.buttons.reply')}}</span>
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-btn icon='more_vert' flat dense />
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang='stylus' scoped>
/deep/.padding-fix {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
