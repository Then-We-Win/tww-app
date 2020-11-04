
/**
 * Currently using Sentry for error reporting...
 * Login to sentry.io with nick@sourcedigital.net / Makeitso1 to view and edit settings.
 */
import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
  dsn: 'https://75fad2a56a8747ffb4bf5318ba49176b@sentry.io/176417',
  integrations: [new Integrations.Vue({ Vue, attachProps: true, logErrors: true })]
})
