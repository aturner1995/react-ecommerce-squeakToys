module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    "timeout": 100,
    "load": {
      "before": [
        "responseTime",
        "logger",
        "cors",
        "responses",
        "gzip"
      ],
      "order": [
        "Define the middlewares' load order by putting their name in this array is the right order"
      ],
      "after": [
        "parser",
        "router",
        "serve-react"
      ]
    }
  }
];
