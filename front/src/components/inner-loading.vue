<script>
import { QInnerLoading, QSpinnerPie } from 'quasar'
export default {
  functional: true,
  render (h, context) {
    return h(QInnerLoading, context.data, [
      h(QSpinnerPie, {
        props: {
          color: 'blue',
          size: '10em'
        }
      })
    ])
  }
}
</script>
