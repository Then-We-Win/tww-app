<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-indigo-8">
          {{ $t('pages.tree.title') }}
        </div>
        <div class="text-subtitle2">
          {{ $t('pages.tree.subtitle') }}
        </div>
      </q-card-section>

      <q-separator></q-separator>
      <q-card-section class="q-pa-none">
        <simple-hierarchy></simple-hierarchy>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-sm">
      <q-card-section>
        <div class="text-h6 text-indigo-8">
          {{ $t('pages.tree.custom_icon') }}
        </div>
        <div class="text-subtitle2">
          {{ $t('pages.tree.subtitle') }}
        </div>
      </q-card-section>
      <q-separator></q-separator>

      <q-card-section class="q-pa-none">
        <custom-hierarchy></custom-hierarchy>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
    import CustomHierarchy from "components/custom-hierarchy";
    import SimpleHierarchy from "components/simple-hierarchy";

    export default {
        name: "TreeTable",
        components: {SimpleHierarchy, CustomHierarchy}
    }
</script>

<style scoped>

</style>
