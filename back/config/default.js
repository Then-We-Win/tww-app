module.exports = {
  host: 'localhost',
  port: 9999,
  public: '../public/',
  mongodb: 'mongodb://localhost:27017/SourceV2',
  paginate: {
    default: 10,
    max: 50
  },
  cache: {
    clientConfig: {
      ttl: 300  // Time to live for client config cache (5 minutes = 300)
    }
  },
  authentication: {
    'entity': 'user',
    'service': 'users',
    'secret': 'ax5eOmKPD8n32wVB8J8yhTbe2P8=',
    'authStrategies': [
      'jwt',
      'local'
    ],
    'jwtOptions': {
      'header': {
        'typ': 'access'
      },
      'audience': 'https://yourdomain.com',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    },
    'local': {
      'usernameField': 'email',
      'passwordField': 'password'
    },
    'oauth': {
      'redirect': '/',
      'auth0': {
        'key': '<auth0 oauth key>',
        'secret': '<auth0 oauth secret>',
        'subdomain': '<auth0 subdomain>'
      },
      'google': {
        'key': '<google oauth key>',
        'secret': '<google oauth secret>',
        'scope': [
          'email',
          'profile',
          'openid'
        ]
      },
      'facebook': {
        'key': '<facebook oauth key>',
        'secret': '<facebook oauth secret>'
      },
      'twitter': {
        'key': '<twitter oauth key>',
        'secret': '<twitter oauth secret>'
      },
      'github': {
        'key': '<github oauth key>',
        'secret': '<github oauth secret>'
      }
    }
  }
};
