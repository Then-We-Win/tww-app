<template>
  <q-page class="flex column" v-if="products.length > 0" style="padding: 20px">
    <h4>Products JSON...</h4>
    <vue-json-pretty :data="products" :deep="0" />
    <h4>Users JSON...</h4>
    <vue-json-pretty :data="users" :deep="0" />
    <h4>Orders JSON...</h4>
    <vue-json-pretty :data="orders" />
    <h4>Config JSON...</h4>
    <vue-json-pretty :data="$config" :deep="0" />
    <h4>Products rendered...</h4>
    <section class="flex flex-center">
      <entity
        v-for="product in products"
        template="product"
        :object="product"
        :key="product.id"
      />
    </section>
  </q-page>
</template>

<script>
import vueJsonPretty from 'vue-json-pretty'
export default {
  name: 'PageIndex',
  components: { vueJsonPretty },
  data () {
    return {
      products: [],
      users: [],
      orders: {},
      config: {}
    }
  },
  mounted () {
    // Get all users...
    this.$api.service('users').find().then((r) => {
      console.log('Users...', r)
      this.users = r
    })

    // Get all products...
    this.$api.service('products').get(this.$config.config).then((r) => {
      console.log('Products...', r)
      this.products = r.products
    })

    // Get an order...
    const order = {
      'draft_order': {
        'line_items': [
          {
            'variant_id': 30005218967634,
            'quantity': 1
          }
        ]
      }
    }
    this.$api.service('orders').create(order, { query: { client: this.$config.config } }).then((r) => {
      console.log('Created order...', r.draft_order.id)
      console.log('Getting order again...')
      this.$api.service('orders').get(this.$config.config, { query: { id: r.draft_order.id } }).then((r) => {
        console.log('Order details', r)
        this.orders = r
      })
    })
  }
}
</script>
