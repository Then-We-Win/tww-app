// This function was modified from
// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
export function doTimeSince (date, short) {
  var seconds = Math.floor((new Date() - date) / 1000)
  var label = ''

  var interval = seconds / 31536000
  if (interval > 1) {
    if (short) {
      label = ' yr'
    } else {
      label = ' year'
    }
    const nbr = Math.floor(interval)
    if (nbr > 1) {
      label += 's'
    }
    return nbr + label + ' ago'
  }

  interval = seconds / 2592000
  if (interval > 1) {
    if (short) {
      label = ' mo'
    } else {
      label = ' month'
    }
    const nbr = Math.floor(interval)
    if (nbr > 1) {
      label += 's'
    }
    return nbr + label + ' ago'
  }

  interval = seconds / 86400
  if (interval > 1) {
    // no standard shorthand for days
    label = ' day'
    const nbr = Math.floor(interval)
    if (nbr > 1) {
      label += 's'
    }
    return nbr + label + ' ago'
  }

  interval = seconds / 3600
  if (interval > 1) {
    if (short) {
      label = ' hr'
    } else {
      label = ' hour'
    }
    const nbr = Math.floor(interval)
    if (nbr > 1) {
      label += 's'
    }
    return nbr + label + ' ago'
  }

  interval = seconds / 60
  if (interval > 1) {
    if (short) {
      label = ' min'
    } else {
      label = ' minute'
    }
    const nbr = Math.floor(interval)
    if (nbr > 1) {
      label += 's'
    }
    return nbr + label + ' ago'
  }

  if (short) {
    label = ' sec'
  } else {
    label = ' second'
  }
  const nbr = Math.floor(interval)
  if (nbr > 1) {
    label += 's'
  }
  return nbr + label + ' ago'
}

export function getTimeSince (date) {
  return doTimeSince(date, false)
}

export function getTimeShort (date) {
  return this.doTimeSince(date, true)
}

export default doTimeSince
