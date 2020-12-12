<template>
  <q-btn @click="create()" class="q-mt-xl text-black float-right" style="background: #F2F2F2" rounded padding='8px 40px' unelevated  no-caps label='Create To Do'/>
</template>
<script>
export default {
  methods: {
    create(){
      this.$root.$emit('CREATE NEW')
    }
  },
}
</script>
