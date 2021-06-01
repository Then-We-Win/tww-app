<template>
  <div class="text-center">
    <h2>
      {{ $t('not_found') }} 
    </h2>
    <q-btn style="width:200px;" to="/" label="Home" />
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
