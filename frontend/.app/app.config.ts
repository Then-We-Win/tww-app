export default defineAppConfig({
  "title": "Tairo Quick Starter",
  "error": {
    "logo": {
      "component": "TairoLogo",
      "props": {
        "class": "text-primary-500 mx-auto h-40 p-6"
      }
    }
  },
  "panels": [],
  "topnav": {
    "navigation": {
      "enabled": true,
      "logo": {
        "component": "TairoLogo",
        "props": {
          "class": "text-primary-500 h-10 w-10"
        }
      },
      "header": {},
      "items": []
    },
    "circularMenu": {
      "enabled": true,
      "tools": []
    },
    "toolbar": {
      "enabled": true,
      "showTitle": false,
      "tools": []
    },
    "footer": {
      "enabled": false,
      "logoSeparator": {
        "component": "TairoLogo",
        "props": {
          "class": "text-primary-500 h-7 w-7"
        }
      },
      "logo": {
        "component": "TairoLogoText",
        "props": {
          "class": "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
        }
      },
      "copyright": {
        "name": "",
        "to": "",
        "since": ""
      },
      "links": []
    }
  }
})