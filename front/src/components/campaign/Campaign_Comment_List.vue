<template>
  <div class="">
      <div class="row q-pa-sm">
        <div class="col-2 col-md-1">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
        <div class="col-10 col-md-11 q-px-md">
          <p>{{ name }}<br> <span class="text-grey">{{ username }}</span></p>
          <p class="text-grey">{{ time }}</p>
          <p class="text-grey"> {{ comment }} </p>

          <q-btn outline padding="none" size="1.1rem" flat no-caps label="Reply"/>
        </div>
      </div>

      <hr style="color: #fcfcfc; width: 100%"/>
  </div>
</template>

<script>
export default {
  props: ['name', 'username', 'time', 'comment']

}
</script>
