<template>
  <q-item class="row bg-grey-4">
    <q-item-section avatar>
      <q-avatar>
        <img :src="user.avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ user.name }}</q-item-label>
      <q-item-label caption lines="1">{{ user.title }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      {{ user.status }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "MessagesSubheader",
  props: ["user"]
};
</script>

