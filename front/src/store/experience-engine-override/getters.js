import get from 'lodash/get'
export default {
  getUserSettings: state => (path, defaultValue) => {
    return get((state.user && state.user.settings) || {}, path, defaultValue)
  }
}
